/* Спільні дрібнички: мобільне меню, детальні SVG-ілюстрації бокалів, картки. */

function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[s]));
}

/* =====================================================================
   Детальні SVG-ілюстрації бокалів — плейсхолдер, поки немає реальних фото.
   Кожен коктейль малюється з власною формою склянки, кольором рідини,
   текстурою (прозора / піниста / газована / щільна) та гарнірами
   (м'ята, цитрусові кружечки, вишні, твіст, селера, лід, дим тощо),
   щоб картки виглядали по-різному і натякали на смак напою.
   ===================================================================== */

const GLASS_PATHS = {
  highball: `<rect x="34" y="14" width="52" height="86" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="36" y="46" width="48" height="52" rx="2" fill="url(#liquid)"/>`,
  sling: `<path d="M40 12 L60 12 L72 96 Q60 104 50 104 Q40 104 28 96 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M34 50 L66 50 L72 96 Q60 104 50 104 Q40 104 28 96 Z" fill="url(#liquid)"/>`,
  rocks: `<rect x="28" y="34" width="64" height="66" rx="5" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <rect x="30" y="56" width="60" height="42" rx="3" fill="url(#liquid)"/>`,
  coupette: `<path d="M22 20 Q22 52 60 52 Q98 52 98 20" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M24 22 Q26 48 60 48 Q94 48 96 22 Z" fill="url(#liquid)"/>
    <line x1="60" y1="52" x2="60" y2="92" stroke="currentColor" stroke-width="2.5"/>
    <line x1="38" y1="98" x2="82" y2="98" stroke="currentColor" stroke-width="2.5"/>`,
  martini: `<path d="M18 18 L60 60 L102 18 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M27 24 L60 52 L93 24 Z" fill="url(#liquid)"/>
    <line x1="60" y1="60" x2="60" y2="96" stroke="currentColor" stroke-width="2.5"/>
    <line x1="38" y1="100" x2="82" y2="100" stroke="currentColor" stroke-width="2.5"/>`,
  flute: `<path d="M46 10 L74 10 L68 80 Q60 86 52 80 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M48 44 L72 44 L68 80 Q60 86 52 80 Z" fill="url(#liquid)"/>
    <line x1="60" y1="86" x2="60" y2="100" stroke="currentColor" stroke-width="2.5"/>
    <line x1="44" y1="104" x2="76" y2="104" stroke="currentColor" stroke-width="2.5"/>`,
  balloon: `<path d="M30 30 Q30 90 60 90 Q90 90 90 30 Q90 12 60 12 Q30 12 30 30 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M32 38 Q34 84 60 84 Q86 84 88 38 Q76 48 60 48 Q44 48 32 38 Z" fill="url(#liquid)"/>
    <line x1="60" y1="90" x2="60" y2="102" stroke="currentColor" stroke-width="2.5"/>
    <line x1="42" y1="106" x2="78" y2="106" stroke="currentColor" stroke-width="2.5"/>`,
  tasting: `<path d="M38 16 Q38 70 60 78 Q82 70 82 16 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <path d="M40 40 Q41 66 60 74 Q79 66 80 40 Z" fill="url(#liquid)"/>`
};

/* Геометрія кожної форми: центр, висота вінця (для гарнірів) та приблизна
   область рідини (для піни/бульбашок/льоду). */
const SHAPE_GEOM = {
  highball: { cx: 60, rimY: 14, liquidTop: 46, liquidBottom: 98, halfW: 24 },
  sling: { cx: 50, rimY: 12, liquidTop: 50, liquidBottom: 104, halfW: 20 },
  rocks: { cx: 60, rimY: 34, liquidTop: 56, liquidBottom: 98, halfW: 30 },
  coupette: { cx: 60, rimY: 20, liquidTop: 23, liquidBottom: 48, halfW: 37 },
  martini: { cx: 60, rimY: 18, liquidTop: 24, liquidBottom: 52, halfW: 33 },
  flute: { cx: 64, rimY: 10, liquidTop: 44, liquidBottom: 80, halfW: 12 },
  balloon: { cx: 60, rimY: 12, liquidTop: 38, liquidBottom: 84, halfW: 28 },
  tasting: { cx: 60, rimY: 16, liquidTop: 40, liquidBottom: 74, halfW: 21 }
};

