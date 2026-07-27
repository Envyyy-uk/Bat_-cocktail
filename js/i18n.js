/* Багатомовність S&W Bar. Джерело — українська (в самому коді).
   Переклади для en/es/it/de/ru підвантажуються з js/ui-translations.js
   та js/translations.js (якщо ці файли підключені) — і якщо ключа там
   ще нема, сайт тихо падає назад на українську, нічого не ламаючи. */

const LANGS = [
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ru", label: "Русский", flag: "🇷🇺" }
];

function getLang() {
  const saved = localStorage.getItem("sw_lang");
  if (saved && LANGS.some(l => l.code === saved)) return saved;
  const nav = (navigator.language || "uk").slice(0, 2);
  return LANGS.some(l => l.code === nav) ? nav : "uk";
}

function setLang(code) {
  localStorage.setItem("sw_lang", code);
  location.reload();
}

/* ---------------- Інтерфейс (кнопки, заголовки, форми) ---------------- */

const UI_STRINGS_UK = {
  "nav.home": "Головна",
  "nav.cocktails": "Коктейлі",
  "nav.mybar": "Мій бар",

  "home.eyebrow": "Коктейльна карта S&W",
  "home.title.line1": "Мистецтво",
  "home.title.highlight": "гарного напою",
  "home.title.line2": "починається з деталей",
  "home.lead": "26 рецептів — від безалкогольних освіжаючих міксів до забутої класики на кшталт Sazerac та Last Word. Кожен коктейль на карті має власну історію, точні пропорції та детальний метод приготування — так, як готують за барною стійкою S&W.",
  "home.cta.cocktails": "Переглянути коктейлі",
  "home.cta.finder": "Підібрати за інгредієнтами",
  "home.stats.recipes": "рецептів",
  "home.stats.categories": "категорій",
  "home.stats.virgin": "безалкогольних",
  "home.bartender.note": "Фото нашого бармена скоро з'явиться тут",
  "home.bartender.alt": "Бармен S&W Bar",
  "home.menu.eyebrow": "Меню",
  "home.menu.title": "Обери свій настрій",
  "home.menu.lead": "Кожна категорія відкриває окрему вкладку з коктейлями. Натисни на картку — і перейдеш до повного списку.",
  "home.menu.view": "Переглянути →",
  "home.about.eyebrow": "Про бар",
  "home.about.title": "S&W Bar — коктейлі, зроблені з увагою до деталей",
  "home.about.p1": "Ми віримо, що хороший коктейль — це не просто суміш алкоголю та соку, а маленька історія у бокалі. Наша карта поєднує перевірені часом класичні рецепти зі столітньою історією та фірмові авторські коктейлі, які народилися просто тут, за барною стійкою.",
  "home.about.p2": "Не п'єте алкоголь? У нас є повноцінна безалкогольна лінійка з тими ж свіжими інгредієнтами та увагою до балансу смаку. А якщо хочеться поекспериментувати — зазирни на вкладку «Мій бар»: підбери коктейль за інгредієнтами, які маєш вдома, або додай власний рецепт із фото.",
  "home.about.f1.title": "🍹 26 перевірених рецептів",
  "home.about.f1.text": "Точні пропорції в мілілітрах, тип склянки, метод приготування крок за кроком і гарніш — усе, що потрібно, щоб повторити коктейль ідеально.",
  "home.about.f2.title": "📖 Історія кожного напою",
  "home.about.f2.text": "Від Sazerac з Нового Орлеану XIX століття до фірмових рецептів бару — коротка історія або опис смакового профілю під кожним коктейлем.",
  "home.about.f3.title": "🧪 Конструктор за інгредієнтами",
  "home.about.f3.text": "Обери, що є у тебе в барі — і система підкаже, які коктейлі можна зробити прямо зараз, а яких інгредієнтів бракує.",

  "footer.copy": "S&W Bar. Коктейльна карта.",
  "footer.tagline": "Зроблено з любов'ю до хорошого бару 🍸",
  "footer.finder-link": "Підібрати за інгредієнтами →",
  "footer.back-link": "← Уся коктейльна карта",

  "cocktails.eyebrow": "Повна карта",
  "cocktails.title": "Коктейлі S&W Bar",
  "cocktails.lead": "Обери категорію або скористайся пошуком — і натисни на картку, щоб відкрити повний рецепт коктейлю на окремій сторінці.",
  "cocktails.search.placeholder": "Пошук за назвою або інгредієнтом…",
  "cocktails.chip.all": "Всі",
  "cocktails.empty": "Нічого не знайдено. Спробуй інший запит або категорію.",
  "cocktails.back": "← До всіх коктейлів",
  "cocktails.section.ingredients": "Інгредієнти",
  "cocktails.section.method": "Метод приготування",
  "cocktails.section.garnish": "Гарніш",
  "cocktails.section.story": "Історія / про коктейль",
  "cocktails.pill.garnish": "🌿 Гарніш",
  "cocktails.notfound": "Коктейль не знайдено.",

  "mybar.eyebrow": "Твій особистий бар",
  "mybar.title": "Мій бар",
  "mybar.lead": "Підбери коктейль за тим, що вже є вдома, або додай власний рецепт — зі своїм фото, методом приготування та історією.",
  "mybar.tab.finder": "🔎 Підібрати за інгредієнтами",
  "mybar.tab.add": "➕ Додати свій коктейль",
  "mybar.finder.lead": "Обери інгредієнти, які маєш під рукою — нижче з'являться коктейлі, які можна зробити повністю або майже повністю.",
  "mybar.finder.clear": "Очистити вибір",
  "mybar.finder.empty-select": "Обери хоча б один інгредієнт вище, щоб побачити рекомендації.",
  "mybar.finder.empty-nomatch": "Жоден коктейль не збігається з обраними інгредієнтами.",
  "mybar.finder.full-match": "Усі інгредієнти в наявності ✓",
  "mybar.finder.missing": "Бракує:",
  "mybar.finder.canmake": "Можна зробити",
  "mybar.form.title": "Новий коктейль",
  "mybar.form.name": "Назва коктейлю *",
  "mybar.form.name.placeholder": "Наприклад, Golden Hour",
  "mybar.form.category": "Категорія",
  "mybar.form.glass": "Склянка",
  "mybar.form.ingredients": "Інгредієнти (нумерований список)",
  "mybar.form.add-ingredient": "+ Додати інгредієнт",
  "mybar.form.method": "Метод приготування (кроки)",
  "mybar.form.add-step": "+ Додати крок",
  "mybar.form.garnish": "Гарніш",
  "mybar.form.garnish.placeholder": "Наприклад, твіст лимона та вишня",
  "mybar.form.story": "Історія коктейлю (якщо є)",
  "mybar.form.story.placeholder": "Розкажи коротку історію створення або опиши смаковий профіль…",
  "mybar.form.photo": "Власне фото",
  "mybar.form.photo.drop": "Натисни, щоб завантажити фото коктейлю (jpg/png)",
  "mybar.form.photo.changed": "Фото завантажено — клікни, щоб змінити",
  "mybar.form.note": "⚠️ Власні коктейлі та фото зберігаються локально у твоєму браузері (localStorage) — це статичний сайт на GitHub Pages без бази даних. Вони будуть видні лише тобі на цьому пристрої й у цьому браузері, і зникнуть, якщо очистити дані сайту.",
  "mybar.form.save": "Зберегти коктейль",
  "mybar.form.reset": "Скинути форму",
  "mybar.custom.title": "Ваші коктейлі",
  "mybar.custom.empty": "Ти ще не додав жодного коктейлю — заповни форму вище.",
  "mybar.custom.badge": "Ваш рецепт",
  "mybar.custom.delete": "Видалити",
  "mybar.ingredient.placeholder1": "Наприклад, Джин — 40 мл",
  "mybar.ingredient.placeholder2": "Наприклад, Лимонний сік — 20 мл",
  "mybar.ingredient.placeholder-generic": "Інгредієнт — кількість",
  "mybar.step.placeholder1": "Наприклад, Струсити з льодом і процідити",
  "mybar.step.placeholder-generic": "Наступний крок",

  "lang.switch.label": "Мова"
};

