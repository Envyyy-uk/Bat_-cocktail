/* Логіка сторінки cocktails.html: список + деталі на окремій "сторінці" (hash-роутинг). */

(function () {
  const grid = document.getElementById("cocktail-grid");
  const emptyState = document.getElementById("empty-state");
  const chipsWrap = document.getElementById("category-chips");
  const searchInput = document.getElementById("search-input");
  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");

  let activeCategory = "Всі";

  function pluralRecipe(n) {
    if (n % 10 === 1 && n % 100 !== 11) return "рецепт";
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "рецепти";
    return "рецептів";
  }

  function buildChips() {
    const all = ["Всі", ...CATEGORIES];
    chipsWrap.innerHTML = all.map(cat =>
      `<button class="chip${cat === activeCategory ? " active" : ""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`
    ).join("");
    chipsWrap.querySelectorAll(".chip").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        buildChips();
        renderList();
      });
    });
  }

  function matchesSearch(c, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    const haystack = [c.name, c.subtitle, c.category, ...(c.ingredients || []), ...(c.tags || [])]
      .filter(Boolean).join(" ").toLowerCase();
    return haystack.includes(q);
  }

  function renderList() {
    const query = searchInput.value.trim();
    const all = getAllCocktails();
    const filtered = all.filter(c =>
      (activeCategory === "Всі" || c.category === activeCategory) && matchesSearch(c, query)
    );

    grid.innerHTML = filtered.map(c => `
      <article class="cocktail-card" data-slug="${escapeHtml(c.slug)}">
        <div class="card-media">
          ${c.badge ? `<span class="badge">${escapeHtml(c.badge)}</span>` : ""}
          ${c.isCustom ? `<span class="custom-badge">Ваш рецепт</span>` : ""}
          ${cardMediaHtml(c)}
        </div>
        <div class="card-body">
          <div class="cat">${escapeHtml(c.category || "")}</div>
          <h3>${escapeHtml(c.name)}</h3>
          ${c.subtitle ? `<div class="subtitle">${escapeHtml(c.subtitle)}</div>` : ""}
          <p class="teaser">${escapeHtml((c.story || "").slice(0, 100))}${(c.story || "").length > 100 ? "…" : ""}</p>
          <div class="glass-tag">🥃 ${escapeHtml(c.glass || "")}</div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".cocktail-card").forEach(card => {
      card.addEventListener("click", () => {
        location.hash = "/c/" + card.dataset.slug;
      });
    });

    emptyState.style.display = filtered.length ? "none" : "block";
  }

  function renderDetail(slug) {
    const c = getCocktailBySlug(slug);
    if (!c) {
      detailView.innerHTML = `<p>Коктейль не знайдено. <a href="cocktails.html" class="btn btn-ghost btn-small">← До списку</a></p>`;
      return;
    }
    detailView.innerHTML = `
      <div class="detail-back" id="back-link">← До всіх коктейлів</div>
      <div class="detail-grid">
        <div class="detail-media">
          ${c.badge ? `<span class="badge" style="position:absolute;top:14px;left:14px;">${escapeHtml(c.badge)}</span>` : ""}
          ${detailMediaHtml(c)}
        </div>
        <div class="detail-head">
          <div class="cat">${escapeHtml(c.category || "")}</div>
          <h1>${escapeHtml(c.name)}</h1>
          ${c.subtitle ? `<div class="subtitle">${escapeHtml(c.subtitle)}</div>` : ""}
          <div class="meta-row">
            <span class="meta-pill">🥃 ${escapeHtml(c.glass || "")}</span>
            ${c.badge ? `<span class="meta-pill">${escapeHtml(c.badge)}</span>` : ""}
            ${c.garnish ? `<span class="meta-pill">🌿 Гарнір</span>` : ""}
          </div>

          <div class="detail-section">
            <h2>Інгредієнти</h2>
            <ol class="ingredient-list">
              ${(c.ingredients || []).map(i => `<li>${escapeHtml(i)}</li>`).join("")}
            </ol>
          </div>

          <div class="detail-section">
            <h2>Метод приготування</h2>
            <ol class="method-list">
              ${(c.method || []).map(s => `<li>${escapeHtml(s)}</li>`).join("")}
            </ol>
          </div>

          ${c.garnish ? `
          <div class="detail-section">
            <h2>Гарнір</h2>
            <div class="garnish-box">${escapeHtml(c.garnish)}</div>
          </div>` : ""}

          ${c.story ? `
          <div class="detail-section">
            <h2>Історія / про коктейль</h2>
            <div class="story-box">${escapeHtml(c.story)}</div>
          </div>` : ""}
        </div>
      </div>
    `;
    document.getElementById("back-link").addEventListener("click", () => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
      route();
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function route() {
    const hash = location.hash;
    const match = hash.match(/^#\/c\/(.+)$/);
    if (match) {
      listView.style.display = "none";
      detailView.style.display = "block";
      renderDetail(decodeURIComponent(match[1]));
    } else {
      detailView.style.display = "none";
      listView.style.display = "block";
      renderList();
    }
  }

  // Підтримка ?category=... з посилань на головній сторінці
  const params = new URLSearchParams(location.search);
  if (params.get("category") && CATEGORIES.includes(params.get("category"))) {
    activeCategory = params.get("category");
  }

  buildChips();
  searchInput.addEventListener("input", renderList);
  window.addEventListener("hashchange", route);
  route();
})();