/* ---- Бібліотека гарнірів: маленькі SVG-фрагменти з локальним центром (0,0) ---- */
const GARNISH_ICONS = {
  mint: () => `<path d="M0 6 L0 -9" stroke="#5c8a4a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M0 -1 C -7 -3 -9 -9 -6 -14 C -2 -11 0 -6 0 -1 Z" fill="#7fae6b"/>
    <path d="M0 -5 C 7 -7 9 -13 6 -18 C 2 -15 0 -10 0 -5 Z" fill="#8fce8a"/>
    <path d="M0 -9 C -3 -13 -2 -18 2 -20 C 4 -16 3 -12 0 -9 Z" fill="#a9d6a0"/>`,
  "lemon-wheel": () => citrusWheel("#f5e08a", "#d9c15e", 10),
  "lime-wheel": () => citrusWheel("#c7e6b0", "#7fae6b", 10),
  "orange-slice": () => citrusWheel("#f0b25e", "#c9812f", 11.5),
  cherry: () => `<path d="M-3 -9 C -1 -3 -1 -1 -3 2" stroke="#6b3a22" stroke-width="1.3" fill="none"/>
    <path d="M5 -11 C 2 -4 1 -1 -1 2" stroke="#6b3a22" stroke-width="1.3" fill="none"/>
    <circle cx="-4" cy="4" r="4.6" fill="#8b1e2b"/>
    <circle cx="1" cy="5" r="4.6" fill="#a3283a"/>
    <circle cx="-5.4" cy="2.2" r="1.2" fill="#c9506a" opacity="0.7"/>`,
  berries: () => `${[[-6, -2], [0, -6], [6, -2], [-3, 4], [3, 4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.3" fill="#b5294a"/>`).join("")}
    <path d="M0 -6 L-4 -12 M0 -6 L4 -12" stroke="#5c8a4a" stroke-width="1.2" fill="none"/>`,
  twist: () => `<path d="M0 4 C 8 2, 9 -6, 2 -8 C -5 -10, -5 -17, 3 -19" stroke="#e8a33d" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
  celery: () => `<rect x="-2.5" y="-26" width="5" height="30" rx="2.4" fill="#b7dba0" stroke="#7fae6b" stroke-width="0.8"/>
    <path d="M-2 -26 q-6 -6 -11 -7 M2 -26 q6 -6 11 -7 M0 -26 q0 -9 0 -11" stroke="#7fae6b" stroke-width="1.3" fill="none" stroke-linecap="round"/>`,
  ginger: () => `<path d="M0 4 L0 -9" stroke="#c9812f" stroke-width="1.6"/>
    <rect x="-5" y="-18" width="10" height="10" rx="2" fill="#e8b25e" stroke="#c9812f" stroke-width="1" transform="rotate(20 0 -13)"/>`,
  passionfruit: () => `<path d="M-10 1 A10 10 0 0 1 10 1 Z" fill="#e8b25e" stroke="#c9812f" stroke-width="1"/>
    ${[[-5, -1], [-1, -2], [3, -1], [6, -2], [-3, -4], [1, -4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="0.8" fill="#6b3a22"/>`).join("")}`
};

function citrusWheel(fill, rind, r) {
  return `<circle r="${r}" fill="${rind}"/>
    <circle r="${r - 1.6}" fill="${fill}"/>
    <g stroke="${rind}" stroke-width="0.8" opacity="0.65">
      <line x1="0" y1="${-(r - 2)}" x2="0" y2="${r - 2}"/>
      <line x1="${-(r - 3)}" y1="${-(r - 6)}" x2="${r - 3}" y2="${r - 6}"/>
      <line x1="${-(r - 3)}" y1="${r - 6}" x2="${r - 3}" y2="${-(r - 6)}"/>
    </g>
    <circle r="2.2" fill="${rind}" opacity="0.5"/>`;
}

function garnishGroup(shape) {
  const geom = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const list = [];
  return { geom, add(icon, dx, dy) { list.push({ icon, dx, dy }); }, list };
}

function renderGarnishes(shape, keys) {
  if (!keys || !keys.length) return "";
  const geom = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const offsets = keys.length === 1 ? [0] : keys.length === 2 ? [-13, 13] : [-16, 0, 16];
  return keys.slice(0, 3).map((key, i) => {
    const fn = GARNISH_ICONS[key];
    if (!fn) return "";
    return `<g transform="translate(${geom.cx + offsets[i]},${geom.rimY - 2})">${fn()}</g>`;
  }).join("");
}

function renderRim(shape, rim) {
  if (!rim) return "";
  const geom = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const color = rim === "tajin" ? "#c9622f" : "#f4f1e6";
  const half = geom.halfW * 0.9;
  const dots = Array.from({ length: 10 }, (_, i) => {
    const x = -half + (half * 2 / 9) * i;
    return `<circle cx="${x.toFixed(1)}" cy="0" r="1.1" fill="${color}"/>`;
  }).join("");
  return `<g transform="translate(${geom.cx},${geom.rimY - 1})" opacity="0.9">${dots}</g>`;
}

function renderSmoke(shape) {
  const geom = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  return `<path d="M0 0 C -7 -8, 4 -11, -2 -20 C -8 -28, 5 -30, 0 -40" stroke="#d8d8d8" stroke-width="3" fill="none" opacity="0.32" stroke-linecap="round" transform="translate(${geom.cx + 10},${geom.rimY - 4})"/>`;
}

function renderIce(shape) {
  const g = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const x1 = g.cx - g.halfW * 0.42, y1 = g.liquidTop + 6;
  const x2 = g.cx + g.halfW * 0.18, y2 = g.liquidTop + 13;
  return `<g opacity="0.5">
    <rect x="${x1 - 6}" y="${y1 - 6}" width="13" height="13" rx="2.5" fill="#ffffff" opacity="0.28" stroke="#ffffff" stroke-opacity="0.6" transform="rotate(-10 ${x1} ${y1})"/>
    <rect x="${x2 - 5.5}" y="${y2 - 5.5}" width="12" height="12" rx="2.5" fill="#ffffff" opacity="0.24" stroke="#ffffff" stroke-opacity="0.6" transform="rotate(12 ${x2} ${y2})"/>
  </g>`;
}

function renderFoamCap(shape) {
  const g = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const { cx, liquidTop: top, halfW: hw } = g;
  return `<path d="M${cx - hw} ${top + 7} Q${cx - hw * 0.5} ${top - 5} ${cx} ${top + 1} Q${cx + hw * 0.5} ${top - 6} ${cx + hw} ${top + 5} L${cx + hw} ${top + 13} L${cx - hw} ${top + 13} Z" fill="#fdf8ec" opacity="0.9"/>`;
}

function renderBubbles(shape) {
  const g = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const pts = [[-0.5, 0.15], [0.2, 0.35], [-0.25, 0.55], [0.4, 0.7], [0.05, 0.85], [-0.35, 0.4]];
  return pts.map(([fx, fy]) => {
    const x = g.cx + fx * g.halfW;
    const y = g.liquidTop + fy * (g.liquidBottom - g.liquidTop);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.3" fill="#ffffff" opacity="0.55"/>`;
  }).join("");
}