function t(key) {
  const lang = getLang();
  if (lang === "uk") return UI_STRINGS_UK[key] ?? key;
  const table = (typeof UI_TRANSLATIONS !== "undefined") ? UI_TRANSLATIONS[key] : null;
  return (table && table[lang]) || UI_STRINGS_UK[key] || key;
}

/* Застосувати переклади до всіх елементів з data-i18n / data-i18n-placeholder */
function applyStaticTranslations(root) {
  (root || document).querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  (root || document).querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  (root || document).querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
}

/* ---------------- Категорії / склянки / бейджі ---------------- */

const CATEGORY_LABELS = {
  virgin: { uk: "Безалкогольні", en: "Non-Alcoholic", es: "Sin alcohol", it: "Analcolici", de: "Alkoholfrei", ru: "Безалкогольные" },
  "bloody-mary": { uk: "Bloody Mary", en: "Bloody Mary", es: "Bloody Mary", it: "Bloody Mary", de: "Bloody Mary", ru: "Bloody Mary" },
  "sw-classics": { uk: "S&W Класика", en: "S&W Classics", es: "Clásicos S&W", it: "Classici S&W", de: "S&W Klassiker", ru: "S&W Классика" },
  "tiki-highball": { uk: "Хайболи та тікі", en: "Highballs & Tiki", es: "Highballs y tiki", it: "Highball e tiki", de: "Highballs & Tiki", ru: "Хайболы и тики" },
  classics: { uk: "Класичні коктейлі", en: "Classic Cocktails", es: "Cócteles clásicos", it: "Cocktail classici", de: "Klassische Cocktails", ru: "Классические коктейли" },
  signature: { uk: "Фірмові коктейлі", en: "Signature Cocktails", es: "Cócteles de autor", it: "Cocktail della casa", de: "Signature Cocktails", ru: "Фирменные коктейли" }
};

