const COCKTAIL_TRANSLATIONS = {
  "jasmine-peach": {
    en: {
      subtitle: "Virgin Cocktail",
      ingredients: ["Peach purée — 40 ml", "Lemon juice — 15 ml", "Sugar syrup — 10 ml", "Jasmine green tea — 125 ml"],
      method: ["Shake all ingredients in a shaker with ice (shake)."],
      garnish: "Mint sprig and a dehydrated lemon wheel",
      story: "A tea-based non-alcoholic cocktail: jasmine green tea lends floral depth, while ripe peach brings juicy sweetness. A wonderful choice for anyone skipping alcohol without skipping the real bartending experience.",
      tags: ["peach purée", "lemon juice", "sugar syrup", "green tea", "jasmine tea"]
    },
    es: {
      subtitle: "Cóctel sin alcohol",
      ingredients: ["Puré de melocotón — 40 ml", "Zumo de limón — 15 ml", "Sirope de azúcar — 10 ml", "Té verde de jazmín — 125 ml"],
      method: ["Agitar todos los ingredientes en una coctelera con hielo (shake)."],
      garnish: "Ramita de menta y una rodaja de limón deshidratada",
      story: "Un cóctel sin alcohol a base de té: el té verde de jazmín aporta profundidad floral, mientras que el melocotón maduro suma un dulzor jugoso. Una elección perfecta para quienes prescinden del alcohol sin renunciar a una auténtica experiencia de coctelería.",
      tags: ["puré de melocotón", "zumo de limón", "sirope de azúcar", "té verde", "té de jazmín"]
    },
    it: {
      subtitle: "Cocktail Analcolico",
      ingredients: ["Purea di pesca — 40 ml", "Succo di limone — 15 ml", "Sciroppo di zucchero — 10 ml", "Tè verde al gelsomino — 125 ml"],
      method: ["Shakerare tutti gli ingredienti con ghiaccio (shake)."],
      garnish: "Rametto di menta e una rondella di limone disidratata",
      story: "Un cocktail analcolico a base di tè: il tè verde al gelsomino regala profondità floreale, mentre la pesca matura aggiunge una dolcezza succosa. Una scelta perfetta per chi non beve alcol ma non vuole rinunciare a una vera esperienza da bartender.",
      tags: ["purea di pesca", "succo di limone", "sciroppo di zucchero", "tè verde", "tè al gelsomino"]
    },
    de: {
      subtitle: "Alkoholfreier Cocktail",
      ingredients: ["Pfirsichpüree — 40 ml", "Zitronensaft — 15 ml", "Zuckersirup — 10 ml", "Jasmin-Grüntee — 125 ml"],
      method: ["Alle Zutaten im Shaker mit Eis kräftig schütteln (shake)."],
      garnish: "Minzzweig und eine dehydrierte Zitronenscheibe",
      story: "Ein alkoholfreier Cocktail auf Teebasis: Jasmin-Grüntee sorgt für blumige Tiefe, während reifer Pfirsich für saftige Süße sorgt. Eine wunderbare Wahl für alle, die auf Alkohol verzichten, aber nicht auf ein echtes Barerlebnis.",
      tags: ["pfirsichpüree", "zitronensaft", "zuckersirup", "grüntee", "jasmintee"]
    },
    ru: {
      subtitle: "Безалкогольный коктейль",
      ingredients: ["Персиковое пюре — 40 мл", "Лимонный сок — 15 мл", "Сахарный сироп — 10 мл", "Жасминовый зелёный чай — 125 мл"],
      method: ["Взбить все ингредиенты в шейкере со льдом (shake)."],
      garnish: "Веточка мяты и дегидрированный круг лимона",
      story: "Безалкогольный коктейль на чайной основе: жасминовый зелёный чай добавляет цветочной глубины, а спелый персик — сочной сладости. Отличный выбор для тех, кто не пьёт алкоголь, но не хочет остаться без настоящего бартендерского опыта.",
      tags: ["персиковое пюре", "лимонный сок", "сахарный сироп", "зелёный чай", "жасминовый чай"]
    }
  },

  "pom-pom": {
    en: {
      subtitle: "Virgin Cocktail",
      ingredients: ["Cranberry juice — 100 ml", "Apple juice — 100 ml", "Lime juice — 15 ml", "Elderflower cordial — 10 ml", "Grenadine — 10 ml"],
      method: ["Shake all ingredients in a shaker with ice (shake)."],
      garnish: "Lime and raspberries on a skewer",
      story: "A vibrant berry mocktail: cranberry and apple bring tartness and body, elderflower cordial adds a light floral note, and grenadine paints in the colours of a sunset. A refreshing choice for any time of day.",
      tags: ["cranberry juice", "apple juice", "lime juice", "elderflower cordial", "grenadine"]
    },
    es: {
      subtitle: "Cóctel sin alcohol",
      ingredients: ["Zumo de arándano rojo — 100 ml", "Zumo de manzana — 100 ml", "Zumo de lima — 15 ml", "Cordial de flor de saúco — 10 ml", "Granadina — 10 ml"],
      method: ["Agitar todos los ingredientes en una coctelera con hielo (shake)."],
      garnish: "Lima y frambuesas en una brocheta",
      story: "Un mocktail afrutado y vibrante: el arándano rojo y la manzana aportan acidez y cuerpo, el cordial de flor de saúco suma un toque floral ligero, y la granadina pinta los colores de un atardecer. Una elección refrescante para cualquier momento del día.",
      tags: ["zumo de arándano rojo", "zumo de manzana", "zumo de lima", "cordial de saúco", "granadina"]
    },
    it: {
      subtitle: "Cocktail Analcolico",
      ingredients: ["Succo di mirtillo rosso — 100 ml", "Succo di mela — 100 ml", "Succo di lime — 15 ml", "Cordiale di fiori di sambuco — 10 ml", "Granatina — 10 ml"],
      method: ["Shakerare tutti gli ingredienti con ghiaccio (shake)."],
      garnish: "Lime e lamponi su uno stecchino",
      story: "Un mocktail ai frutti di bosco vivace: mirtillo rosso e mela danno acidità e corpo, il cordiale di sambuco aggiunge un tocco floreale leggero e la granatina dipinge i colori di un tramonto. Una scelta rinfrescante per ogni momento della giornata.",
      tags: ["succo di mirtillo rosso", "succo di mela", "succo di lime", "cordiale di sambuco", "granatina"]
    },
    de: {
      subtitle: "Alkoholfreier Cocktail",
      ingredients: ["Cranberrysaft — 100 ml", "Apfelsaft — 100 ml", "Limettensaft — 15 ml", "Holunderblütensirup — 10 ml", "Grenadine — 10 ml"],
      method: ["Alle Zutaten im Shaker mit Eis kräftig schütteln (shake)."],
      garnish: "Limette und Himbeeren am Spieß",
      story: "Ein lebendiger Beeren-Mocktail: Cranberry und Apfel sorgen für Säure und Körper, Holunderblütensirup bringt eine leichte Blumennote, und Grenadine malt die Farben eines Sonnenuntergangs. Eine erfrischende Wahl zu jeder Tageszeit.",
      tags: ["cranberrysaft", "apfelsaft", "limettensaft", "holunderblütensirup", "grenadine"]
    },
    ru: {
      subtitle: "Безалкогольный коктейль",
      ingredients: ["Клюквенный сок — 100 мл", "Яблочный сок — 100 мл", "Сок лайма — 15 мл", "Бузиновый кордиал (elderflower) — 10 мл", "Гренадин — 10 мл"],
      method: ["Взбить все ингредиенты в шейкере со льдом (shake)."],
      garnish: "Лайм и малина на шпажке",
      story: "Яркий ягодный mocktail: клюква и яблоко дают кислинку и тело, бузиновый кордиал — лёгкую цветочность, а гренадин — цвет заката. Освежающий выбор в любое время дня.",
      tags: ["клюквенный сок", "яблочный сок", "сок лайма", "бузиновый кордиал", "гренадин"]
    }
  },

  "prim-and-proper": {
    en: {
      subtitle: "ABV 0.5%",
      ingredients: ["Sipsmith FreeGlider (non-alcoholic gin) — 50 ml", "Cucumber, muddled — 4 cm", "Fresh mint — a generous handful", "Lemon juice — 15 ml", "Sugar syrup — 5 ml", "Water — 20 ml", "Angostura bitters — 2 dashes", "Ginger ale — top up"],
      method: ["Shake the first 7 ingredients in a shaker with ice.", "Strain into a glass with ice and top up with ginger ale."],
      garnish: "Cucumber, mint sprig, orange and raspberry — Pimm's Cup style",
      story: "An almost entirely non-alcoholic take on the classic summer Pimm's Cup: herbaceous, cucumber-fresh, with a whisper of warmth from the Angostura. At just 0.5% ABV, you can drink it with barely a limit.",
      tags: ["non-alcoholic gin", "cucumber", "mint", "lemon juice", "sugar syrup", "angostura bitters", "ginger ale"]
    },
    es: {
      subtitle: "ABV 0.5%",
      ingredients: ["Sipsmith FreeGlider (ginebra sin alcohol) — 50 ml", "Pepino, machacado — 4 cm", "Menta fresca — un puñado generoso", "Zumo de limón — 15 ml", "Sirope de azúcar — 5 ml", "Agua — 20 ml", "Angostura bitters — 2 gotas", "Ginger ale — hasta completar"],
      method: ["Agitar los primeros 7 ingredientes en una coctelera con hielo.", "Colar en un vaso con hielo y completar con ginger ale."],
      garnish: "Pepino, ramita de menta, naranja y frambuesa — al estilo Pimm's Cup",
      story: "Una versión prácticamente sin alcohol del clásico Pimm's Cup de verano: herbácea, fresca de pepino, con un leve toque cálido de Angostura. Con solo un 0.5% de ABV, se puede disfrutar casi sin límites.",
      tags: ["ginebra sin alcohol", "pepino", "menta", "zumo de limón", "sirope de azúcar", "angostura bitters", "ginger ale"]
    },
    it: {
      subtitle: "ABV 0.5%",
      ingredients: ["Sipsmith FreeGlider (gin analcolico) — 50 ml", "Cetriolo, pestato — 4 cm", "Menta fresca — una generosa manciata", "Succo di limone — 15 ml", "Sciroppo di zucchero — 5 ml", "Acqua — 20 ml", "Angostura bitters — 2 gocce", "Ginger ale — colmare"],
      method: ["Shakerare i primi 7 ingredienti con ghiaccio.", "Filtrare in un bicchiere con ghiaccio e colmare con ginger ale."],
      garnish: "Cetriolo, rametto di menta, arancia e lampone — in stile Pimm's Cup",
      story: "Un'interpretazione praticamente analcolica del classico Pimm's Cup estivo: erbacea, fresca di cetriolo, con un lieve calore di Angostura. Con appena lo 0.5% di ABV, si può bere quasi senza limiti.",
      tags: ["gin analcolico", "cetriolo", "menta", "succo di limone", "sciroppo di zucchero", "angostura bitters", "ginger ale"]
    },
    de: {
      subtitle: "ABV 0,5%",
      ingredients: ["Sipsmith FreeGlider (alkoholfreier Gin) — 50 ml", "Gurke, zerstoßen — 4 cm", "Frische Minze — eine großzügige Handvoll", "Zitronensaft — 15 ml", "Zuckersirup — 5 ml", "Wasser — 20 ml", "Angostura Bitters — 2 Spritzer", "Ginger Ale — zum Auffüllen"],
      method: ["Die ersten 7 Zutaten im Shaker mit Eis schütteln.", "In ein Glas mit Eis abseihen und mit Ginger Ale auffüllen."],
      garnish: "Gurke, Minzzweig, Orange und Himbeere — im Stil eines Pimm's Cup",
      story: "Eine nahezu alkoholfreie Interpretation des klassischen Sommerdrinks Pimm's Cup: kräuterig, frisch nach Gurke, mit einem Hauch Wärme von Angostura. Bei nur 0,5% ABV lässt er sich fast ohne Grenzen genießen.",
      tags: ["alkoholfreier gin", "gurke", "minze", "zitronensaft", "zuckersirup", "angostura bitters", "ginger ale"]
    },
    ru: {
      subtitle: "Крепость 0,5%",
      ingredients: ["Sipsmith FreeGlider (безалкогольный джин) — 50 мл", "Огурец, мадл — 4 см", "Свежая мята — щедрая горсть", "Лимонный сок — 15 мл", "Сахарный сироп — 5 мл", "Вода — 20 мл", "Ангостура биттерс — 2 дропса", "Имбирный эль — доверху"],
      method: ["Взбить первые 7 ингредиентов в шейкере со льдом.", "Процедить в бокал со льдом и долить имбирным элем."],
      garnish: "Огурец, веточка мяты, апельсин и малина — как в Pimm's Cup",
      story: "Практически безалкогольная интерпретация классического летнего Pimm's Cup: травянистая, огуречная, с едва уловимым теплом ангостуры. Крепость всего 0,5% — можно пить почти без ограничений.",
      tags: ["безалкогольный джин", "огурец", "мята", "лимонный сок", "сахарный сироп", "ангостура биттерс", "имбирный эль"]
    }
  },

  "strawberry-fields": {
    en: {
      subtitle: "Virgin Cocktail",
      ingredients: ["Apple juice — 100 ml", "Pineapple juice — 100 ml", "Strawberry purée — 40 ml", "Lemon juice — 15 ml"],
      method: ["Shake all ingredients in a shaker with ice (shake)."],
      garnish: "Mint sprig",
      story: "A juicy tropical-berry mocktail: apple and pineapple form the base, while strawberry adds the colour and aroma of summer. Simple, refreshing, and perfect for kids and adults alike.",
      tags: ["apple juice", "pineapple juice", "strawberry purée", "lemon juice"]
    },
    es: {
      subtitle: "Cóctel sin alcohol",
      ingredients: ["Zumo de manzana — 100 ml", "Zumo de piña — 100 ml", "Puré de fresa — 40 ml", "Zumo de limón — 15 ml"],
      method: ["Agitar todos los ingredientes en una coctelera con hielo (shake)."],
      garnish: "Ramita de menta",
      story: "Un mocktail jugoso de fruta tropical y bayas: la manzana y la piña forman la base, mientras la fresa aporta el color y el aroma del verano. Sencillo, refrescante y perfecto para niños y adultos.",
      tags: ["zumo de manzana", "zumo de piña", "puré de fresa", "zumo de limón"]
    },
    it: {
      subtitle: "Cocktail Analcolico",
      ingredients: ["Succo di mela — 100 ml", "Succo di ananas — 100 ml", "Purea di fragola — 40 ml", "Succo di limone — 15 ml"],
      method: ["Shakerare tutti gli ingredienti con ghiaccio (shake)."],
      garnish: "Rametto di menta",
      story: "Un mocktail succoso tra tropicale e frutti di bosco: mela e ananas creano la base, mentre la fragola aggiunge il colore e il profumo dell'estate. Semplice, rinfrescante, adatto a grandi e piccini.",
      tags: ["succo di mela", "succo di ananas", "purea di fragola", "succo di limone"]
    },
    de: {
      subtitle: "Alkoholfreier Cocktail",
      ingredients: ["Apfelsaft — 100 ml", "Ananassaft — 100 ml", "Erdbeerpüree — 40 ml", "Zitronensaft — 15 ml"],
      method: ["Alle Zutaten im Shaker mit Eis kräftig schütteln (shake)."],
      garnish: "Minzzweig",
      story: "Ein saftiger, tropisch-beeriger Mocktail: Apfel und Ananas bilden die Basis, während Erdbeere Farbe und den Duft des Sommers beisteuert. Einfach, erfrischend und für Kinder wie Erwachsene geeignet.",
      tags: ["apfelsaft", "ananassaft", "erdbeerpüree", "zitronensaft"]
    },
    ru: {
      subtitle: "Безалкогольный коктейль",
      ingredients: ["Яблочный сок — 100 мл", "Ананасовый сок — 100 мл", "Клубничное пюре — 40 мл", "Лимонный сок — 15 мл"],
      method: ["Взбить все ингредиенты в шейкере со льдом (shake)."],
      garnish: "Веточка мяты",
      story: "Сочный тропически-ягодный mocktail: яблоко и ананас создают базу, клубника добавляет цвет и аромат лета. Простой, освежающий, подходит детям и взрослым.",
      tags: ["яблочный сок", "ананасовый сок", "клубничное пюре", "лимонный сок"]
    }
  },

  "bloody-mary-classic": {
    en: {
      subtitle: "The Classic",
      ingredients: ["Sapling Vodka — 40 ml", "Lemon juice — 15 ml", "Tomato juice — 125 ml", "Bloody Mary Mix — 35 ml", "Red Tabasco — 3 dashes", "Salt and pepper — to taste"],
      method: ["Combine all ingredients in a shaker with ice, roll briefly to mix (do not shake to foam).", "Strain into a sling glass with ice."],
      garnish: "Celery and lemon",
      story: "A classic cocktail credited to Harry's New York Bar in Paris in the 1920s. Its savoury blend of vodka, tomato juice and spice made the Bloody Mary a legend — the ultimate cure-all cocktail.",
      tags: ["vodka", "lemon juice", "tomato juice", "bloody mary mix", "tabasco", "salt", "pepper"]
    },
    es: {
      subtitle: "El Clásico",
      ingredients: ["Sapling Vodka — 40 ml", "Zumo de limón — 15 ml", "Zumo de tomate — 125 ml", "Bloody Mary Mix — 35 ml", "Tabasco rojo — 3 gotas", "Sal y pimienta — al gusto"],
      method: ["Reunir todos los ingredientes en una coctelera con hielo y mezclar brevemente con movimiento de rotación (sin batir hasta formar espuma).", "Colar en un vaso sling con hielo."],
      garnish: "Apio y limón",
      story: "Un cóctel clásico atribuido al Harry's New York Bar de París en la década de 1920. Su sabrosa combinación de vodka, zumo de tomate y especias convirtió al Bloody Mary en una leyenda: el cóctel «salvavidas» por excelencia.",
      tags: ["vodka", "zumo de limón", "zumo de tomate", "bloody mary mix", "tabasco", "sal", "pimienta"]
    },
    it: {
      subtitle: "Il Classico",
      ingredients: ["Sapling Vodka — 40 ml", "Succo di limone — 15 ml", "Succo di pomodoro — 125 ml", "Bloody Mary Mix — 35 ml", "Tabasco rosso — 3 gocce", "Sale e pepe — a piacere"],
      method: ["Riunire tutti gli ingredienti in uno shaker con ghiaccio e mescolare brevemente con movimento rotatorio (senza montare in schiuma).", "Filtrare in uno sling glass con ghiaccio."],
      garnish: "Sedano e limone",
      story: "Un cocktail classico attribuito all'Harry's New York Bar di Parigi negli anni '20. La sua combinazione sapida di vodka, succo di pomodoro e spezie ha reso il Bloody Mary una leggenda: il cocktail «salvavita» per eccellenza.",
      tags: ["vodka", "succo di limone", "succo di pomodoro", "bloody mary mix", "tabasco", "sale", "pepe"]
    },
    de: {
      subtitle: "Der Klassiker",
      ingredients: ["Sapling Vodka — 40 ml", "Zitronensaft — 15 ml", "Tomatensaft — 125 ml", "Bloody Mary Mix — 35 ml", "Roter Tabasco — 3 Spritzer", "Salz und Pfeffer — nach Geschmack"],
      method: ["Alle Zutaten im Shaker mit Eis zusammengeben und kurz rollend verrühren (nicht zu Schaum schütteln).", "In ein Sling-Glas mit Eis abseihen."],
      garnish: "Sellerie und Zitrone",
      story: "Ein klassischer Cocktail, der der Harry's New York Bar in Paris in den 1920er-Jahren zugeschrieben wird. Seine würzige Mischung aus Wodka, Tomatensaft und Gewürzen machte die Bloody Mary zur Legende — dem ultimativen Rettungscocktail.",
      tags: ["wodka", "zitronensaft", "tomatensaft", "bloody mary mix", "tabasco", "salz", "pfeffer"]
    },
    ru: {
      subtitle: "Классика",
      ingredients: ["Sapling Vodka — 40 мл", "Лимонный сок — 15 мл", "Томатный сок — 125 мл", "Bloody Mary Mix — 35 мл", "Красный табаско — 3 дропса", "Соль и перец — по вкусу"],
      method: ["Собрать все ингредиенты в шейкере со льдом, коротко перемешать роликом (не взбивать в пену).", "Процедить в sling glass со льдом."],
      garnish: "Сельдерей и лимон",
      story: "Классический коктейль, который приписывают парижскому Harry's New York Bar 1920-х годов. Пикантное сочетание водки, томатного сока и специй сделало Bloody Mary легендой — идеальным «спасительным» коктейлем.",
      tags: ["водка", "лимонный сок", "томатный сок", "bloody mary mix", "табаско", "соль", "перец"]
    }
  },

  "red-snapper": {
    en: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Cucumber, muddled — 1 inch", "Lemon juice — 15 ml", "Tomato juice — 125 ml", "Bloody Mary Mix — 35 ml", "Green Tabasco — 3 dashes", "Salt and pepper — to taste"],
      method: ["Muddle the cucumber at the bottom of the shaker.", "Add the remaining ingredients and ice, mix briefly.", "Strain into a sling glass with ice."],
      garnish: "Cucumber and lemon",
      story: "The gin-based sibling of the Bloody Mary — it was actually served under this name at New York's St. Regis Hotel in 1934, before the name 'Bloody Mary' had even caught on.",
      tags: ["gin", "cucumber", "lemon juice", "tomato juice", "bloody mary mix", "green tabasco", "salt", "pepper"]
    },
    es: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Pepino, machacado — 2,5 cm", "Zumo de limón — 15 ml", "Zumo de tomate — 125 ml", "Bloody Mary Mix — 35 ml", "Tabasco verde — 3 gotas", "Sal y pimienta — al gusto"],
      method: ["Machacar el pepino en el fondo de la coctelera.", "Añadir el resto de los ingredientes y hielo, mezclar brevemente.", "Colar en un vaso sling con hielo."],
      garnish: "Pepino y limón",
      story: "La versión con ginebra del Bloody Mary: bajo este mismo nombre se sirvió por primera vez en el hotel St. Regis de Nueva York en 1934, incluso antes de que se popularizara el nombre «Bloody Mary».",
      tags: ["ginebra", "pepino", "zumo de limón", "zumo de tomate", "bloody mary mix", "tabasco verde", "sal", "pimienta"]
    },
    it: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Cetriolo, pestato — 2,5 cm", "Succo di limone — 15 ml", "Succo di pomodoro — 125 ml", "Bloody Mary Mix — 35 ml", "Tabasco verde — 3 gocce", "Sale e pepe — a piacere"],
      method: ["Pestare il cetriolo sul fondo dello shaker.", "Aggiungere i restanti ingredienti e il ghiaccio, mescolare brevemente.", "Filtrare in uno sling glass con ghiaccio."],
      garnish: "Cetriolo e limone",
      story: "La versione al gin del Bloody Mary: fu servito proprio con questo nome per la prima volta all'hotel St. Regis di New York nel 1934, ancor prima che il nome «Bloody Mary» si affermasse.",
      tags: ["gin", "cetriolo", "succo di limone", "succo di pomodoro", "bloody mary mix", "tabasco verde", "sale", "pepe"]
    },
    de: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Gurke, zerstoßen — 2,5 cm", "Zitronensaft — 15 ml", "Tomatensaft — 125 ml", "Bloody Mary Mix — 35 ml", "Grüner Tabasco — 3 Spritzer", "Salz und Pfeffer — nach Geschmack"],
      method: ["Die Gurke am Boden des Shakers zerstoßen.", "Die restlichen Zutaten und Eis hinzufügen, kurz verrühren.", "In ein Sling-Glas mit Eis abseihen."],
      garnish: "Gurke und Zitrone",
      story: "Die Gin-Version der Bloody Mary — unter genau diesem Namen wurde sie 1934 im New Yorker St. Regis Hotel serviert, noch bevor sich der Name „Bloody Mary“ durchsetzte.",
      tags: ["gin", "gurke", "zitronensaft", "tomatensaft", "bloody mary mix", "grüner tabasco", "salz", "pfeffer"]
    },
    ru: {
      ingredients: ["Sipsmith London Dry Gin — 40 мл", "Огурец, мадл — 2,5 см", "Лимонный сок — 15 мл", "Томатный сок — 125 мл", "Bloody Mary Mix — 35 мл", "Зелёный табаско — 3 дропса", "Соль и перец — по вкусу"],
      method: ["Размять огурец на дне шейкера.", "Добавить остальные ингредиенты и лёд, коротко перемешать.", "Процедить в sling glass со льдом."],
      garnish: "Огурец и лимон",
      story: "Джиновая версия Bloody Mary — именно под этим названием коктейль впервые подали в нью-йоркском отеле St. Regis в 1934 году, ещё до того, как прижилось название «Bloody Mary».",
      tags: ["джин", "огурец", "лимонный сок", "томатный сок", "bloody mary mix", "зелёный табаско", "соль", "перец"]
    }
  },

  "smoky-maria": {
    en: {
      ingredients: ["Altos Tequila — 30 ml", "Mezcal — 10 ml", "Lime juice — 15 ml", "Tomato juice — 125 ml", "Bloody Mary Mix — 30 ml", "Green Tabasco — 3 dashes", "Salt and pepper — to taste"],
      method: ["Combine all ingredients in a shaker with ice, mix briefly.", "Strain into a glass rimmed with Tajin salt."],
      garnish: "Tajin Salt rim / celery stick in Tajin salt and a lime wedge",
      story: "The Mexican soul of the Bloody Mary family: smoky mezcal and tequila stand in for vodka, while a spicy Tajin rim brings heat from the very first sip.",
      tags: ["tequila", "mezcal", "lime juice", "tomato juice", "bloody mary mix", "green tabasco", "salt", "pepper", "tajin"]
    },
    es: {
      ingredients: ["Altos Tequila — 30 ml", "Mezcal — 10 ml", "Zumo de lima — 15 ml", "Zumo de tomate — 125 ml", "Bloody Mary Mix — 30 ml", "Tabasco verde — 3 gotas", "Sal y pimienta — al gusto"],
      method: ["Reunir todos los ingredientes en una coctelera con hielo, mezclar brevemente.", "Colar en un vaso con el borde escarchado con sal Tajín."],
      garnish: "Borde de sal Tajín / rama de apio en sal Tajín y una rodaja de lima",
      story: "El alma mexicana de la familia Bloody Mary: el mezcal ahumado y el tequila sustituyen al vodka, mientras que el picante borde de Tajín aporta un toque de fuego desde el primer sorbo.",
      tags: ["tequila", "mezcal", "zumo de lima", "zumo de tomate", "bloody mary mix", "tabasco verde", "sal", "pimienta", "tajin"]
    },
    it: {
      ingredients: ["Altos Tequila — 30 ml", "Mezcal — 10 ml", "Succo di lime — 15 ml", "Succo di pomodoro — 125 ml", "Bloody Mary Mix — 30 ml", "Tabasco verde — 3 gocce", "Sale e pepe — a piacere"],
      method: ["Riunire tutti gli ingredienti in uno shaker con ghiaccio, mescolare brevemente.", "Filtrare in un bicchiere con il bordo rifinito in sale Tajin."],
      garnish: "Bordo di sale Tajin / gambo di sedano nel sale Tajin e uno spicchio di lime",
      story: "L'anima messicana della famiglia Bloody Mary: il mezcal affumicato e la tequila sostituiscono la vodka, mentre il bordo piccante di Tajin regala pepe fin dal primo sorso.",
      tags: ["tequila", "mezcal", "succo di lime", "succo di pomodoro", "bloody mary mix", "tabasco verde", "sale", "pepe", "tajin"]
    },
    de: {
      ingredients: ["Altos Tequila — 30 ml", "Mezcal — 10 ml", "Limettensaft — 15 ml", "Tomatensaft — 125 ml", "Bloody Mary Mix — 30 ml", "Grüner Tabasco — 3 Spritzer", "Salz und Pfeffer — nach Geschmack"],
      method: ["Alle Zutaten im Shaker mit Eis zusammengeben, kurz verrühren.", "In ein Glas mit Tajin-Salzrand abseihen."],
      garnish: "Tajin-Salzrand / Selleriestange in Tajin-Salz und eine Limettenspalte",
      story: "Die mexikanische Seele der Bloody-Mary-Familie: rauchiger Mezcal und Tequila ersetzen den Wodka, während der scharfe Tajin-Rand schon beim ersten Schluck für Würze sorgt.",
      tags: ["tequila", "mezcal", "limettensaft", "tomatensaft", "bloody mary mix", "grüner tabasco", "salz", "pfeffer", "tajin"]
    },
    ru: {
      ingredients: ["Altos Tequila — 30 мл", "Mezcal — 10 мл", "Сок лайма — 15 мл", "Томатный сок — 125 мл", "Bloody Mary Mix — 30 мл", "Зелёный табаско — 3 дропса", "Соль и перец — по вкусу"],
      method: ["Собрать все ингредиенты в шейкере со льдом, коротко перемешать.", "Процедить в бокал с ободком из тахин-соли."],
      garnish: "Ободок Tajin Salt / стебель сельдерея в соли тахин и долька лайма",
      story: "Мексиканская душа семейства Bloody Mary: дымный мескаль и текила заменяют водку, а острый тахин по краю бокала добавляет перчинки с первого глотка.",
      tags: ["текила", "мескаль", "сок лайма", "томатный сок", "bloody mary mix", "зелёный табаско", "соль", "перец", "тахин"]
    }
  },

  "sw-gin-sling": {
    en: {
      ingredients: ["Sipsmith Gin — 30 ml", "Apricot brandy — 15 ml", "Lemon juice — 15 ml", "Cherry brandy — 10 ml", "House-made grenadine — 10 ml", "Pineapple juice — 90 ml", "Angostura bitters — 2 dashes", "Angostura Orange — 3 dashes", "Soda water — ~30 ml, just a splash"],
      method: ["Shake all ingredients (except soda) in a shaker with ice.", "Strain into a sling glass with ice.", "Top with a splash of soda water."],
      garnish: "Orange slice and a washed cherry",
      story: "Our take on the legendary Singapore Sling, created in the early 20th century at the bar of Raffles Hotel in Singapore. Fruity, colourful and perfectly balanced.",
      tags: ["gin", "apricot brandy", "lemon juice", "cherry brandy", "grenadine", "pineapple juice", "angostura bitters", "soda water"]
    },
    es: {
      ingredients: ["Sipsmith Gin — 30 ml", "Brandy de albaricoque — 15 ml", "Zumo de limón — 15 ml", "Brandy de cereza — 10 ml", "Granadina casera — 10 ml", "Zumo de piña — 90 ml", "Angostura bitters — 2 gotas", "Angostura Orange — 3 gotas", "Soda — ~30 ml, apenas un toque"],
      method: ["Agitar todos los ingredientes (excepto la soda) en una coctelera con hielo.", "Colar en un vaso sling con hielo.", "Completar con un toque de soda."],
      garnish: "Rodaja de naranja y una cereza lavada",
      story: "Nuestra versión del legendario Singapore Sling, creado a principios del siglo XX en el bar del Raffles Hotel de Singapur. Afrutado, colorido y perfectamente equilibrado.",
      tags: ["ginebra", "brandy de albaricoque", "zumo de limón", "brandy de cereza", "granadina", "zumo de piña", "angostura bitters", "soda"]
    },
    it: {
      ingredients: ["Sipsmith Gin — 30 ml", "Brandy all'albicocca — 15 ml", "Succo di limone — 15 ml", "Brandy alla ciliegia — 10 ml", "Granatina fatta in casa — 10 ml", "Succo di ananas — 90 ml", "Angostura bitters — 2 gocce", "Angostura Orange — 3 gocce", "Soda — ~30 ml, appena un goccio"],
      method: ["Shakerare tutti gli ingredienti (tranne la soda) con ghiaccio.", "Filtrare in uno sling glass con ghiaccio.", "Completare con un goccio di soda."],
      garnish: "Fetta d'arancia e una ciliegia sciacquata",
      story: "La nostra interpretazione del leggendario Singapore Sling, creato agli inizi del XX secolo nel bar del Raffles Hotel di Singapore. Fruttato, colorato e perfettamente bilanciato.",
      tags: ["gin", "brandy all'albicocca", "succo di limone", "brandy alla ciliegia", "granatina", "succo di ananas", "angostura bitters", "soda"]
    },
    de: {
      ingredients: ["Sipsmith Gin — 30 ml", "Aprikosenbrand — 15 ml", "Zitronensaft — 15 ml", "Kirschbrand — 10 ml", "Hausgemachte Grenadine — 10 ml", "Ananassaft — 90 ml", "Angostura Bitters — 2 Spritzer", "Angostura Orange — 3 Spritzer", "Sodawasser — ~30 ml, nur ein Schuss"],
      method: ["Alle Zutaten (außer Soda) im Shaker mit Eis schütteln.", "In ein Sling-Glas mit Eis abseihen.", "Mit einem Schuss Sodawasser auffüllen."],
      garnish: "Orangenscheibe und eine gewaschene Cocktailkirsche",
      story: "Unsere Interpretation des legendären Singapore Sling, kreiert Anfang des 20. Jahrhunderts in der Bar des Raffles Hotel in Singapur. Fruchtig, farbenfroh und perfekt ausbalanciert.",
      tags: ["gin", "aprikosenbrand", "zitronensaft", "kirschbrand", "grenadine", "ananassaft", "angostura bitters", "sodawasser"]
    },
    ru: {
      ingredients: ["Sipsmith Gin — 30 мл", "Абрикосовый бренди — 15 мл", "Лимонный сок — 15 мл", "Вишнёвый бренди — 10 мл", "Домашний гренадин — 10 мл", "Ананасовый сок — 90 мл", "Ангостура биттерс — 2 дропса", "Ангостура Orange — 3 дропса", "Содовая — ~30 мл, совсем немного"],
      method: ["Взбить все ингредиенты (кроме содовой) в шейкере со льдом.", "Процедить в sling glass со льдом.", "Долить небольшим количеством содовой."],
      garnish: "Долька апельсина и вымытая вишня",
      story: "Наша версия легендарного Singapore Sling — коктейля, созданного в начале XX века в баре Raffles Hotel в Сингапуре. Фруктовый, яркий и сбалансированный.",
      tags: ["джин", "абрикосовый бренди", "лимонный сок", "вишнёвый бренди", "гренадин", "ананасовый сок", "ангостура биттерс", "содовая"]
    }
  },

  "sw-manhattan": {
    en: {
      ingredients: ["4 Roses / Rabbit Hole Rye — 35 ml", "Antica Formula (sweet vermouth) — 20 ml", "Dolin Dry Vermouth — 15 ml"],
      method: ["Stir all ingredients with ice in a mixing glass (stir).", "Strain into a chilled S&W Martini glass."],
      garnish: "Bartender's choice (bespoke)",
      story: "One of the oldest cocktails in the world — it emerged in New York in the 1870s. A classic trio of rye, sweet vermouth and bitters. We can make it Sweet, Dry or Perfect — just tell your bartender.",
      tags: ["rye whiskey", "rye", "sweet vermouth", "dry vermouth", "antica formula", "dolin"]
    },
    es: {
      ingredients: ["4 Roses / Rabbit Hole Rye — 35 ml", "Antica Formula (vermut dulce) — 20 ml", "Dolin Dry Vermouth — 15 ml"],
      method: ["Remover todos los ingredientes con hielo en un vaso mezclador (stir).", "Colar en una copa S&W Martini bien fría."],
      garnish: "A elección del bartender (bespoke)",
      story: "Uno de los cócteles más antiguos del mundo, surgido en Nueva York en la década de 1870. El trío clásico de centeno, vermut dulce y bitters. Podemos prepararlo Sweet, Dry o Perfect — solo dilo a tu bartender.",
      tags: ["whisky de centeno", "centeno", "vermut dulce", "vermut seco", "antica formula", "dolin"]
    },
    it: {
      ingredients: ["4 Roses / Rabbit Hole Rye — 35 ml", "Antica Formula (vermouth dolce) — 20 ml", "Dolin Dry Vermouth — 15 ml"],
      method: ["Mescolare tutti gli ingredienti con ghiaccio nel mixing glass (stir).", "Filtrare in una coppa S&W Martini ben fredda."],
      garnish: "A scelta del bartender (bespoke)",
      story: "Uno dei cocktail più antichi al mondo, nato a New York negli anni '70 dell'Ottocento. Il classico trio di segale, vermouth dolce e bitter. Possiamo prepararlo Sweet, Dry o Perfect: basta chiederlo al bartender.",
      tags: ["whisky di segale", "segale", "vermouth dolce", "vermouth secco", "antica formula", "dolin"]
    },
    de: {
      ingredients: ["4 Roses / Rabbit Hole Rye — 35 ml", "Antica Formula (süßer Wermut) — 20 ml", "Dolin Dry Vermouth — 15 ml"],
      method: ["Alle Zutaten im Rührglas mit Eis verrühren (stir).", "In ein gekühltes S&W Martini-Glas abseihen."],
      garnish: "Nach Wahl des Barkeepers (bespoke)",
      story: "Einer der ältesten Cocktails der Welt — entstanden in New York in den 1870er-Jahren. Das klassische Trio aus Rye, süßem Wermut und Bitters. Wir mixen ihn gerne Sweet, Dry oder Perfect — einfach den Barkeeper fragen.",
      tags: ["rye whiskey", "roggenwhiskey", "süßer wermut", "trockener wermut", "antica formula", "dolin"]
    },
    ru: {
      ingredients: ["4 Roses / Rabbit Hole Rye — 35 мл", "Antica Formula (сладкий вермут) — 20 мл", "Dolin Dry Vermouth — 15 мл"],
      method: ["Размешать все ингредиенты со льдом в мешалке (stir).", "Процедить в охлаждённый S&W Martini glass."],
      garnish: "На усмотрение бартендера (bespoke)",
      story: "Один из старейших коктейлей в мире — появился в Нью-Йорке в 1870-х. Классическое трио ржаного виски, сладкого вермута и биттеров. Можем приготовить Sweet, Dry или Perfect — просто скажите бармену.",
      tags: ["ржаной виски", "рожь", "сладкий вермут", "сухой вермут", "antica formula", "dolin"]
    }
  },

  "sw-martini": {
    en: {
      ingredients: ["Sapling Vodka or Sipsmith Gin — 75 ml", "Dolin Dry Vermouth — 30 ml (Wet) / 15 ml (Dry) / 5 ml (Extra Dry)"],
      method: ["Stir with ice in a mixing glass (stir) until well chilled.", "Strain into a chilled S&W Martini glass."],
      garnish: "Lemon twist",
      story: "A symbol of classic bartending craft. Order it Wet, Dry or Extra Dry — depending on how much you want the vermouth to speak.",
      tags: ["vodka", "gin", "dry vermouth", "dolin"]
    },
    es: {
      ingredients: ["Sapling Vodka o Sipsmith Gin — 75 ml", "Dolin Dry Vermouth — 30 ml (Wet) / 15 ml (Dry) / 5 ml (Extra Dry)"],
      method: ["Remover con hielo en un vaso mezclador (stir) hasta enfriar bien.", "Colar en una copa S&W Martini bien fría."],
      garnish: "Twist de limón",
      story: "Un símbolo del arte clásico de la coctelería. Pídelo Wet, Dry o Extra Dry, según cuánto quieras que se note el vermut.",
      tags: ["vodka", "ginebra", "vermut seco", "dolin"]
    },
    it: {
      ingredients: ["Sapling Vodka o Sipsmith Gin — 75 ml", "Dolin Dry Vermouth — 30 ml (Wet) / 15 ml (Dry) / 5 ml (Extra Dry)"],
      method: ["Mescolare con ghiaccio nel mixing glass (stir) fino a raffreddare bene.", "Filtrare in una coppa S&W Martini ben fredda."],
      garnish: "Twist di limone",
      story: "Un simbolo dell'arte classica della miscelazione. Ordinalo Wet, Dry o Extra Dry, a seconda di quanto vuoi che il vermouth si faccia sentire.",
      tags: ["vodka", "gin", "vermouth secco", "dolin"]
    },
    de: {
      ingredients: ["Sapling Vodka oder Sipsmith Gin — 75 ml", "Dolin Dry Vermouth — 30 ml (Wet) / 15 ml (Dry) / 5 ml (Extra Dry)"],
      method: ["Mit Eis im Rührglas verrühren (stir), bis er stark gekühlt ist.", "In ein gekühltes S&W Martini-Glas abseihen."],
      garnish: "Zitronentwist",
      story: "Ein Symbol klassischer Barkunst. Bestellen Sie ihn Wet, Dry oder Extra Dry — je nachdem, wie deutlich der Wermut hervortreten soll.",
      tags: ["wodka", "gin", "trockener wermut", "dolin"]
    },
    ru: {
      ingredients: ["Sapling Vodka или Sipsmith Gin — 75 мл", "Dolin Dry Vermouth — 30 мл (Wet) / 15 мл (Dry) / 5 мл (Extra Dry)"],
      method: ["Размешать со льдом в мешалке (stir) до сильного охлаждения.", "Процедить в охлаждённый S&W Martini glass."],
      garnish: "Твист лимона",
      story: "Символ классического бартендерского искусства. Заказывайте Wet, Dry или Extra Dry — в зависимости от того, насколько выразительным должен быть вермут.",
      tags: ["водка", "джин", "сухой вермут", "dolin"]
    }
  },

  "sw-vesper": {
    en: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Sapling Vodka — 35 ml", "Kina L'Aero — 15 ml"],
      method: ["Stir with ice in a mixing glass (stir).", "Strain into a chilled S&W Martini glass."],
      garnish: "Lemon twist",
      story: "The cocktail Ian Fleming created for James Bond in the novel Casino Royale (1953). Despite the famous 'shaken, not stirred', a true Vesper is always stirred — never shaken.",
      tags: ["gin", "vodka", "kina l'aero"]
    },
    es: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Sapling Vodka — 35 ml", "Kina L'Aero — 15 ml"],
      method: ["Remover con hielo en un vaso mezclador (stir).", "Colar en una copa S&W Martini bien fría."],
      garnish: "Twist de limón",
      story: "El cóctel que Ian Fleming creó para James Bond en la novela Casino Royale (1953). Pese al famoso «agitado, no revuelto», un verdadero Vesper siempre se remueve, nunca se agita.",
      tags: ["ginebra", "vodka", "kina l'aero"]
    },
    it: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Sapling Vodka — 35 ml", "Kina L'Aero — 15 ml"],
      method: ["Mescolare con ghiaccio nel mixing glass (stir).", "Filtrare in una coppa S&W Martini ben fredda."],
      garnish: "Twist di limone",
      story: "Il cocktail che Ian Fleming creò per James Bond nel romanzo Casino Royale (1953). Nonostante il celebre «shaken, not stirred», un vero Vesper si mescola sempre, non si shakera mai.",
      tags: ["gin", "vodka", "kina l'aero"]
    },
    de: {
      ingredients: ["Sipsmith London Dry Gin — 40 ml", "Sapling Vodka — 35 ml", "Kina L'Aero — 15 ml"],
      method: ["Mit Eis im Rührglas verrühren (stir).", "In ein gekühltes S&W Martini-Glas abseihen."],
      garnish: "Zitronentwist",
      story: "Der Cocktail, den Ian Fleming für James Bond im Roman Casino Royale (1953) erfand. Trotz des berühmten „geschüttelt, nicht gerührt“ wird ein echter Vesper immer gerührt — niemals geschüttelt.",
      tags: ["gin", "wodka", "kina l'aero"]
    },
    ru: {
      ingredients: ["Sipsmith London Dry Gin — 40 мл", "Sapling Vodka — 35 мл", "Kina L'Aero — 15 мл"],
      method: ["Размешать со льдом в мешалке (stir).", "Процедить в охлаждённый S&W Martini glass."],
      garnish: "Твист лимона",
      story: "Коктейль, который Ян Флеминг придумал для Джеймса Бонда в романе «Casino Royale» (1953). Несмотря на знаменитое «взболтать, не смешивать», настоящий Vesper всегда размешивают — не взбалтывают.",
      tags: ["джин", "водка", "kina l'aero"]
    }
  },

  "vanilla-passion": {
    en: {
      ingredients: ["Absolut Vanilla — 40 ml", "Passion fruit purée — 40 ml", "Lime juice — 5 ml", "Sugar syrup — 15 ml"],
      method: ["Shake all ingredients in a shaker with ice and strain over crushed ice (crushed ice)."],
      garnish: "1/3 passion fruit",
      story: "A sweet tropical cocktail of vanilla vodka and passion fruit — simple, vivid, and dangerously easy to drink.",
      tags: ["vanilla vodka", "passion fruit", "lime juice", "sugar syrup"]
    },
    es: {
      ingredients: ["Absolut Vanilla — 40 ml", "Puré de maracuyá — 40 ml", "Zumo de lima — 5 ml", "Sirope de azúcar — 15 ml"],
      method: ["Agitar todos los ingredientes en una coctelera con hielo y colar sobre hielo picado (crushed ice)."],
      garnish: "1/3 de maracuyá",
      story: "Un cóctel tropical y dulce de vodka de vainilla y maracuyá: sencillo, vibrante y peligrosamente fácil de beber.",
      tags: ["vodka de vainilla", "maracuyá", "zumo de lima", "sirope de azúcar"]
    },
    it: {
      ingredients: ["Absolut Vanilla — 40 ml", "Purea di frutto della passione — 40 ml", "Succo di lime — 5 ml", "Sciroppo di zucchero — 15 ml"],
      method: ["Shakerare tutti gli ingredienti con ghiaccio e filtrare su ghiaccio tritato (crushed ice)."],
      garnish: "1/3 di frutto della passione",
      story: "Un cocktail tropicale e dolce a base di vodka alla vaniglia e frutto della passione: semplice, vivace e pericolosamente facile da bere.",
      tags: ["vodka alla vaniglia", "frutto della passione", "succo di lime", "sciroppo di zucchero"]
    },
    de: {
      ingredients: ["Absolut Vanilla — 40 ml", "Maracuja-Püree — 40 ml", "Limettensaft — 5 ml", "Zuckersirup — 15 ml"],
      method: ["Alle Zutaten im Shaker mit Eis schütteln und über Crushed Ice abseihen (crushed ice)."],
      garnish: "1/3 Maracuja",
      story: "Ein süßer, tropischer Cocktail aus Vanille-Wodka und Maracuja — einfach, lebendig und gefährlich leicht zu trinken.",
      tags: ["vanille-wodka", "maracuja", "limettensaft", "zuckersirup"]
    },
    ru: {
      ingredients: ["Absolut Vanilla — 40 мл", "Пюре маракуйи — 40 мл", "Сок лайма — 5 мл", "Сахарный сироп — 15 мл"],
      method: ["Взбить все ингредиенты в шейкере со льдом и процедить на колотый лёд (crushed ice)."],
      garnish: "1/3 плода маракуйи",
      story: "Сладкий тропический коктейль с ванильной водкой и маракуйей — простой, яркий и опасно легко пьётся.",
      tags: ["ванильная водка", "маракуйя", "сок лайма", "сахарный сироп"]
    }
  },

  "whisky-fjords": {
    en: {
      ingredients: ["Nc'Nean Organic Single Malt — 40 ml", "Brannland Iscider (cider) — 40 ml", "Jerry Thomas Decanter Bitters — 2 dashes (just a little)", "Sparkling mineral water — top up"],
      method: ["Build all ingredients directly in a glass with ice."],
      garnish: "Lemon zest expressed over the glass; a long lemon zest and 2 ginger candies on a skewer",
      story: "Scandinavian inspiration in a glass: organic Scottish single malt meets Swedish ice cider. Light, sparkling, with a warm ginger note in the garnish.",
      tags: ["whisky", "single malt", "cider", "angostura", "bitters", "mineral water"]
    },
    es: {
      ingredients: ["Nc'Nean Organic Single Malt — 40 ml", "Brannland Iscider (sidra) — 40 ml", "Jerry Thomas Decanter Bitters — 2 gotas (muy pocas)", "Agua mineral con gas — hasta completar"],
      method: ["Montar (build) todos los ingredientes directamente en el vaso con hielo."],
      garnish: "Piel de limón exprimida sobre la copa; una tira larga de piel de limón y 2 caramelos de jengibre en una brocheta",
      story: "Inspiración escandinava en una copa: el single malt escocés ecológico se encuentra con la sidra de hielo sueca. Ligero, chispeante, con un cálido toque de jengibre en la guarnición.",
      tags: ["whisky", "single malt", "sidra", "angostura", "bitters", "agua mineral"]
    },
    it: {
      ingredients: ["Nc'Nean Organic Single Malt — 40 ml", "Brannland Iscider (sidro) — 40 ml", "Jerry Thomas Decanter Bitters — 2 gocce (poche)", "Acqua minerale frizzante — colmare"],
      method: ["Assemblare (build) tutti gli ingredienti direttamente nel bicchiere con ghiaccio."],
      garnish: "Scorza di limone spruzzata sul bicchiere; una scorza lunga di limone e 2 caramelle allo zenzero su uno stecchino",
      story: "Ispirazione scandinava in un bicchiere: il single malt scozzese biologico incontra il sidro ghiacciato svedese. Leggero, frizzante, con una calda nota di zenzero nella guarnizione.",
      tags: ["whisky", "single malt", "sidro", "angostura", "bitter", "acqua minerale"]
    },
    de: {
      ingredients: ["Nc'Nean Organic Single Malt — 40 ml", "Brannland Iscider (Cider) — 40 ml", "Jerry Thomas Decanter Bitters — 2 Spritzer (nur wenig)", "Sprudelwasser — zum Auffüllen"],
      method: ["Alle Zutaten direkt im Glas mit Eis aufbauen (build)."],
      garnish: "Zitronenzeste über dem Glas ausgedrückt; eine lange Zitronenzeste und 2 Ingwerbonbons am Spieß",
      story: "Skandinavische Inspiration im Glas: organischer schottischer Single Malt trifft auf schwedischen Eiscider. Leicht, spritzig, mit einer warmen Ingwernote im Garnish.",
      tags: ["whisky", "single malt", "cider", "angostura", "bitters", "mineralwasser"]
    },
    ru: {
      ingredients: ["Nc'Nean Organic Single Malt — 40 мл", "Brannland Iscider (сидр) — 40 мл", "Jerry Thomas Decanter Bitters — 2 дропса (немного)", "Газированная минеральная вода — доверху"],
      method: ["Собрать (build) все ингредиенты прямо в бокале со льдом."],
      garnish: "Цедра лимона над бокалом; длинная цедра лимона и 2 имбирные конфеты на шпажке",
      story: "Скандинавское вдохновение в бокале: органический шотландский single malt встречается со шведским ледяным сидром. Лёгкий, игристый, с тёплым имбирным акцентом в гарнире.",
      tags: ["виски", "single malt", "сидр", "ангостура", "биттерс", "минеральная вода"]
    }
  },

  "peach-melba": {
    en: {
      ingredients: ["Absolut Vanilla — 40 ml", "Peach purée — 40 ml", "Lemon juice — 20 ml", "Sugar syrup 2:1 — 10 ml", "Prosecco — ~40 ml, to taste"],
      method: ["Shake all ingredients except the prosecco in a shaker with ice.", "Open the shaker and top up with prosecco by eye.", "Strain over ice, topping with more prosecco if needed."],
      garnish: "Dehydrated lemon wheel",
      story: "The name nods to the Peach Melba dessert created by chef Auguste Escoffier in honour of opera singer Nellie Melba. Here, peach and vanilla meet the bubbles of prosecco.",
      tags: ["vanilla vodka", "peach purée", "lemon juice", "sugar syrup", "prosecco"]
    },
    es: {
      ingredients: ["Absolut Vanilla — 40 ml", "Puré de melocotón — 40 ml", "Zumo de limón — 20 ml", "Sirope de azúcar 2:1 — 10 ml", "Prosecco — ~40 ml, al gusto"],
      method: ["Agitar todos los ingredientes, excepto el prosecco, en una coctelera con hielo.", "Abrir la coctelera y añadir el prosecco a ojo.", "Colar sobre hielo, completando con más prosecco si es necesario."],
      garnish: "Rodaja de limón deshidratada",
      story: "El nombre remite al postre Peach Melba, creado por el chef Auguste Escoffier en honor a la cantante de ópera Nellie Melba. Aquí, el melocotón y la vainilla se encuentran con las burbujas del prosecco.",
      tags: ["vodka de vainilla", "puré de melocotón", "zumo de limón", "sirope de azúcar", "prosecco"]
    },
    it: {
      ingredients: ["Absolut Vanilla — 40 ml", "Purea di pesca — 40 ml", "Succo di limone — 20 ml", "Sciroppo di zucchero 2:1 — 10 ml", "Prosecco — ~40 ml, a piacere"],
      method: ["Shakerare tutti gli ingredienti tranne il prosecco con ghiaccio.", "Aprire lo shaker e aggiungere il prosecco a occhio.", "Filtrare su ghiaccio, completando con altro prosecco se necessario."],
      garnish: "Rondella di limone disidratata",
      story: "Il nome richiama il dessert Peach Melba, creato dallo chef Auguste Escoffier in onore della cantante lirica Nellie Melba. Qui, pesca e vaniglia incontrano le bollicine del prosecco.",
      tags: ["vodka alla vaniglia", "purea di pesca", "succo di limone", "sciroppo di zucchero", "prosecco"]
    },
    de: {
      ingredients: ["Absolut Vanilla — 40 ml", "Pfirsichpüree — 40 ml", "Zitronensaft — 20 ml", "Zuckersirup 2:1 — 10 ml", "Prosecco — ~40 ml, nach Geschmack"],
      method: ["Alle Zutaten außer dem Prosecco im Shaker mit Eis schütteln.", "Den Shaker öffnen und nach Augenmaß mit Prosecco auffüllen.", "Über Eis abseihen und bei Bedarf mit weiterem Prosecco auffüllen."],
      garnish: "Dehydrierte Zitronenscheibe",
      story: "Der Name verweist auf das Dessert Pfirsich Melba, das Küchenchef Auguste Escoffier zu Ehren der Opernsängerin Nellie Melba kreierte. Hier treffen Pfirsich und Vanille auf die Perlage des Prosecco.",
      tags: ["vanille-wodka", "pfirsichpüree", "zitronensaft", "zuckersirup", "prosecco"]
    },
    ru: {
      ingredients: ["Absolut Vanilla — 40 мл", "Персиковое пюре — 40 мл", "Лимонный сок — 20 мл", "Сахарный сироп 2:1 — 10 мл", "Просекко — ~40 мл, по вкусу"],
      method: ["Взбить все ингредиенты, кроме просекко, в шейкере со льдом.", "Открыть шейкер и на глаз долить просекко.", "Процедить на лёд, при необходимости долить ещё просекко сверху."],
      garnish: "Дегидрированный круг лимона",
      story: "Название отсылает к десерту Peach Melba, который шеф Огюст Эскофье создал в честь оперной певицы Нелли Мельбы. Здесь персик и ваниль встречаются с пузырьками просекко.",
      tags: ["ванильная водка", "персиковое пюре", "лимонный сок", "сахарный сироп", "просекко"]
    }
  },

  "mai-tai": {
    en: {
      ingredients: ["Havana 7yr — 30 ml", "S&W Tiki Rum Blend — 15 ml (house blend of Two Drifters Pineapple OP, Rumba Overproof, Saint James — equal parts)", "Lime juice — 20 ml", "Apricot brandy — 15 ml", "Orgeat / almond syrup — 15 ml (contains nuts)"],
      method: ["Shake all ingredients hard (shake hard) and strain over ice."],
      garnish: "Washed cherry and a mint sprig",
      story: "A classic tiki cocktail created by Travis \"Trader Vic\" Bergeron in 1944 in California. The name itself means 'out of this world' in Hawaiian — exactly how the first tasters reacted.",
      tags: ["rum", "tiki rum", "lime juice", "apricot brandy", "orgeat", "almond syrup"]
    },
    es: {
      ingredients: ["Havana 7yr — 30 ml", "S&W Tiki Rum Blend — 15 ml (mezcla de la casa de Two Drifters Pineapple OP, Rumba Overproof y Saint James, a partes iguales)", "Zumo de lima — 20 ml", "Brandy de albaricoque — 15 ml", "Orgeat / jarabe de almendra — 15 ml (contiene frutos secos)"],
      method: ["Agitar todos los ingredientes con fuerza (shake hard) y colar sobre hielo."],
      garnish: "Cereza lavada y una ramita de menta",
      story: "Un cóctel tiki clásico creado por Travis «Trader Vic» Bergeron en 1944 en California. El propio nombre significa «fuera de este mundo» en hawaiano, justo como reaccionaron los primeros que lo probaron.",
      tags: ["ron", "ron tiki", "zumo de lima", "brandy de albaricoque", "orgeat", "jarabe de almendra"]
    },
    it: {
      ingredients: ["Havana 7yr — 30 ml", "S&W Tiki Rum Blend — 15 ml (miscela della casa di Two Drifters Pineapple OP, Rumba Overproof e Saint James, in parti uguali)", "Succo di lime — 20 ml", "Brandy all'albicocca — 15 ml", "Orgeat / sciroppo di mandorla — 15 ml (contiene frutta a guscio)"],
      method: ["Shakerare tutti gli ingredienti con energia (shake hard) e filtrare su ghiaccio."],
      garnish: "Ciliegia sciacquata e un rametto di menta",
      story: "Un cocktail tiki classico creato da Travis «Trader Vic» Bergeron nel 1944 in California. Il nome stesso significa «fuori da questo mondo» in hawaiano, proprio come reagirono i primi ad assaggiarlo.",
      tags: ["rum", "rum tiki", "succo di lime", "brandy all'albicocca", "orgeat", "sciroppo di mandorla"]
    },
    de: {
      ingredients: ["Havana 7yr — 30 ml", "S&W Tiki Rum Blend — 15 ml (Hausmischung aus Two Drifters Pineapple OP, Rumba Overproof, Saint James — zu gleichen Teilen)", "Limettensaft — 20 ml", "Aprikosenbrand — 15 ml", "Orgeat / Mandelsirup — 15 ml (enthält Nüsse)"],
      method: ["Alle Zutaten kräftig schütteln (shake hard) und über Eis abseihen."],
      garnish: "Gewaschene Cocktailkirsche und ein Minzzweig",
      story: "Ein klassischer Tiki-Cocktail, kreiert von Travis „Trader Vic“ Bergeron im Jahr 1944 in Kalifornien. Der Name selbst bedeutet auf Hawaiianisch „aus einer anderen Welt“ — genau so reagierten die ersten, die ihn probierten.",
      tags: ["rum", "tiki-rum", "limettensaft", "aprikosenbrand", "orgeat", "mandelsirup"]
    },
    ru: {
      ingredients: ["Havana 7yr — 30 мл", "S&W Tiki Rum Blend — 15 мл (домашняя смесь Two Drifters Pineapple OP, Rumba Overproof, Saint James — по 1 части)", "Сок лайма — 20 мл", "Абрикосовый бренди — 15 мл", "Оршад / миндальный сироп — 15 мл (содержит орехи)"],
      method: ["Взбить все ингредиенты сильно (shake hard) и процедить на лёд."],
      garnish: "Вымытая вишня и веточка мяты",
      story: "Классический тики-коктейль, созданный Трэвисом «Trader Vic» Бержероном в 1944 году в Калифорнии. Само название на гавайском означает «из другого мира» — именно так отреагировали первые дегустаторы.",
      tags: ["ром", "тики ром", "сок лайма", "абрикосовый бренди", "оршад", "миндальный сироп"]
    }
  },

  "paper-aeroplane": {
    en: {
      ingredients: ["Jameson Black Barrel — 20 ml", "Aperol — 20 ml", "Averna Amaro — 20 ml", "Lemon juice — 20 ml"],
      method: ["Shake hard (shake) and double strain (double strain) into a chilled coupette."],
      garnish: "Dehydrated orange slice",
      story: "Our variation on the classic Paper Plane, created by bartender Sam Ross in 2007–2008: a perfect balance of whisky, amaro, Aperol and lemon — a quarter of each.",
      tags: ["whisky", "aperol", "amaro", "averna", "lemon juice"]
    },
    es: {
      ingredients: ["Jameson Black Barrel — 20 ml", "Aperol — 20 ml", "Averna Amaro — 20 ml", "Zumo de limón — 20 ml"],
      method: ["Agitar con fuerza (shake) y colar doblemente (double strain) en una coupette bien fría."],
      garnish: "Rodaja de naranja deshidratada",
      story: "Nuestra variación del clásico Paper Plane, creado por el bartender Sam Ross en 2007-2008: un equilibrio perfecto entre whisky, amaro, Aperol y limón, a partes iguales.",
      tags: ["whisky", "aperol", "amaro", "averna", "zumo de limón"]
    },
    it: {
      ingredients: ["Jameson Black Barrel — 20 ml", "Aperol — 20 ml", "Averna Amaro — 20 ml", "Succo di limone — 20 ml"],
      method: ["Shakerare con energia (shake) e filtrare due volte (double strain) in una coupette ben fredda."],
      garnish: "Fetta d'arancia disidratata",
      story: "La nostra variazione del classico Paper Plane, creato dal bartender Sam Ross nel 2007-2008: un equilibrio perfetto tra whisky, amaro, Aperol e limone, in parti uguali.",
      tags: ["whisky", "aperol", "amaro", "averna", "succo di limone"]
    },
    de: {
      ingredients: ["Jameson Black Barrel — 20 ml", "Aperol — 20 ml", "Averna Amaro — 20 ml", "Zitronensaft — 20 ml"],
      method: ["Kräftig schütteln (shake) und doppelt abseihen (double strain) in eine gekühlte Coupette."],
      garnish: "Dehydrierte Orangenscheibe",
      story: "Unsere Variante des klassischen Paper Plane, kreiert vom Barkeeper Sam Ross 2007–2008: eine perfekte Balance aus Whisky, Amaro, Aperol und Zitrone — zu je einem Viertel.",
      tags: ["whisky", "aperol", "amaro", "averna", "zitronensaft"]
    },
    ru: {
      ingredients: ["Jameson Black Barrel — 20 мл", "Aperol — 20 мл", "Averna Amaro — 20 мл", "Лимонный сок — 20 мл"],
      method: ["Взбить сильно (shake) и дважды процедить (double strain) в охлаждённый coupette."],
      garnish: "Дегидрированная долька апельсина",
      story: "Наша вариация классического Paper Plane, который бартендер Сэм Росс создал в 2007–2008 годах: идеальный баланс виски, амаро, апероля и лимона — по четверти каждого.",
      tags: ["виски", "aperol", "амаро", "averna", "лимонный сок"]
    }
  },

  "pink-lady": {
    en: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Alma Finca Orange Liqueur — 20 ml", "Lemon juice — 20 ml", "Pomegranate grenadine — 10 ml", "Angostura Orange — 2 dashes", "Egg white — 2/3 of a white"],
      method: ["Dry shake (dry shake) without ice to build the foam.", "Add ice and shake hard (shake hard).", "Fine strain into a chilled coupette."],
      garnish: "Lemon and orange twist",
      story: "A cocktail from the 1930s, named after the Broadway play of the same name. A delicate pink hue and a velvety texture, courtesy of the egg white.",
      tags: ["gin", "orange liqueur", "lemon juice", "grenadine", "egg white"]
    },
    es: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Alma Finca Orange Liqueur — 20 ml", "Zumo de limón — 20 ml", "Granadina de granada — 10 ml", "Angostura Orange — 2 gotas", "Clara de huevo — 2/3 de una clara"],
      method: ["Dry shake (dry shake) sin hielo para levantar la espuma.", "Añadir hielo y agitar con fuerza (shake hard).", "Colar fino en una coupette bien fría."],
      garnish: "Twist de limón y naranja",
      story: "Un cóctel de los años 30, bautizado en honor a la obra de Broadway del mismo nombre. Un delicado tono rosado y una textura aterciopelada, gracias a la clara de huevo.",
      tags: ["ginebra", "licor de naranja", "zumo de limón", "granadina", "clara de huevo"]
    },
    it: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Alma Finca Orange Liqueur — 20 ml", "Succo di limone — 20 ml", "Granatina di melagrana — 10 ml", "Angostura Orange — 2 gocce", "Albume d'uovo — 2/3 di albume"],
      method: ["Dry shake (dry shake) senza ghiaccio per far montare la schiuma.", "Aggiungere il ghiaccio e shakerare con energia (shake hard).", "Filtrare finemente in una coupette ben fredda."],
      garnish: "Twist di limone e arancia",
      story: "Un cocktail degli anni '30, chiamato così in onore dell'omonima commedia di Broadway. Una delicata tonalità rosa e una texture vellutata, grazie all'albume d'uovo.",
      tags: ["gin", "liquore all'arancia", "succo di limone", "granatina", "albume d'uovo"]
    },
    de: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Alma Finca Orange Liqueur — 20 ml", "Zitronensaft — 20 ml", "Granatapfel-Grenadine — 10 ml", "Angostura Orange — 2 Spritzer", "Eiweiß — 2/3 eines Eiweißes"],
      method: ["Trocken schütteln (dry shake) ohne Eis, damit der Schaum aufsteigt.", "Eis hinzufügen und kräftig schütteln (shake hard).", "Fein abseihen in eine gekühlte Coupette."],
      garnish: "Zitronen- und Orangentwist",
      story: "Ein Cocktail aus den 1930er-Jahren, benannt nach dem gleichnamigen Broadway-Stück. Ein zarter Rosaton und eine samtige Textur — dank des Eiweißes.",
      tags: ["gin", "orangenlikör", "zitronensaft", "grenadine", "eiweiß"]
    },
    ru: {
      ingredients: ["Sipsmith London Dry Gin — 35 мл", "Alma Finca Orange Liqueur — 20 мл", "Лимонный сок — 20 мл", "Гранатовый гренадин — 10 мл", "Ангостура Orange — 2 дропса", "Яичный белок — 2/3 белка"],
      method: ["Сухой шейк (dry shake) без льда, чтобы поднялась пена.", "Добавить лёд и взбить сильно (shake hard).", "Тонко процедить в охлаждённый coupette."],
      garnish: "Твист лимона и апельсина",
      story: "Коктейль 1930-х годов, названный в честь одноимённой бродвейской пьесы. Нежный розовый цвет и бархатистая текстура — благодаря яичному белку.",
      tags: ["джин", "апельсиновый ликёр", "лимонный сок", "гренадин", "яичный белок"]
    }
  },

  "sazerac": {
    en: {
      ingredients: ["Rabbit Hole Heigold Bourbon (blue label) — 30 ml", "Frapin V.S.O.P Cognac — 30 ml", "Demerara syrup — 10 ml", "Jerry Thomas Decanter Bitters — 2 dashes", "Peychaud's Bitters — 2 dashes (or Creole bitters)", "Absinthe — 20 ml, for rinsing the glass (not for drinking)"],
      method: ["Chill a Brandy Balloon glass with crushed ice.", "Combine the first 5 ingredients in a mixing glass / Boston tin.", "Empty the ice from the glass, add 5 ice cubes and the absinthe, swirl until the cocktail 'louches' (turns cloudy).", "Tilt and rotate the glass so the absinthe coats the walls.", "Discard the absinthe.", "Fine strain the cocktail into the prepared glass."],
      garnish: "Lemon zest — rubbed around the rim of the glass and discarded",
      story: "Considered one of the very first cocktails in history — it emerged in New Orleans in the mid-19th century. Originally made with cognac, later with rye whiskey; our version brings both together.",
      tags: ["bourbon", "cognac", "demerara syrup", "angostura", "peychaud's bitters", "absinthe"]
    },
    es: {
      ingredients: ["Rabbit Hole Heigold Bourbon (etiqueta azul) — 30 ml", "Frapin V.S.O.P Cognac — 30 ml", "Sirope de demerara — 10 ml", "Jerry Thomas Decanter Bitters — 2 gotas", "Peychaud's Bitters — 2 gotas (o bitters criollos)", "Absenta — 20 ml, para enjuagar la copa (no para beber)"],
      method: ["Enfriar una copa Brandy Balloon con hielo picado.", "Mezclar los primeros 5 ingredientes en un vaso mezclador / lata Boston.", "Vaciar el hielo de la copa, añadir 5 cubitos de hielo y la absenta, girar hasta que el cóctel «se enturbie» (louche).", "Inclinar y girar la copa para que la absenta cubra las paredes.", "Desechar la absenta.", "Colar fino el cóctel en la copa preparada."],
      garnish: "Piel de limón — frotada por el borde de la copa y desechada",
      story: "Considerado uno de los primeros cócteles de la historia, surgido en Nueva Orleans a mediados del siglo XIX. Originalmente se preparaba con coñac, más tarde con whisky de centeno; nuestra versión une ambos.",
      tags: ["bourbon", "coñac", "sirope de demerara", "angostura", "peychaud's bitters", "absenta"]
    },
    it: {
      ingredients: ["Rabbit Hole Heigold Bourbon (etichetta blu) — 30 ml", "Frapin V.S.O.P Cognac — 30 ml", "Sciroppo di demerara — 10 ml", "Jerry Thomas Decanter Bitters — 2 gocce", "Peychaud's Bitters — 2 gocce (o bitter creoli)", "Assenzio — 20 ml, per risciacquare il bicchiere (non da bere)"],
      method: ["Raffreddare un bicchiere Brandy Balloon con ghiaccio tritato.", "Unire i primi 5 ingredienti in un mixing glass / latta Boston.", "Svuotare il ghiaccio dal bicchiere, aggiungere 5 cubetti di ghiaccio e l'assenzio, roteare finché il cocktail non si «intorbidisce» (louche).", "Inclinare e ruotare il bicchiere in modo che l'assenzio ne rivesta le pareti.", "Eliminare l'assenzio.", "Filtrare finemente il cocktail nel bicchiere preparato."],
      garnish: "Scorza di limone — strofinata sul bordo del bicchiere e scartata",
      story: "Considerato uno dei primissimi cocktail della storia, nato a New Orleans a metà dell'Ottocento. In origine si preparava con cognac, poi con whisky di segale; la nostra versione unisce entrambi.",
      tags: ["bourbon", "cognac", "sciroppo di demerara", "angostura", "peychaud's bitters", "assenzio"]
    },
    de: {
      ingredients: ["Rabbit Hole Heigold Bourbon (blaues Etikett) — 30 ml", "Frapin V.S.O.P Cognac — 30 ml", "Demerara-Sirup — 10 ml", "Jerry Thomas Decanter Bitters — 2 Spritzer", "Peychaud's Bitters — 2 Spritzer (oder Creole Bitters)", "Absinth — 20 ml, zum Ausschwenken des Glases (nicht zum Trinken)"],
      method: ["Ein Brandy-Balloon-Glas mit Crushed Ice kühlen.", "Die ersten 5 Zutaten im Rührglas / Boston-Shaker vereinen.", "Das Eis aus dem Glas leeren, 5 Eiswürfel und den Absinth hinzugeben, schwenken, bis der Cocktail „louched“ (trüb wird).", "Das Glas kippen und drehen, sodass der Absinth die Wände benetzt.", "Den Absinth ausgießen.", "Den Cocktail fein abgeseiht in das vorbereitete Glas geben."],
      garnish: "Zitronenzeste — über den Glasrand gerieben und dann entsorgt",
      story: "Gilt als einer der allerersten Cocktails der Geschichte — entstanden in New Orleans Mitte des 19. Jahrhunderts. Ursprünglich mit Cognac zubereitet, später mit Roggenwhiskey; unsere Version vereint beides.",
      tags: ["bourbon", "cognac", "demerara-sirup", "angostura", "peychaud's bitters", "absinth"]
    },
    ru: {
      ingredients: ["Rabbit Hole Heigold Bourbon (синяя этикетка) — 30 мл", "Frapin V.S.O.P Cognac — 30 мл", "Демерара сироп — 10 мл", "Jerry Thomas Decanter Bitters — 2 дропса", "Peychaud's Bitters — 2 дропса (или креольские биттеры)", "Абсент — 20 мл, для ополаскивания бокала (не для питья)"],
      method: ["Охладить бокал Brandy Balloon колотым льдом.", "Первые 5 ингредиентов смешать в мешалке / бостонском тине.", "Опустошить бокал ото льда, добавить 5 кубиков льда и абсент, покрутить, чтобы коктейль «луше» (стал мутным).", "Наклонить и прокрутить бокал, чтобы абсент покрыл все стенки.", "Слить абсент.", "Тонко процедить коктейль в подготовленный бокал."],
      garnish: "Цедра лимона — протереть по краю бокала и выбросить",
      story: "Считается одним из первых коктейлей в истории — появился в Новом Орлеане в середине XIX века. Сначала готовился на коньяке, позже — на ржаном виски; в нашей версии сочетаем оба.",
      tags: ["бурбон", "коньяк", "демерара сироп", "ангостура", "peychaud's bitters", "абсент"]
    }
  },

  "new-york-minute": {
    en: {
      ingredients: ["80 ml of our signature bottle-aged New York Minute Mix, made up of:", "Codigo Reposado Tequila — 340 ml (per bottle of mix)", "Antica Formula — 255 ml (per bottle of mix)", "Maraschino liqueur — 42.5 ml (per bottle of mix)", "Demerara syrup — 42.5 ml (per bottle of mix)", "Jerry Thomas Decanter Bitters — 17 dashes (per bottle of mix)"],
      method: ["The mix is aged together in advance in a bottle (bottle aged).", "Stir 80 ml of the finished mix with ice (stir) and strain into a chilled coupette."],
      garnish: "Cherry",
      story: "The bar's signature bottle-aged cocktail — a tequila twist on the classic Manhattan. Time in the bottle lets the flavours marry gently together.",
      tags: ["tequila", "antica formula", "vermouth", "maraschino", "demerara syrup", "angostura"]
    },
    es: {
      ingredients: ["80 ml de nuestra mezcla envejecida en botella New York Minute Mix, compuesta por:", "Codigo Reposado Tequila — 340 ml (por botella de mezcla)", "Antica Formula — 255 ml (por botella de mezcla)", "Licor de marrasquino — 42,5 ml (por botella de mezcla)", "Sirope de demerara — 42,5 ml (por botella de mezcla)", "Jerry Thomas Decanter Bitters — 17 gotas (por botella de mezcla)"],
      method: ["La mezcla se envejece previamente junta en una botella (bottle aged).", "Remover 80 ml de la mezcla ya lista con hielo (stir) y colar en una coupette bien fría."],
      garnish: "Cereza",
      story: "El cóctel envejecido en botella insignia del bar: un giro con tequila sobre el clásico Manhattan. El tiempo en la botella permite que los sabores se integren con suavidad.",
      tags: ["tequila", "antica formula", "vermut", "marrasquino", "sirope de demerara", "angostura"]
    },
    it: {
      ingredients: ["80 ml della nostra miscela invecchiata in bottiglia New York Minute Mix, composta da:", "Codigo Reposado Tequila — 340 ml (per bottiglia di miscela)", "Antica Formula — 255 ml (per bottiglia di miscela)", "Liquore Maraschino — 42,5 ml (per bottiglia di miscela)", "Sciroppo di demerara — 42,5 ml (per bottiglia di miscela)", "Jerry Thomas Decanter Bitters — 17 gocce (per bottiglia di miscela)"],
      method: ["La miscela viene invecchiata insieme in anticipo in bottiglia (bottle aged).", "Mescolare 80 ml della miscela pronta con ghiaccio (stir) e filtrare in una coupette ben fredda."],
      garnish: "Ciliegia",
      story: "Il cocktail invecchiato in bottiglia signature del bar: una versione al tequila del classico Manhattan. Il tempo trascorso in bottiglia permette ai sapori di fondersi con dolcezza.",
      tags: ["tequila", "antica formula", "vermouth", "maraschino", "sciroppo di demerara", "angostura"]
    },
    de: {
      ingredients: ["80 ml unserer hausgemachten, flaschengereiften New York Minute Mix, bestehend aus:", "Codigo Reposado Tequila — 340 ml (pro Flasche Mix)", "Antica Formula — 255 ml (pro Flasche Mix)", "Maraschino-Likör — 42,5 ml (pro Flasche Mix)", "Demerara-Sirup — 42,5 ml (pro Flasche Mix)", "Jerry Thomas Decanter Bitters — 17 Spritzer (pro Flasche Mix)"],
      method: ["Die Mischung reift vorab gemeinsam in einer Flasche (bottle aged).", "80 ml der fertigen Mischung mit Eis verrühren (stir) und in eine gekühlte Coupette abseihen."],
      garnish: "Cocktailkirsche",
      story: "Der flaschengereifte Signature-Cocktail der Bar — eine Tequila-Interpretation des klassischen Manhattan. Die Zeit in der Flasche lässt die Aromen sanft zusammenwachsen.",
      tags: ["tequila", "antica formula", "wermut", "maraschino", "demerara-sirup", "angostura"]
    },
    ru: {
      ingredients: ["80 мл фирменной выдержанной смеси New York Minute Mix, в состав которой входят:", "Codigo Reposado Tequila — 340 мл (на бутылку смеси)", "Antica Formula — 255 мл (на бутылку смеси)", "Мараскино ликёр — 42.5 мл (на бутылку смеси)", "Демерара сироп — 42.5 мл (на бутылку смеси)", "Jerry Thomas Decanter Bitters — 17 дропсов (на бутылку смеси)"],
      method: ["Смесь заранее выдерживается вместе в бутылке (bottle aged).", "80 мл готовой смеси размешать со льдом (stir) и процедить в охлаждённый coupette."],
      garnish: "Вишня",
      story: "Фирменный bottle-aged коктейль бара — текиловый твист на классическом Manhattan. Время в бутылке позволяет вкусам мягко срастись вместе.",
      tags: ["текила", "антика формула", "вермут", "мараскино", "демерара сироп", "ангостура"]
    }
  },

  "old-cuban": {
    en: {
      ingredients: ["Havana 7yr — 20 ml", "Lime juice — 15 ml", "Sugar syrup — 10 ml", "Fresh mint — a generous handful", "Lanson Champagne (or PJ Brut, for an upgrade) — top up"],
      method: ["Shake (shake) everything except the champagne with ice.", "Fine strain into a chilled coupette.", "Top up with champagne."],
      garnish: "Dehydrated lime wheel and a small mint sprig",
      story: "Created by bartender Audrey Saunders at New York's Pegu Club in the early 2000s — an elegant marriage of the Mojito and the French 75.",
      tags: ["rum", "lime juice", "sugar syrup", "mint", "champagne", "prosecco"]
    },
    es: {
      ingredients: ["Havana 7yr — 20 ml", "Zumo de lima — 15 ml", "Sirope de azúcar — 10 ml", "Menta fresca — un puñado generoso", "Lanson Champagne (o PJ Brut, si se prefiere un upgrade) — hasta completar"],
      method: ["Agitar (shake) todo menos el champán con hielo.", "Colar fino en una coupette bien fría.", "Completar con champán."],
      garnish: "Rodaja de lima deshidratada y una pequeña ramita de menta",
      story: "Creado por la bartender Audrey Saunders en el Pegu Club de Nueva York a principios de la década de 2000: una elegante unión entre el Mojito y el French 75.",
      tags: ["ron", "zumo de lima", "sirope de azúcar", "menta", "champán", "prosecco"]
    },
    it: {
      ingredients: ["Havana 7yr — 20 ml", "Succo di lime — 15 ml", "Sciroppo di zucchero — 10 ml", "Menta fresca — una generosa manciata", "Lanson Champagne (o PJ Brut, per un upgrade) — colmare"],
      method: ["Shakerare (shake) tutto tranne lo champagne con ghiaccio.", "Filtrare finemente in una coupette ben fredda.", "Colmare con champagne."],
      garnish: "Rondella di lime disidratata e un piccolo rametto di menta",
      story: "Creato dalla bartender Audrey Saunders al Pegu Club di New York agli inizi degli anni 2000: un'elegante unione tra il Mojito e il French 75.",
      tags: ["rum", "succo di lime", "sciroppo di zucchero", "menta", "champagne", "prosecco"]
    },
    de: {
      ingredients: ["Havana 7yr — 20 ml", "Limettensaft — 15 ml", "Zuckersirup — 10 ml", "Frische Minze — eine großzügige Handvoll", "Lanson Champagne (oder PJ Brut als Upgrade) — zum Auffüllen"],
      method: ["Alles außer dem Champagner mit Eis schütteln (shake).", "Fein abseihen in eine gekühlte Coupette.", "Mit Champagner auffüllen."],
      garnish: "Dehydrierte Limettenscheibe und ein kleiner Minzzweig",
      story: "Kreiert von Barkeeperin Audrey Saunders im New Yorker Pegu Club Anfang der 2000er-Jahre — eine elegante Verbindung von Mojito und French 75.",
      tags: ["rum", "limettensaft", "zuckersirup", "minze", "champagner", "prosecco"]
    },
    ru: {
      ingredients: ["Havana 7yr — 20 мл", "Сок лайма — 15 мл", "Сахарный сироп — 10 мл", "Свежая мята — щедрая горсть", "Lanson Champagne (или PJ Brut, для апгрейда) — доверху"],
      method: ["Взбить (shake) всё, кроме шампанского, со льдом.", "Тонко процедить в охлаждённый coupette.", "Долить шампанским."],
      garnish: "Дегидрированный круг лайма и маленькая веточка мяты",
      story: "Создан бартендером Одри Сондерс в нью-йоркском Pegu Club в начале 2000-х — элегантное сочетание Mojito и French 75.",
      tags: ["ром", "сок лайма", "сахарный сироп", "мята", "шампанское", "просекко"]
    }
  },

  "japanese-rose": {
    en: {
      ingredients: ["Toki Japanese Whiskey — 50 ml", "Lemon juice — 20 ml", "Pomegranate grenadine — 17.5 ml", "Absinthe — 2.5 ml"],
      method: ["Shake hard (shake hard) and fine strain into a chilled coupette."],
      garnish: "Lemon twist",
      story: "The bar's signature sour: Japanese whisky, pomegranate and a whisper of absinthe combine into a refined, almost floral profile.",
      tags: ["japanese whisky", "lemon juice", "grenadine", "absinthe"]
    },
    es: {
      ingredients: ["Toki Japanese Whiskey — 50 ml", "Zumo de limón — 20 ml", "Granadina de granada — 17,5 ml", "Absenta — 2,5 ml"],
      method: ["Agitar con fuerza (shake hard) y colar fino en una coupette bien fría."],
      garnish: "Twist de limón",
      story: "El sour insignia del bar: el whisky japonés, la granada y un ligero toque de absenta se combinan en un perfil refinado, casi floral.",
      tags: ["whisky japonés", "zumo de limón", "granadina", "absenta"]
    },
    it: {
      ingredients: ["Toki Japanese Whiskey — 50 ml", "Succo di limone — 20 ml", "Granatina di melagrana — 17,5 ml", "Assenzio — 2,5 ml"],
      method: ["Shakerare con energia (shake hard) e filtrare finemente in una coupette ben fredda."],
      garnish: "Twist di limone",
      story: "Il sour signature del bar: whisky giapponese, melagrana e un soffio di assenzio si uniscono in un profilo raffinato, quasi floreale.",
      tags: ["whisky giapponese", "succo di limone", "granatina", "assenzio"]
    },
    de: {
      ingredients: ["Toki Japanese Whiskey — 50 ml", "Zitronensaft — 20 ml", "Granatapfel-Grenadine — 17,5 ml", "Absinth — 2,5 ml"],
      method: ["Kräftig schütteln (shake hard) und fein abseihen in eine gekühlte Coupette."],
      garnish: "Zitronentwist",
      story: "Der Signature-Sour der Bar: japanischer Whisky, Granatapfel und ein Hauch Absinth ergeben ein elegantes, fast blumiges Profil.",
      tags: ["japanischer whisky", "zitronensaft", "grenadine", "absinth"]
    },
    ru: {
      ingredients: ["Toki Japanese Whiskey — 50 мл", "Лимонный сок — 20 мл", "Гранатовый гренадин — 17.5 мл", "Абсент — 2.5 мл"],
      method: ["Взбить сильно (shake hard) и тонко процедить в охлаждённый coupette."],
      garnish: "Твист лимона",
      story: "Фирменный сауэр бара: японский виски, гранат и лёгкое дыхание абсента создают изысканный, почти цветочный профиль.",
      tags: ["японский виски", "лимонный сок", "гренадин", "абсент"]
    }
  },

  "last-word": {
    en: {
      ingredients: ["Fords Gin — 20 ml", "Lemon juice — 20 ml", "Maraschino liqueur — 20 ml", "Green Chartreuse — 20 ml", "Sugar syrup (gomme) — 2.5 ml"],
      method: ["Shake hard (shake hard) and fine strain into a chilled coupette."],
      garnish: "Cherry",
      story: "A Prohibition-era cocktail, first mentioned at the Detroit Athletic Club in 1916. Forgotten for decades, until bartender Murray Stenson 'rediscovered' it in Seattle in 2004.",
      tags: ["gin", "lemon juice", "maraschino", "green chartreuse", "chartreuse", "sugar syrup"]
    },
    es: {
      ingredients: ["Fords Gin — 20 ml", "Zumo de limón — 20 ml", "Licor de marrasquino — 20 ml", "Green Chartreuse — 20 ml", "Sirope de azúcar (gomme) — 2,5 ml"],
      method: ["Agitar con fuerza (shake hard) y colar fino en una coupette bien fría."],
      garnish: "Cereza",
      story: "Un cóctel de la época de la Ley Seca, mencionado por primera vez en el Detroit Athletic Club en 1916. Olvidado durante décadas, hasta que el bartender Murray Stenson lo «redescubrió» en Seattle en 2004.",
      tags: ["ginebra", "zumo de limón", "marrasquino", "green chartreuse", "chartreuse", "sirope de azúcar"]
    },
    it: {
      ingredients: ["Fords Gin — 20 ml", "Succo di limone — 20 ml", "Liquore Maraschino — 20 ml", "Green Chartreuse — 20 ml", "Sciroppo di zucchero (gomme) — 2,5 ml"],
      method: ["Shakerare con energia (shake hard) e filtrare finemente in una coupette ben fredda."],
      garnish: "Ciliegia",
      story: "Un cocktail dell'epoca del Proibizionismo, menzionato per la prima volta al Detroit Athletic Club nel 1916. Dimenticato per decenni, finché il bartender Murray Stenson non lo «riscoprì» a Seattle nel 2004.",
      tags: ["gin", "succo di limone", "maraschino", "green chartreuse", "chartreuse", "sciroppo di zucchero"]
    },
    de: {
      ingredients: ["Fords Gin — 20 ml", "Zitronensaft — 20 ml", "Maraschino-Likör — 20 ml", "Green Chartreuse — 20 ml", "Zuckersirup (gomme) — 2,5 ml"],
      method: ["Kräftig schütteln (shake hard) und fein abseihen in eine gekühlte Coupette."],
      garnish: "Cocktailkirsche",
      story: "Ein Cocktail aus der Zeit der Prohibition, erstmals 1916 im Detroit Athletic Club erwähnt. Jahrzehntelang vergessen, bis Barkeeper Murray Stenson ihn 2004 in Seattle „wiederentdeckte“.",
      tags: ["gin", "zitronensaft", "maraschino", "green chartreuse", "chartreuse", "zuckersirup"]
    },
    ru: {
      ingredients: ["Fords Gin — 20 мл", "Лимонный сок — 20 мл", "Мараскино ликёр — 20 мл", "Green Chartreuse — 20 мл", "Сахарный сироп (gomme) — 2.5 мл"],
      method: ["Взбить сильно (shake hard) и тонко процедить в охлаждённый coupette."],
      garnish: "Вишня",
      story: "Коктейль времён «сухого закона», впервые упомянутый в Detroit Athletic Club в 1916 году. Был забыт на десятилетия, пока бартендер Мюррей Стенсон не «открыл» его заново в Сиэтле в 2004-м.",
      tags: ["джин", "лимонный сок", "мараскино", "green chartreuse", "шартрез", "сахарный сироп"]
    }
  },

  "lemon-flip": {
    en: {
      ingredients: ["Sipsmith's Lemon Drizzle Gin — 20 ml", "Limoncello — 40 ml", "Lemon juice — 10 ml", "Sugar syrup — 15 ml", "Whole egg, beaten — 40 ml"],
      method: ["Add the first 4 ingredients to one half of the shaker.", "In the other half, crack the egg, beat it with a fork or whisk, and measure out exactly 40 ml.", "Combine both halves, add plenty of ice and top with a scoop of crushed ice.", "Seal the shaker tightly and shake as hard as possible.", "Fine strain into a chilled tasting glass."],
      garnish: "Lemon zest",
      story: "The 'Flip' is an old cocktail category built on a whole egg, giving it a velvety, almost dessert-like texture. This version is lemony, fresh and frothy.",
      tags: ["gin", "limoncello", "lemon juice", "sugar syrup", "egg"]
    },
    es: {
      ingredients: ["Sipsmith's Lemon Drizzle Gin — 20 ml", "Limoncello — 40 ml", "Zumo de limón — 10 ml", "Sirope de azúcar — 15 ml", "Huevo entero, batido — 40 ml"],
      method: ["Añadir los primeros 4 ingredientes en una mitad de la coctelera.", "En la otra mitad, romper el huevo, batirlo con un tenedor o varillas y medir exactamente 40 ml.", "Juntar ambas mitades, añadir abundante hielo y cubrir con una cucharada de hielo picado.", "Cerrar bien la coctelera y agitar con toda la fuerza posible.", "Colar fino en una copa de degustación bien fría."],
      garnish: "Piel de limón",
      story: "El «Flip» es una categoría antigua de cócteles elaborados con huevo entero, que aporta una textura aterciopelada, casi de postre. Esta versión es cítrica, fresca y espumosa.",
      tags: ["ginebra", "limoncello", "zumo de limón", "sirope de azúcar", "huevo"]
    },
    it: {
      ingredients: ["Sipsmith's Lemon Drizzle Gin — 20 ml", "Limoncello — 40 ml", "Succo di limone — 10 ml", "Sciroppo di zucchero — 15 ml", "Uovo intero, sbattuto — 40 ml"],
      method: ["Versare i primi 4 ingredienti in una metà dello shaker.", "Nell'altra metà, rompere l'uovo, sbatterlo con una forchetta o una frusta e misurarne esattamente 40 ml.", "Unire le due metà, aggiungere abbondante ghiaccio e coprire con una paletta di ghiaccio tritato.", "Chiudere bene lo shaker e shakerare con tutta la forza possibile.", "Filtrare finemente in un bicchiere da degustazione ben freddo."],
      garnish: "Scorza di limone",
      story: "Il «Flip» è un'antica categoria di cocktail a base di uovo intero, che dona una consistenza vellutata, quasi da dessert. Questa versione è agrumata, fresca e spumosa.",
      tags: ["gin", "limoncello", "succo di limone", "sciroppo di zucchero", "uovo"]
    },
    de: {
      ingredients: ["Sipsmith's Lemon Drizzle Gin — 20 ml", "Limoncello — 40 ml", "Zitronensaft — 10 ml", "Zuckersirup — 15 ml", "Ganzes Ei, verquirlt — 40 ml"],
      method: ["Die ersten 4 Zutaten in eine Shakerhälfte geben.", "In der anderen Hälfte das Ei aufschlagen, mit Gabel oder Schneebesen verquirlen und genau 40 ml abmessen.", "Beide Hälften vereinen, reichlich Eis zugeben und mit einer Schaufel Crushed Ice bedecken.", "Den Shaker fest verschließen und so kräftig wie möglich schütteln.", "Fein abseihen in ein gekühltes Degustationsglas."],
      garnish: "Zitronenzeste",
      story: "Der „Flip“ ist eine altehrwürdige Cocktailkategorie mit ganzem Ei, die für eine samtige, fast dessertartige Textur sorgt. Diese Version ist zitronig, frisch und schaumig.",
      tags: ["gin", "limoncello", "zitronensaft", "zuckersirup", "ei"]
    },
    ru: {
      ingredients: ["Sipsmith's Lemon Drizzle Gin — 20 мл", "Лимончелло — 40 мл", "Лимонный сок — 10 мл", "Сахарный сироп — 15 мл", "Целое яйцо, взбитое — 40 мл"],
      method: ["Первые 4 ингредиента добавить в одну половину шейкера.", "В другой половине разбить яйцо, взбить вилкой/венчиком и отмерить ровно 40 мл.", "Соединить обе половины, добавить много льда и сверху — совок колотого льда.", "Плотно закрыть шейкер и трясти как можно сильнее.", "Тонко процедить в охлаждённый бокал для дегустаций."],
      garnish: "Цедра лимона",
      story: "«Флип» — старинная категория коктейлей с целым яйцом, которое даёт бархатистую, почти десертную текстуру. Эта версия — лимонная, свежая и пенная.",
      tags: ["джин", "лимончелло", "лимонный сок", "сахарный сироп", "яйцо"]
    }
  },

  "novara": {
    en: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Campari — 15 ml", "Passion fruit syrup — 20 ml", "Lime juice — 20 ml", "Egg white — 2/3 of a white"],
      method: ["Dry shake (dry shake) without ice.", "Add ice and shake hard (shake hard).", "Fine strain into a chilled coupette."],
      garnish: "Dehydrated lime wheel",
      story: "The bar's signature sour: Campari's bitterness is balanced by tropical passion fruit and the velvety foam of egg white.",
      tags: ["gin", "campari", "campari", "passion fruit", "lime juice", "egg white"]
    },
    es: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Campari — 15 ml", "Sirope de maracuyá — 20 ml", "Zumo de lima — 20 ml", "Clara de huevo — 2/3 de una clara"],
      method: ["Dry shake (dry shake) sin hielo.", "Añadir hielo y agitar con fuerza (shake hard).", "Colar fino en una coupette bien fría."],
      garnish: "Rodaja de lima deshidratada",
      story: "El sour insignia del bar: el amargor del Campari se equilibra con el maracuyá tropical y la espuma aterciopelada de la clara de huevo.",
      tags: ["ginebra", "campari", "campari", "maracuyá", "zumo de lima", "clara de huevo"]
    },
    it: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Campari — 15 ml", "Sciroppo di frutto della passione — 20 ml", "Succo di lime — 20 ml", "Albume d'uovo — 2/3 di albume"],
      method: ["Dry shake (dry shake) senza ghiaccio.", "Aggiungere il ghiaccio e shakerare con energia (shake hard).", "Filtrare finemente in una coupette ben fredda."],
      garnish: "Rondella di lime disidratata",
      story: "Il sour signature del bar: l'amarezza del Campari è bilanciata dal frutto della passione tropicale e dalla schiuma vellutata dell'albume.",
      tags: ["gin", "campari", "campari", "frutto della passione", "succo di lime", "albume d'uovo"]
    },
    de: {
      ingredients: ["Sipsmith London Dry Gin — 35 ml", "Campari — 15 ml", "Maracuja-Sirup — 20 ml", "Limettensaft — 20 ml", "Eiweiß — 2/3 eines Eiweißes"],
      method: ["Trocken schütteln (dry shake) ohne Eis.", "Eis hinzufügen und kräftig schütteln (shake hard).", "Fein abseihen in eine gekühlte Coupette."],
      garnish: "Dehydrierte Limettenscheibe",
      story: "Der Signature-Sour der Bar: die Bitterkeit des Campari wird durch tropische Maracuja und den samtigen Eiweißschaum ausbalanciert.",
      tags: ["gin", "campari", "campari", "maracuja", "limettensaft", "eiweiß"]
    },
    ru: {
      ingredients: ["Sipsmith London Dry Gin — 35 мл", "Campari — 15 мл", "Сироп маракуйи — 20 мл", "Сок лайма — 20 мл", "Яичный белок — 2/3 белка"],
      method: ["Сухой шейк (dry shake) без льда.", "Добавить лёд и взбить сильно (shake hard).", "Тонко процедить в охлаждённый coupette."],
      garnish: "Дегидрированный круг лайма",
      story: "Фирменный сауэр (sour) бара: горечь Campari уравновешена тропической маракуйей и бархатистой пеной яичного белка.",
      tags: ["джин", "campari", "кампари", "маракуйя", "сок лайма", "яичный белок"]
    }
  },

  "lizzies-daiquiri-no2": {
    en: {
      ingredients: ["Havana 7yr — 35 ml", "Lime juice — 20 ml", "Dubonnet — 15 ml", "Maraschino liqueur — 5 ml", "Sugar syrup 2:1 — 2.5 ml"],
      method: ["Shake hard (shake hard) and fine strain into a chilled coupette."],
      garnish: "Washed cherry",
      story: "Our signature take on the classic Daiquiri with an addition of Dubonnet — herbal depth layered over the familiar rum tartness.",
      tags: ["rum", "lime juice", "dubonnet", "maraschino", "sugar syrup"]
    },
    es: {
      ingredients: ["Havana 7yr — 35 ml", "Zumo de lima — 20 ml", "Dubonnet — 15 ml", "Licor de marrasquino — 5 ml", "Sirope de azúcar 2:1 — 2,5 ml"],
      method: ["Agitar con fuerza (shake hard) y colar fino en una coupette bien fría."],
      garnish: "Cereza lavada",
      story: "Nuestra versión de autor del Daiquiri clásico con un toque de Dubonnet: una profundidad herbácea que se suma a la habitual acidez del ron.",
      tags: ["ron", "zumo de lima", "dubonnet", "marrasquino", "sirope de azúcar"]
    },
    it: {
      ingredients: ["Havana 7yr — 35 ml", "Succo di lime — 20 ml", "Dubonnet — 15 ml", "Liquore Maraschino — 5 ml", "Sciroppo di zucchero 2:1 — 2,5 ml"],
      method: ["Shakerare con energia (shake hard) e filtrare finemente in una coupette ben fredda."],
      garnish: "Ciliegia sciacquata",
      story: "La nostra versione d'autore del classico Daiquiri con l'aggiunta di Dubonnet: una profondità erbacea che si posa sulla consueta acidità del rum.",
      tags: ["rum", "succo di lime", "dubonnet", "maraschino", "sciroppo di zucchero"]
    },
    de: {
      ingredients: ["Havana 7yr — 35 ml", "Limettensaft — 20 ml", "Dubonnet — 15 ml", "Maraschino-Likör — 5 ml", "Zuckersirup 2:1 — 2,5 ml"],
      method: ["Kräftig schütteln (shake hard) und fein abseihen in eine gekühlte Coupette."],
      garnish: "Gewaschene Cocktailkirsche",
      story: "Unsere Signature-Version des klassischen Daiquiri mit einer Zugabe von Dubonnet — kräuterige Tiefe über der gewohnten Rum-Säure.",
      tags: ["rum", "limettensaft", "dubonnet", "maraschino", "zuckersirup"]
    },
    ru: {
      ingredients: ["Havana 7yr — 35 мл", "Сок лайма — 20 мл", "Dubonnet — 15 мл", "Мараскино ликёр — 5 мл", "Сахарный сироп 2:1 — 2.5 мл"],
      method: ["Взбить сильно (shake hard) и тонко процедить в охлаждённый coupette."],
      garnish: "Вымытая вишня",
      story: "Авторская версия классического Daiquiri с добавлением Dubonnet — травянистая глубина поверх привычной ромовой кислинки.",
      tags: ["ром", "сок лайма", "dubonnet", "мараскино", "сахарный сироп"]
    }
  },

  "lychee-76": {
    en: {
      ingredients: ["Absolut Citron — 15 ml", "Lemon juice — 15 ml", "Lychee liqueur — 15 ml", "Sugar syrup 2:1 — 5 ml", "Lanson Champagne (or PJ Brut, for an upgrade) — top up"],
      method: ["Chill a flute with crushed ice.", "Shake all ingredients except the champagne with ice.", "Fine strain into a chilled flute and top up with champagne."],
      garnish: "Lemon twist",
      story: "A fruity spin on the French 75: lychee brings an exotic floral sweetness to the classic champagne sour.",
      tags: ["vodka", "lemon juice", "lychee liqueur", "sugar syrup", "champagne", "prosecco"]
    },
    es: {
      ingredients: ["Absolut Citron — 15 ml", "Zumo de limón — 15 ml", "Licor de lichi — 15 ml", "Sirope de azúcar 2:1 — 5 ml", "Lanson Champagne (o PJ Brut, si se prefiere un upgrade) — hasta completar"],
      method: ["Enfriar una flauta con hielo picado.", "Agitar todos los ingredientes, excepto el champán, con hielo.", "Colar fino en la flauta bien fría y completar con champán."],
      garnish: "Twist de limón",
      story: "Una interpretación afrutada del French 75: el lichi aporta una dulzura floral y exótica al clásico sour de champán.",
      tags: ["vodka", "zumo de limón", "licor de lichi", "sirope de azúcar", "champán", "prosecco"]
    },
    it: {
      ingredients: ["Absolut Citron — 15 ml", "Succo di limone — 15 ml", "Liquore al litchi — 15 ml", "Sciroppo di zucchero 2:1 — 5 ml", "Lanson Champagne (o PJ Brut, per un upgrade) — colmare"],
      method: ["Raffreddare un flûte con ghiaccio tritato.", "Shakerare tutti gli ingredienti tranne lo champagne con ghiaccio.", "Filtrare finemente nel flûte ben freddo e colmare con champagne."],
      garnish: "Twist di limone",
      story: "Un'interpretazione fruttata del French 75: il litchi aggiunge una dolcezza floreale ed esotica al classico sour di champagne.",
      tags: ["vodka", "succo di limone", "liquore al litchi", "sciroppo di zucchero", "champagne", "prosecco"]
    },
    de: {
      ingredients: ["Absolut Citron — 15 ml", "Zitronensaft — 15 ml", "Litschi-Likör — 15 ml", "Zuckersirup 2:1 — 5 ml", "Lanson Champagne (oder PJ Brut als Upgrade) — zum Auffüllen"],
      method: ["Eine Flöte mit Crushed Ice kühlen.", "Alle Zutaten außer dem Champagner mit Eis schütteln.", "Fein abseihen in die gekühlte Flöte und mit Champagner auffüllen."],
      garnish: "Zitronentwist",
      story: "Eine fruchtige Interpretation des French 75: Litschi verleiht dem klassischen Champagner-Sour eine exotische, blumige Süße.",
      tags: ["wodka", "zitronensaft", "litschi-likör", "zuckersirup", "champagner", "prosecco"]
    },
    ru: {
      ingredients: ["Absolut Citron — 15 мл", "Лимонный сок — 15 мл", "Ликёр личи — 15 мл", "Сахарный сироп 2:1 — 5 мл", "Lanson Champagne (или PJ Brut, для апгрейда) — доверху"],
      method: ["Охладить флюте колотым льдом.", "Взбить все ингредиенты, кроме шампанского, со льдом.", "Тонко процедить в охлаждённый флюте и долить шампанским."],
      garnish: "Твист лимона",
      story: "Фруктовая интерпретация French 75: личи добавляет экзотической цветочной сладости к классическому шампанскому сауэру.",
      tags: ["водка", "лимонный сок", "ликёр личи", "сахарный сироп", "шампанское", "просекко"]
    }
  }
};
