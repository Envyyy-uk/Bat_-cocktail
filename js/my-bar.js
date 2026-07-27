/* Логіка сторінки my-bar.html: підбір за інгредієнтами + додавання власних коктейлів. */

(function () {
  const GLASS_SHAPE_BY_LABEL = {
    "Highball": "highball",
    "Rocks": "rocks",
    "Coupette": "coupette",
    "S&W Martini Glass": "martini",
    "Flute": "flute",
    "Brandy Balloon": "balloon",
    "Tasting Glass": "tasting",
    "Sling Glass": "sling"
  };

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
    all.forEach(c => (c.tags || []).forEach(t => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "uk"));
  }

  function renderCloud() {
    const tags = allTagsSorted();
    cloud.innerHTML = tags.map(t =>
      `<button type="button" class="chip${selected.has(t) ? " active" : ""}" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`
    ).join("");
    cloud.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const t = chip.dataset.tag;
        selected.has(t) ? selected.delete(t) : selected.add(t);
        chip.classList.toggle("active");
        renderResults();
      });
    });
  }

  function renderResults() {
    if (selected.size === 0) {
      resultsWrap.innerHTML = `<div class="empty-state">Обери хоча б один інгредієнт вище, щоб побачити рекомендації.</div>`;
      return;
    }
    const all = getAllCocktails();
    const scored = all.map(c => {
      const tags = c.tags || [];
      const matched = tags.filter(t => selected.has(t));
      const missing = tags.filter(t => !selected.has(t));
      return { c, matchedCount: matched.length, total: tags.length, missing };
    }).filter(x => x.matchedCount > 0)
      .sort((a, b) => (b.matchedCount / (b.total || 1)) - (a.matchedCount / (a.total || 1)) || b.matchedCount - a.matchedCount);

    if (!scored.length) {
      resultsWrap.innerHTML = `<div class="empty-state">Жоден коктейль не збігається з обраними інгредієнтами.</div>`;
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
              ${full ? "Усі інгредієнти в наявності ✓" : `Бракує: <strong>${missing.map(escapeHtml).join(", ")}</strong>`}
            </div>
          </div>
          <div class="match-score ${full ? "" : "partial"}">${full ? "Можна зробити" : `${total - missing.length}/${total}`}</div>
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
    row.innerHTML = `<input type="text" placeholder="${placeholder}"><button type="button" class="row-remove" title="Видалити">×</button>`;
    row.querySelector(".row-remove").addEventListener("click", () => row.remove());
    container.appendChild(row);
    return row;
  }

  // Стартові рядки
  addRow(ingredientRows, "Наприклад, Джин — 40 мл");
  addRow(ingredientRows, "Наприклад, Лимонний сік — 20 мл");
  addRow(methodRows, "Наприклад, Струсити з льодом і процідити");

  document.getElementById("add-ingredient-row").addEventListener("click", () =>
    addRow(ingredientRows, "Інгредієнт — кількість")
  );
  document.getElementById("add-method-row").addEventListener("click", () =>
    addRow(methodRows, "Наступний крок")
  );

  // Фото
  const photoInput = document.getElementById("f-photo");
  const photoDrop = document.getElementById("photo-drop");
  const photoText = document.getElementById("photo-drop-text");
  let photoDataUrl = null;

  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      photoDataUrl = reader.result;
      photoText.innerHTML = `<img src="${photoDataUrl}" alt="Прев'ю"><div>Фото завантажено — клікни, щоб змінити</div>`;
    };
    reader.readAsDataURL(file);
  });

  function resetPhoto() {
    photoDataUrl = null;
    photoText.innerHTML = "Натисни, щоб завантажити фото коктейлю (jpg/png)";
  }

  document.getElementById("reset-form").addEventListener("click", () => {
    setTimeout(() => {
      ingredientRows.innerHTML = "";
      methodRows.innerHTML = "";
      addRow(ingredientRows, "Наприклад, Джин — 40 мл");
      addRow(ingredientRows, "Наприклад, Лимонний сік — 20 мл");
      addRow(methodRows, "Наприклад, Струсити з льодом і процідити");
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
          <span class="custom-badge">Ваш рецепт</span>
          ${cardMediaHtml(c)}
        </div>
        <div class="card-body">
          <div class="cat">${escapeHtml(c.category || "")}</div>
          <h3>${escapeHtml(c.name)}</h3>
          <p class="teaser">${escapeHtml((c.story || "Без опису.").slice(0, 90))}</p>
          <div class="glass-tag">🥃 ${escapeHtml(c.glass || "")}</div>
          <div style="margin-top:12px;">
            <button type="button" class="btn-danger" data-delete="${escapeHtml(c.slug)}">Видалити</button>
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

    const glassLabel = document.getElementById("f-glass").value;
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
      glass: glassLabel,
      glassShape: GLASS_SHAPE_BY_LABEL[glassLabel] || "coupette",
      color: colorForName(name),
      ingredients: ingredients.length ? ingredients : ["Інгредієнти не вказано"],
      method: method.length ? method : ["Метод не вказано"],
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
    addRow(ingredientRows, "Наприклад, Джин — 40 мл");
    addRow(ingredientRows, "Наприклад, Лимонний сік — 20 мл");
    addRow(methodRows, "Наприклад, Струсити з льодом і процідити");
    resetPhoto();

    renderCustomGrid();
    renderCloud();
    renderResults();

    customGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  renderCustomGrid();
})();