const CATEGORY_DESC = {
  virgin: { uk: "Соковиті mocktails без жодного відсотка провини.", en: "Juicy mocktails with zero percent guilt.", es: "Mocktails jugosos sin ni una gota de culpa.", it: "Mocktail succosi, zero sensi di colpa.", de: "Saftige Mocktails ganz ohne schlechtes Gewissen.", ru: "Сочные mocktails без единого процента вины." },
  "bloody-mary": { uk: "Три пікантні варіації легендарного ранкового рятівника.", en: "Three spicy takes on the legendary morning-after saviour.", es: "Tres variaciones picantes del legendario salvador matutino.", it: "Tre varianti piccanti del leggendario salvavita del mattino.", de: "Drei würzige Varianten des legendären Katerretters.", ru: "Три пикантные вариации легендарного утреннего спасителя." },
  "sw-classics": { uk: "Sling, Manhattan, Martini та Vesper у фірмовому виконанні.", en: "Sling, Manhattan, Martini and Vesper, done our way.", es: "Sling, Manhattan, Martini y Vesper a nuestra manera.", it: "Sling, Manhattan, Martini e Vesper, fatti a modo nostro.", de: "Sling, Manhattan, Martini und Vesper – ganz nach unserer Art.", ru: "Sling, Manhattan, Martini и Vesper в фирменном исполнении." },
  "tiki-highball": { uk: "Легкі, освіжаючі, з тропічним чи димним характером.", en: "Light, refreshing, with a tropical or smoky character.", es: "Ligeros, refrescantes, con carácter tropical o ahumado.", it: "Leggeri, rinfrescanti, dal carattere tropicale o affumicato.", de: "Leicht, erfrischend, mit tropischem oder rauchigem Charakter.", ru: "Лёгкие, освежающие, с тропическим или дымным характером." },
  classics: { uk: "Забуті й перевідкриті шедеври світового бартендінгу.", en: "Forgotten and rediscovered masterpieces of world bartending.", es: "Obras maestras olvidadas y redescubiertas de la coctelería mundial.", it: "Capolavori dimenticati e riscoperti della miscelazione mondiale.", de: "Vergessene und wiederentdeckte Meisterwerke der Barkunst.", ru: "Забытые и заново открытые шедевры мирового бартендинга." },
  signature: { uk: "Авторські рецепти, яких не знайти більше ніде.", en: "Original recipes you won't find anywhere else.", es: "Recetas originales que no encontrarás en ningún otro lugar.", it: "Ricette originali che non troverai da nessun'altra parte.", de: "Eigene Kreationen, die es sonst nirgendwo gibt.", ru: "Авторские рецепты, которых больше нигде не найти." }
};

