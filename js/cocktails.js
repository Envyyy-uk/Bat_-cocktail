/* Логіка сторінки cocktails.html: список + деталі на окремій "сторінці" (hash-роутинг). */

(function () {
  const grid = document.getElementById("cocktail-grid");
  const emptyState = document.getElementById("empty-state");
  const chipsWrap = document.getElementById("category-chips");
  const searchInput = document.getElementById("search-input");
  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");

  let activeCategory = "all";

  function buildChips() {
    const all = ["all", ...CATEGORIES];
    chipsWrap.innerHTML = all.map(cat =>
      `<button class="chip${cat === activeCategory ? " active" : ""}" data-cat="${escapeHtml(cat)}">${cat === "all" ? escapeHtml(t("cocktails.chip.all")) : escapeHtml(categoryLabel(cat))}</button>`
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
    const haystack = [
      c.name, tCocktail(c, "subtitle"), categoryLabel(c.category),
      ...(tCocktail(c, "ingredients") || []), ...(tCocktail(c, "tags") || [])
    ].filter(Boolean).join(" ").toLowerCase();
    return haystack.includes(q);
  }

  function renderList() {
    const query = searchInput.value.trim();
    const all = getAllCocktails();
    const filtered = all.filter(c =>
      (activeCategory === "all" || c.category === activeCategory) && matchesSearch(c, query)
    );

    grid.innerHTML = filtered.map(c => {
      const story = tCocktail(c, "story") || "";
      const subtitle = tCocktail(c, "subtitle");
      return `
      <article class="cocktail-card" data-slug="${escapeHtml(c.slug)}">
        <div class="card-media">
          ${c.badgeKey ? `<span class="badge">${escapeHtml(badgeLabel(c.badgeKey))}</span>` : ""}
          ${c.isCustom ? `<span class="custom-badge">${escapeHtml(t("mybar.custom.badge"))}</span>` : ""}
          ${cardMediaHtml(c)}
        </div>
        <div class="card-body">
          <div class="cat">${escapeHtml(categoryLabel(c.category))}</div>
          <h3>${escapeHtml(c.name)}</h3>
          ${subtitle ? `<div class="subtitle">${escapeHtml(subtitle)}</div>` : ""}
          <p class="teaser">${escapeHtml(story.slice(0, 100))}${story.length > 100 ? "…" : ""}</p>
          <div class="glass-tag">🥃 ${escapeHtml(glassLabel(c.glassShape, c.category))}</div>
        </div>
      </article>
    `;
    }).join("");

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
      detailView.innerHTML = `<p>${escapeHtml(t("cocktails.notfound"))} <a href="cocktails.html" class="btn btn-ghost btn-small">${escapeHtml(t("cocktails.back"))}</a></p>`;
      return;
    }
    const subtitle = tCocktail(c, "subtitle");
    const ingredients = tCocktail(c, "ingredients") || [];
    const method = tCocktail(c, "method") || [];
    const garnish = tCocktail(c, "garnish");
    const story = tCocktail(c, "story");

    detailView.innerHTML = `
      <div class="detail-back" id="back-link">${escapeHtml(t("cocktails.back"))}</div>
      <div class="detail-grid">
        <div class="detail-media">
          ${c.badgeKey ? `<span class="badge" style="position:absolute;top:14px;left:14px;">${escapeHtml(badgeLabel(c.badgeKey))}</span>` : ""}
          ${detailMediaHtml(c)}
        </div>
        <div class="detail-head">
          <div class="cat">${escapeHtml(categoryLabel(c.category))}</div>
          <h1>${escapeHtml(c.name)}</h1>
          ${subtitle ? `<div class="subtitle">${escapeHtml(subtitle)}</div>` : ""}
          <div class="meta-row">
            <span class="meta-pill">🥃 ${escapeHtml(glassLabel(c.glassShape, c.category))}</span>
            ${c.badgeKey ? `<span class="meta-pill">${escapeHtml(badgeLabel(c.badgeKey))}</span>` : ""}
            ${garnish ? `<span class="meta-pill">${escapeHtml(t("cocktails.pill.garnish"))}</span>` : ""}
          </div>

          <div class="detail-section">
            <h2>${escapeHtml(t("cocktails.section.ingredients"))}</h2>
            <ol class="ingredient-list">
              ${ingredients.map(i => `<li>${escapeHtml(i)}</li>`).join("")}
            </ol>
          </div>

          <div class="detail-section">
            <h2>${escapeHtml(t("cocktails.section.method"))}</h2>
            <ol class="method-list">
              ${method.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
            </ol>
          </div>

          ${garnish ? `
          <div class="detail-section">
            <h2>${escapeHtml(t("cocktails.section.garnish"))}</h2>
            <div class="garnish-box">${escapeHtml(garnish)}</div>
          </div>` : ""}

          ${story ? `
          <div class="detail-section">
            <h2>${escapeHtml(t("cocktails.section.story"))}</h2>
            <div class="story-box">${escapeHtml(story)}</div>
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
