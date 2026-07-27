/* Спільні дрібнички: мобільне меню, SVG-плейсхолдери склянок, картки. */

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

/* ---- SVG-ілюстрації склянок (плейсхолдер, поки немає реальних фото) ---- */

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

function glassArt(shape, color) {
  // Кожен бокал отримує власний унікальний id для градієнта — інакше однакові
  // id="liquid" у кількох SVG на одній сторінці конфліктують і колір "губиться".
  const id = "liq-" + Math.random().toString(36).slice(2, 9);
  const paths = (GLASS_PATHS[shape] || GLASS_PATHS.coupette).split("url(#liquid)").join(`url(#${id})`);
  return `<svg class="glass-art" viewBox="0 0 120 112" xmlns="http://www.w3.org/2000/svg" style="color:${color}">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0.65"/>
      </linearGradient>
    </defs>
    ${paths}
  </svg>`;
}

/* Коли реального фото images/cocktails/<slug>.jpg немає (404), браузер викликає
   onerror="handleGlassImgError(this)" — і ми підміняємо <img> намальованим бокалом.
   Дані передаються через data-* атрибути, щоб не запихати SVG/лапки в inline-JS. */
function handleGlassImgError(imgEl) {
  imgEl.onerror = null;
  const shape = imgEl.getAttribute("data-glass-shape") || "coupette";
  const color = imgEl.getAttribute("data-glass-color") || "#cda45e";
  const wrap = document.createElement("div");
  wrap.style.cssText = "display:flex;align-items:center;justify-content:center;width:100%;height:100%;";
  wrap.innerHTML = glassArt(shape, color);
  imgEl.replaceWith(wrap);
}

/* Медіа для картки в сітці: реальне фото images/cocktails/<slug>.(jpg|jpeg|png|webp),
   якщо його нема — акуратний намальований бокал відповідного кольору. */
function cardMediaHtml(c) {
  if (c.photo) { // dataURL для власних коктейлів користувача
    return `<img src="${c.photo}" alt="${escapeHtml(c.name)}">`;
  }
  return `<img src="images/cocktails/${c.slug}.jpg" alt="${escapeHtml(c.name)}"
    data-glass-shape="${escapeHtml(c.glassShape || "")}" data-glass-color="${escapeHtml(c.color || "")}"
    onerror="handleGlassImgError(this)">`;
}

function detailMediaHtml(c) {
  return cardMediaHtml(c);
}

document.addEventListener("DOMContentLoaded", initNavToggle);