const CATEGORY_ICON = {
  virgin: "🍃", "bloody-mary": "🍅", "sw-classics": "🥃",
  "tiki-highball": "🌴", classics: "🍋", signature: "✨"
};

const GLASS_LABELS = {
  sling: { uk: "Sling Glass", en: "Sling Glass", es: "Vaso Sling", it: "Bicchiere Sling", de: "Sling-Glas", ru: "Бокал Sling" },
  highball: { uk: "Highball", en: "Highball", es: "Highball", it: "Highball", de: "Longdrinkglas", ru: "Хайбол" },
  rocks: { uk: "Rocks", en: "Rocks Glass", es: "Vaso Rocks", it: "Bicchiere Rocks", de: "Rocks-Glas", ru: "Бокал Rocks" },
  coupette: { uk: "Coupette", en: "Coupette", es: "Copa Coupette", it: "Coppetta", de: "Coupette-Glas", ru: "Купетт" },
  martini: { uk: "Martini Glass", en: "Martini Glass", es: "Copa Martini", it: "Coppa Martini", de: "Martini-Glas", ru: "Бокал для мартини" },
  flute: { uk: "Flute", en: "Champagne Flute", es: "Copa Flauta", it: "Flûte", de: "Sektflöte", ru: "Флюте" },
  balloon: { uk: "Brandy Balloon", en: "Brandy Balloon", es: "Copa Balón", it: "Ballon da Brandy", de: "Brandyschwenker", ru: "Бокал Brandy Balloon" },
  tasting: { uk: "Tasting Glass", en: "Tasting Glass", es: "Copa de Cata", it: "Bicchiere da Degustazione", de: "Verkostungsglas", ru: "Дегустационный бокал" }
};

const BADGE_LABELS = {
  virgin: { uk: "0% алкоголю", en: "0% alcohol", es: "0% alcohol", it: "0% alcol", de: "0% Alkohol", ru: "0% алкоголя" },
  "low-abv": { uk: "ABV 0.5%", en: "ABV 0.5%", es: "Grad. 0.5%", it: "Grad. 0.5%", de: "Alk. 0,5%", ru: "Крепость 0.5%" },
  "bottle-aged": { uk: "Bottle Aged", en: "Bottle Aged", es: "Añejado en botella", it: "Invecchiato in bottiglia", de: "Flaschenreif", ru: "Выдержан в бутылке" }
};

function categoryLabel(key, lang) { return (CATEGORY_LABELS[key] || {})[lang || getLang()] || key; }
function categoryDesc(key, lang) { return (CATEGORY_DESC[key] || {})[lang || getLang()] || ""; }
function glassLabel(shape, categoryKey, lang) {
  lang = lang || getLang();
  const base = (GLASS_LABELS[shape] || {})[lang] || shape;
  return categoryKey === "sw-classics" && shape === "martini" ? "S&W " + base : base;
}
function badgeLabel(key, lang) { return (BADGE_LABELS[key] || {})[lang || getLang()] || key; }

/* ---------------- Перемикач мови (нав-бар) ---------------- */

function renderLangSwitcher() {
  const mount = document.getElementById("lang-switch");
  if (!mount) return;
  const current = getLang();
  const currentInfo = LANGS.find(l => l.code === current) || LANGS[0];
  mount.innerHTML = `
    <button type="button" class="lang-current" id="lang-toggle" aria-haspopup="listbox" aria-expanded="false" title="${t("lang.switch.label")}">
      <span>${currentInfo.flag}</span><span class="lang-code">${current.toUpperCase()}</span>
    </button>
    <ul class="lang-menu" id="lang-menu" role="listbox">
      ${LANGS.map(l => `<li role="option"><button type="button" data-lang="${l.code}" class="${l.code === current ? "active" : ""}">${l.flag} ${l.label}</button></li>`).join("")}
    </ul>
  `;
  const toggle = document.getElementById("lang-toggle");
  const menu = document.getElementById("lang-menu");
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });
  document.addEventListener("click", () => menu.classList.remove("open"));
  menu.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLangSwitcher();
  applyStaticTranslations();
});