function renderFlecks(shape, color) {
  const g = SHAPE_GEOM[shape] || SHAPE_GEOM.coupette;
  const pts = [[-0.4, 0.2], [0.3, 0.3], [-0.1, 0.5], [0.45, 0.6], [-0.35, 0.75], [0.15, 0.85]];
  return pts.map(([fx, fy]) => {
    const x = g.cx + fx * g.halfW;
    const y = g.liquidTop + fy * (g.liquidBottom - g.liquidTop);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.1" fill="#000000" opacity="0.14"/>`;
  }).join("");
}

function glassArt(shape, color, visual) {
  visual = visual || {};
  const texture = visual.texture || "clear";
  // Кожен бокал отримує власний унікальний id для градієнта — інакше однакові
  // id="liquid" у кількох SVG на одній сторінці конфліктують і колір "губиться".
  const id = "liq-" + Math.random().toString(36).slice(2, 9);
  const paths = (GLASS_PATHS[shape] || GLASS_PATHS.coupette).split("url(#liquid)").join(`url(#${id})`);
  const stopTop = texture === "opaque" ? 1 : 0.95;
  const stopBottom = texture === "opaque" ? 0.92 : 0.65;

  let overlay = "";
  if (texture === "opaque") overlay += renderFlecks(shape, color);
  if (texture === "frothy") overlay += renderFoamCap(shape);
  if (texture === "fizzy") overlay += renderBubbles(shape);
  if (visual.ice) overlay += renderIce(shape);

  let accents = renderGarnishes(shape, visual.garnish);
  accents += renderRim(shape, visual.rim);
  if (visual.smoke) accents += renderSmoke(shape);

  return `<svg class="glass-art" viewBox="-14 -34 148 156" xmlns="http://www.w3.org/2000/svg" style="color:${color}">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="${stopTop}"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="${stopBottom}"/>
      </linearGradient>
    </defs>
    ${paths}
    ${overlay}
    ${accents}
  </svg>`;
}

/* Коли реального фото images/cocktails/<slug>.jpg немає (404), браузер викликає
   onerror="handleGlassImgError(this)" — і ми підміняємо <img> намальованим бокалом,
   підвантажуючи повні дані коктейлю (форма, колір, гарнір) за slug. */
function handleGlassImgError(imgEl) {
  imgEl.onerror = null;
  const slug = imgEl.getAttribute("data-cocktail-slug");
  const c = (typeof getCocktailBySlug === "function") ? getCocktailBySlug(slug) : null;
  const shape = (c && c.glassShape) || imgEl.getAttribute("data-glass-shape") || "coupette";
  const color = (c && c.color) || imgEl.getAttribute("data-glass-color") || "#cda45e";
  const visual = c && c.visual;
  const wrap = document.createElement("div");
  wrap.style.cssText = "display:flex;align-items:center;justify-content:center;width:100%;height:100%;";
  wrap.innerHTML = glassArt(shape, color, visual);
  imgEl.replaceWith(wrap);
}

/* Медіа для картки в сітці: реальне фото images/cocktails/<slug>.(jpg|jpeg|png|webp),
   якщо його нема — акуратний намальований бокал відповідного кольору з гарніром. */
function cardMediaHtml(c) {
  if (c.photo) { // dataURL для власних коктейлів користувача
    return `<img src="${c.photo}" alt="${escapeHtml(c.name)}">`;
  }
  return `<img src="images/cocktails/${c.slug}.jpg" alt="${escapeHtml(c.name)}"
    data-cocktail-slug="${escapeHtml(c.slug)}"
    onerror="handleGlassImgError(this)">`;
}

function detailMediaHtml(c) {
  return cardMediaHtml(c);
}

document.addEventListener("DOMContentLoaded", initNavToggle);
