/* Логіка сторінки my-bar.html: підбір за інгредієнтами + додавання власних коктейлів. */

(function () {
  const GLASS_SHAPES = ["highball", "rocks", "coupette", "martini", "flute", "balloon", "tasting", "sling"];
  const PALETTE = ["#cda45e", "#e6784a", "#c96b8a", "#8fce8a", "#e8a33d", "#c81d4f", "#9fd6a1", "#d97b2e"];

  function colorForName(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return PALETTE[h % PALETTE.length];
  }

  function deriveTags(lines) {
    return lines
      .map(line => line.split(/—|-|\(/)[0].trim().toLowerCase())
      .filter(Boolean);
  }

  /* ---------------- Селекти категорії/склянки (мовозалежні) ---------------- */
  function populateSelects() {
    const catSelect = document.getElementById("f-category");
    catSelect.innerHTML = CATEGORIES.map(key =>
      `<option value="${escapeHtml(key)}">${escapeHtml(categoryLabel(key))}</option>`
    ).join("");
    catSelect.value = "signature";

    const glassSelect = document.getElementById("f-glass");
    glassSelect.innerHTML = GLASS_SHAPES.map(shape =>
      `<option value="${escapeHtml(shape)}">${escapeHtml(glassLabel(shape))}</option>`
    ).join("");
    glassSelect.value = "highball";
  }
  populateSelects();

  /* ---------------- Таби ---------------- */
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  /* ---------------- Таб 1: пошук за інгредієнтами ---------------- */
  const cloud = document.getElementById("ingredient-cloud");
  const resultsWrap = document.getElementById("finder-results");
  const selected = new Set();

  function allTagsSorted() {
    const all = getAllCocktails();
    const set = new Set();
    all.forEach(c => (tCocktail(c, "tags") || []).forEach(tag => set.add(tag)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, getLang()));
  }

  function renderCloud() {
    const tags = allTagsSorted();
    cloud.innerHTML = tags.map(tag =>
      `<button type="button" class="chip${selected.has(tag) ? " active" : ""}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`
    ).join("");
    cloud.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const tag = chip.dataset.tag;
        selected.has(tag) ? selected.delete(tag) : selected.add(tag);
        chip.classList.toggle("active");
        renderResults();
      });
    });
  }

  function renderResults() {
    if (selected.size === 0) {
      resultsWrap.innerHTML = `<div class="empty-state">${escapeHtml(t("mybar.finder.empty-select"))}</div>`;
      return;
    }
    const all = getAllCocktails();
    const scored = all.map(c => {
      const tags = tCocktail(c, "tags") || [];
      const matched = tags.filter(tag => selected.has(tag));
      const missing = tags.filter(tag => !selected.has(tag));
      return { c, matchedCount: matched.length, total: tags.length, missing };
    }).filter(x => x.matchedCount > 0)
      .sort((a, b) => (b.matchedCount / (b.total || 1)) - (a.matchedCount / (a.total || 1)) || b.matchedCount - a.matchedCount);

    if (!scored.length) {
      resultsWrap.innerHTML = `<div class="empty-state">${escapeHtml(t("mybar.finder.empty-nomatch"))}</div>`;
      return;
    }

    resultsWrap.innerHTML = scored.map(({ c, missing, total }) => {
      const full = missing.length === 0;
      return `
        <div class="match-card" data-slug="${escapeHtml(c.slug)}">
          <div class="match-thumb">${cardMediaHtml(c)}</div>
          <div class="match-info">
            <h4>${escapeHtml(c.name)}</h4>
            <div class="missing">
              ${full ? escapeHtml(t("mybar.finder.full-match")) : `${escapeHtml(t("mybar.finder.missing"))} <strong>${missing.map(escapeHtml).join(", ")}</strong>`}
            </div>
          </div>
          <div class="match-score ${full ? "" : "partial"}">${full ? escapeHtml(t("mybar.finder.canmake")) : `${total - missing.length}/${total}`}</div>
        </div>
      `;
    }).join("");

    resultsWrap.querySelectorAll(".match-card").forEach(card => {
      card.addEventListener("click", () => {
        window.location.href = "cocktails.html#/c/" + card.dataset.slug;
      });
    });
  }

  document.getElementById("clear-ingredients").addEventListener("click", () => {
    selected.clear();
    renderCloud();
    renderResults();
  });

  renderCloud();
  renderResults();

  /* ---------------- Таб 2: додавання власного коктейлю ---------------- */
  const ingredientRows = document.getElementById("ingredient-rows");
  const methodRows = document.getElementById("method-rows");

  function addRow(container, placeholder) {
    const row = document.createElement("div");
    row.className = "dynamic-row";
    row.innerHTML = `<input type="text" placeholder="${escapeHtml(placeholder)}"><button type="button" class="row-remove" title="×">×</button>`;
    row.querySelector(".row-remove").addEventListener("click", () => row.remove());
    container.appendChild(row);
    return row;
  }

  // Стартові рядки
  addRow(ingredientRows, t("mybar.ingredient.placeholder1"));
  addRow(ingredientRows, t("mybar.ingredient.placeholder2"));
  addRow(methodRows, t("mybar.step.placeholder1"));

  document.getElementById("add-ingredient-row").addEventListener("click", () =>
    addRow(ingredientRows, t("mybar.ingredient.placeholder-generic"))
  );
  document.getElementById("add-method-row").addEventListener("click", () =>
    addRow(methodRows, t("mybar.step.placeholder-generic"))
  );

  // Фото
  const photoInput = document.getElementById("f-photo");
  const photoText = document.getElementById("photo-drop-text");
  let photoDataUrl = null;

  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      photoDataUrl = reader.result;
      photoText.innerHTML = `<img src="${photoDataUrl}" alt="Preview"><div>${escapeHtml(t("mybar.form.photo.changed"))}</div>`;
    };
    reader.readAsDataURL(file);
  });

  function resetPhoto() {
    photoDataUrl = null;
    photoText.textContent = t("mybar.form.photo.drop");
  }

  document.getElementById("reset-form").addEventListener("click", () => {
    setTimeout(() => {
      ingredientRows.innerHTML = "";
      methodRows.innerHTML = "";
      addRow(ingredientRows, t("mybar.ingredient.placeholder1"));
      addRow(ingredientRows, t("mybar.ingredient.placeholder2"));
      addRow(methodRows, t("mybar.step.placeholder1"));
      resetPhoto();
    }, 0);
  });

  /* ---------------- Рендер сітки власних коктейлів ---------------- */
  const customGrid = document.getElementById("custom-grid");
  const customEmpty = document.getElementById("custom-empty");

  function renderCustomGrid() {
    const list = loadCustomCocktails();
    customEmpty.style.display = list.length ? "none" : "block";
    customGrid.innerHTML = list.map(c => `
      <article class="cocktail-card" data-slug="${escapeHtml(c.slug)}">
        <div class="card-media">
          <span class="custom-badge">${escapeHtml(t("mybar.custom.badge"))}</span>
          ${cardMediaHtml(c)}
        </div>
        <div class="card-body">
          <div class="cat">${escapeHtml(categoryLabel(c.category))}</div>
          <h3>${escapeHtml(c.name)}</h3>
          <p class="teaser">${escapeHtml((c.story || "").slice(0, 90))}</p>
          <div class="glass-tag">🥃 ${escapeHtml(glassLabel(c.glassShape))}</div>
          <div style="margin-top:12px;">
            <button type="button" class="btn-danger" data-delete="${escapeHtml(c.slug)}">${escapeHtml(t("mybar.custom.delete"))}</button>
          </div>
        </div>
      </article>
    `).join("");

    customGrid.querySelectorAll(".card-media, h3").forEach(el => {
      el.style.cursor = "pointer";
      el.addEventListener("click", (e) => {
        const slug = e.currentTarget.closest(".cocktail-card").dataset.slug;
        window.location.href = "cocktails.html#/c/" + slug;
      });
    });

    customGrid.querySelectorAll("[data-delete]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const slug = btn.dataset.delete;
        const updated = loadCustomCocktails().filter(c => c.slug !== slug);
        saveCustomCocktails(updated);
        renderCustomGrid();
        renderCloud();
        renderResults();
      });
    });
  }

  document.getElementById("add-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("f-name").value.trim();
    if (!name) return;

    const ingredients = Array.from(ingredientRows.querySelectorAll("input"))
      .map(i => i.value.trim()).filter(Boolean);
    const method = Array.from(methodRows.querySelectorAll("input"))
      .map(i => i.value.trim()).filter(Boolean);

    const glassShape = document.getElementById("f-glass").value;
    const existing = loadCustomCocktails();
    let slug = slugify(name);
    let n = 1;
    while (getAllCocktails().some(c => c.slug === slug)) {
      slug = slugify(name) + "-" + (++n);
    }

    const cocktail = {
      slug,
      name,
      category: document.getElementById("f-category").value,
      glassShape,
      color: colorForName(name),
      visual: { garnish: [], texture: "clear", ice: glassShape === "rocks" },
      ingredients: ingredients.length ? ingredients : [t("mybar.ingredient.placeholder-generic")],
      method: method.length ? method : [t("mybar.step.placeholder-generic")],
      garnish: document.getElementById("f-garnish").value.trim(),
      story: document.getElementById("f-story").value.trim(),
      photo: photoDataUrl,
      isCustom: true,
      tags: deriveTags(ingredients)
    };

    existing.push(cocktail);
    saveCustomCocktails(existing);

    e.target.reset();
    ingredientRows.innerHTML = "";
    methodRows.innerHTML = "";
    addRow(ingredientRows, t("mybar.ingredient.placeholder1"));
    addRow(ingredientRows, t("mybar.ingredient.placeholder2"));
    addRow(methodRows, t("mybar.step.placeholder1"));
    resetPhoto();

    renderCustomGrid();
    renderCloud();
    renderResults();

    customGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  renderCustomGrid();
})();
