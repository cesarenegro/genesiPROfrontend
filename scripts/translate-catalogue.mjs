import fs from 'fs';
import path from 'path';

const locales = ['it', 'en', 'ru', 'zh', 'id', 'fr', 'de'];

// 1. CATEGORIES TRANSLATION MAP
const categoriesTranslations = {
  'wardrobes': {
    en: 'Wardrobes',
    it: 'Armadi',
    fr: 'Armoires',
    de: 'Kleiderschränke',
    ru: 'Шкафы',
    zh: '衣柜',
    id: 'Lemari Pakaian'
  },
  'desks': {
    en: 'Desks',
    it: 'Scrivanie',
    fr: 'Bureaux',
    de: 'Schreibtische',
    ru: 'Письменные столы',
    zh: '书桌',
    id: 'Meja Tulis'
  },
  'desk-minibar': {
    en: 'Desk + Minibar',
    it: 'Scrivania + Minibar',
    fr: 'Bureau + Minibar',
    de: 'Schreibtisch + Minibar',
    ru: 'Письменный стол + Мини-бар',
    zh: '书桌 + 迷你吧',
    id: 'Meja Tulis + Minibar'
  },
  'minibars': {
    en: 'Minibars',
    it: 'Minibar',
    fr: 'Minibars',
    de: 'Minibars',
    ru: 'Мини-бары',
    zh: '迷你吧',
    id: 'Minibar'
  },
  'shelving': {
    en: 'Shelving',
    it: 'Librerie e Scaffali',
    fr: 'Étagères',
    de: 'Regale',
    ru: 'Стеллажи',
    zh: '搁架',
    id: 'Rak'
  },
  'media-walls': {
    en: 'Media Walls',
    it: 'Pareti Attrezzate',
    fr: 'Murs Média',
    de: 'Medienwände',
    ru: 'Медиа-стены',
    zh: '电视背景墙',
    id: 'Dinding Media'
  },
  'sofas': {
    en: 'Sofas',
    it: 'Divani',
    fr: 'Canapés',
    de: 'Sofas',
    ru: 'Диваны',
    zh: '沙发',
    id: 'Sofa'
  },
  'armchairs': {
    en: 'Armchairs',
    it: 'Poltrone',
    fr: 'Fauteuils',
    de: 'Sessel',
    ru: 'Кресла',
    zh: '扶手椅',
    id: 'Kursi Berlengan'
  },
  'occasional-tables-consoles': {
    en: 'Occasional Tables + Consoles',
    it: 'Tavolini e Console',
    fr: "Tables d'appoint et Consoles",
    de: 'Beistelltische + Konsolen',
    ru: 'Приставные столы и консоли',
    zh: '茶几与玄关桌',
    id: 'Meja Samping + Meja Konsol'
  },
  'dining-tables': {
    en: 'Dining Tables',
    it: 'Tavoli da Pranzo',
    fr: 'Tables de Salle à Manger',
    de: 'Esstische',
    ru: 'Обеденные столы',
    zh: '餐桌',
    id: 'Meja Makan'
  },
  'dining-chairs': {
    en: 'Dining Chairs',
    it: 'Sedie da Pranzo',
    fr: 'Chaises de Salle à Manger',
    de: 'Esszimmerstühle',
    ru: 'Обеденные стулья',
    zh: '餐椅',
    id: 'Kursi Makan'
  },
  'sideboards': {
    en: 'Sideboards',
    it: 'Credenze',
    fr: 'Buffets',
    de: 'Sideboards',
    ru: 'Комоды и буфеты',
    zh: '餐边柜',
    id: 'Kredensa'
  },
  'vitrines': {
    en: 'Vitrines',
    it: 'Vetrine',
    fr: 'Vitrines',
    de: 'Vitrinen',
    ru: 'Витрины',
    zh: '展示柜',
    id: 'Lemari Pajangan'
  },
  'bookcases': {
    en: 'Bookcases',
    it: 'Librerie',
    fr: 'Bibliothèques',
    de: 'Bücherregale',
    ru: 'Книжные шкафы',
    zh: '书柜',
    id: 'Rak Buku'
  },
  'beds': {
    en: 'Beds',
    it: 'Letti',
    fr: 'Lits',
    de: 'Betten',
    ru: 'Кровати',
    zh: '床',
    id: 'Tempat Tidur'
  },
  'nightstands': {
    en: 'Nightstands',
    it: 'Comodini',
    fr: 'Tables de Nuit',
    de: 'Nachttische',
    ru: 'Прикроватные тумбочки',
    zh: '床头柜',
    id: 'Nakas'
  },
  'dressers-chests': {
    en: 'Dressers + Chests',
    it: 'Comò e Cassettiere',
    fr: 'Commodes',
    de: 'Kommoden',
    ru: 'Комоды',
    zh: '梳妆斗柜',
    id: 'Lemari Laci'
  },
  'vanities': {
    en: 'Vanities',
    it: 'Mobili Trucco',
    fr: 'Coiffeuses',
    de: 'Schminktische',
    ru: 'Туалетные столики',
    zh: '梳妆台',
    id: 'Meja Rias'
  }
};

// 2. PRODUCT TITLE TRANSLATION FUNCTION
// Nomi propri invariant: Deck, Calm, Axis, Mona
// Codici modello invariant: WRD-001, etc.
function translateProductTitle(enTitle, sku) {
  const properNames = ['Deck', 'Calm', 'Axis', 'Mona'];
  for (const name of properNames) {
    if (enTitle.startsWith(name)) {
      if (enTitle.includes('Sofa')) {
        return {
          en: `${name} Sofa`,
          it: `Divano ${name}`,
          fr: `Canapé ${name}`,
          de: `Sofa ${name}`,
          ru: `Диван ${name}`,
          zh: `${name} 沙发`,
          id: `Sofa ${name}`
        };
      }
      if (enTitle.includes('Armchair')) {
        return {
          en: `${name} Armchair`,
          it: `Poltrona ${name}`,
          fr: `Fauteuil ${name}`,
          de: `Sessel ${name}`,
          ru: `Кресло ${name}`,
          zh: `${name} 扶手椅`,
          id: `Kursi santai ${name}`
        };
      }
    }
  }

  // Model-code based titles
  const cleanSku = sku || enTitle.split(' ').pop();
  if (enTitle.startsWith('Wardrobe')) {
    return {
      en: `Wardrobe ${cleanSku}`,
      it: `Armadio ${cleanSku}`,
      fr: `Armoire ${cleanSku}`,
      de: `Kleiderschrank ${cleanSku}`,
      ru: `Шкаф ${cleanSku}`,
      zh: `${cleanSku} 衣柜`,
      id: `Lemari pakaian ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Desk / Minibar')) {
    return {
      en: `Desk / Minibar ${cleanSku}`,
      it: `Scrivania / Minibar ${cleanSku}`,
      fr: `Bureau / Minibar ${cleanSku}`,
      de: `Schreibtisch / Minibar ${cleanSku}`,
      ru: `Письменный стол / Мини-бар ${cleanSku}`,
      zh: `${cleanSku} 办公桌 / 迷你吧`,
      id: `Meja / Minibar ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Desk')) {
    return {
      en: `Desk ${cleanSku}`,
      it: `Scrivania ${cleanSku}`,
      fr: `Bureau ${cleanSku}`,
      de: `Schreibtisch ${cleanSku}`,
      ru: `Письменный стол ${cleanSku}`,
      zh: `${cleanSku} 办公桌`,
      id: `Meja ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Minibar')) {
    return {
      en: `Minibar ${cleanSku}`,
      it: `Minibar ${cleanSku}`,
      fr: `Minibar ${cleanSku}`,
      de: `Minibar ${cleanSku}`,
      ru: `Мини-бар ${cleanSku}`,
      zh: `${cleanSku} 迷你吧`,
      id: `Minibar ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Shelving Unit')) {
    return {
      en: `Shelving Unit ${cleanSku}`,
      it: `Libreria a giorno ${cleanSku}`,
      fr: `Étagère ${cleanSku}`,
      de: `Regal ${cleanSku}`,
      ru: `Стеллаж ${cleanSku}`,
      zh: `${cleanSku} 搁架单元`,
      id: `Unit Rak ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Media Wall')) {
    return {
      en: `Media Wall ${cleanSku}`,
      it: `Parete Attrezzata ${cleanSku}`,
      fr: `Mur Média ${cleanSku}`,
      de: `Medienwand ${cleanSku}`,
      ru: `Медиа-стена ${cleanSku}`,
      zh: `${cleanSku} 电视墙`,
      id: `Dinding Media ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Sofa')) {
    return {
      en: `Sofa ${cleanSku}`,
      it: `Divano ${cleanSku}`,
      fr: `Canapé ${cleanSku}`,
      de: `Sofa ${cleanSku}`,
      ru: `Диван ${cleanSku}`,
      zh: `${cleanSku} 沙发`,
      id: `Sofa ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Armchair')) {
    return {
      en: `Armchair ${cleanSku}`,
      it: `Poltrona ${cleanSku}`,
      fr: `Fauteuil ${cleanSku}`,
      de: `Sessel ${cleanSku}`,
      ru: `Кресло ${cleanSku}`,
      zh: `${cleanSku} 扶手椅`,
      id: `Kursi santai ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Occasional Table / Console')) {
    return {
      en: `Occasional Table / Console ${cleanSku}`,
      it: `Tavolino / Console ${cleanSku}`,
      fr: `Table d'appoint / Console ${cleanSku}`,
      de: `Beistelltisch / Konsole ${cleanSku}`,
      ru: `Приставной стол / Консоль ${cleanSku}`,
      zh: `${cleanSku} 茶几 / 玄关桌`,
      id: `Meja Samping / Konsol ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Dining Table')) {
    return {
      en: `Dining Table ${cleanSku}`,
      it: `Tavolo da Pranzo ${cleanSku}`,
      fr: `Table de Salle à Manger ${cleanSku}`,
      de: `Esstisch ${cleanSku}`,
      ru: `Обеденный стол ${cleanSku}`,
      zh: `${cleanSku} 餐桌`,
      id: `Meja Makan ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Dining Chair')) {
    return {
      en: `Dining Chair ${cleanSku}`,
      it: `Sedia da Pranzo ${cleanSku}`,
      fr: `Chaise de Salle à Manger ${cleanSku}`,
      de: `Esszimmerstuhl ${cleanSku}`,
      ru: `Обеденный стул ${cleanSku}`,
      zh: `${cleanSku} 餐椅`,
      id: `Kursi Makan ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Sideboard')) {
    return {
      en: `Sideboard ${cleanSku}`,
      it: `Credenza ${cleanSku}`,
      fr: `Buffet ${cleanSku}`,
      de: `Sideboard ${cleanSku}`,
      ru: `Комод ${cleanSku}`,
      zh: `${cleanSku} 餐边柜`,
      id: `Kredensa ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Vitrine')) {
    return {
      en: `Vitrine ${cleanSku}`,
      it: `Vetrina ${cleanSku}`,
      fr: `Vitrine ${cleanSku}`,
      de: `Vitrine ${cleanSku}`,
      ru: `Витрина ${cleanSku}`,
      zh: `${cleanSku} 展柜`,
      id: `Lemari Pajangan ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Bookcase')) {
    return {
      en: `Bookcase ${cleanSku}`,
      it: `Libreria ${cleanSku}`,
      fr: `Bibliothèque ${cleanSku}`,
      de: `Bücherregal ${cleanSku}`,
      ru: `Книжный шкаф ${cleanSku}`,
      zh: `${cleanSku} 书柜`,
      id: `Rak Buku ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Bed')) {
    return {
      en: `Bed ${cleanSku}`,
      it: `Letto ${cleanSku}`,
      fr: `Lit ${cleanSku}`,
      de: `Bett ${cleanSku}`,
      ru: `Кровать ${cleanSku}`,
      zh: `${cleanSku} 床`,
      id: `Tempat Tidur ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Nightstand')) {
    return {
      en: `Nightstand ${cleanSku}`,
      it: `Comodino ${cleanSku}`,
      fr: `Table de Nuit ${cleanSku}`,
      de: `Nachttisch ${cleanSku}`,
      ru: `Прикроватная тумбочка ${cleanSku}`,
      zh: `${cleanSku} 床头柜`,
      id: `Nakas ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Dresser / Chest')) {
    return {
      en: `Dresser / Chest ${cleanSku}`,
      it: `Comò / Cassettiera ${cleanSku}`,
      fr: `Commode ${cleanSku}`,
      de: `Kommode ${cleanSku}`,
      ru: `Комод ${cleanSku}`,
      zh: `${cleanSku} 梳妆斗柜`,
      id: `Lemari Laci ${cleanSku}`
    };
  }
  if (enTitle.startsWith('Vanity')) {
    return {
      en: `Vanity ${cleanSku}`,
      it: `Mobile Trucco ${cleanSku}`,
      fr: `Coiffeuse ${cleanSku}`,
      de: `Schminktisch ${cleanSku}`,
      ru: `Туалетный столик ${cleanSku}`,
      zh: `${cleanSku} 梳妆台`,
      id: `Meja Rias ${cleanSku}`
    };
  }

  // Fallback
  return {
    en: enTitle,
    it: enTitle,
    fr: enTitle,
    de: enTitle,
    ru: enTitle,
    zh: enTitle,
    id: enTitle
  };
}

// 3. DIMENSIONS TRANSLATION FUNCTION
// Only translate words, keep numbers and units (cm, x) intact
function translateDimensions(enDim) {
  if (!enDim) return { en: '', it: '', fr: '', de: '', ru: '', zh: '', id: '' };

  const res = {
    en: enDim,
    it: enDim,
    fr: enDim,
    de: enDim,
    ru: enDim,
    zh: enDim,
    id: enDim
  };

  // Replace words
  if (enDim.includes('(desk 75)')) {
    res.it = res.it.replace('(desk 75)', '(scrivania 75)');
    res.fr = res.fr.replace('(desk 75)', '(bureau 75)');
    res.de = res.de.replace('(desk 75)', '(Schreibtisch 75)');
    res.ru = res.ru.replace('(desk 75)', '(письменный стол 75)');
    res.zh = res.zh.replace('(desk 75)', '(书桌 75)');
    res.id = res.id.replace('(desk 75)', '(meja 75)');
  }

  if (enDim.includes('(mattress 180 × 200)')) {
    res.it = res.it.replace('(mattress 180 × 200)', '(materasso 180 × 200)');
    res.fr = res.fr.replace('(mattress 180 × 200)', '(matelas 180 × 200)');
    res.de = res.de.replace('(mattress 180 × 200)', '(Matratze 180 × 200)');
    res.ru = res.ru.replace('(mattress 180 × 200)', '(матрас 180 × 200)');
    res.zh = res.zh.replace('(mattress 180 × 200)', '(床垫 180 × 200)');
    res.id = res.id.replace('(mattress 180 × 200)', '(kasur 180 × 200)');
  }

  if (enDim.includes('(top 75)')) {
    res.it = res.it.replace('(top 75)', '(piano 75)');
    res.fr = res.fr.replace('(top 75)', '(plateau 75)');
    res.de = res.de.replace('(top 75)', '(Platte 75)');
    res.ru = res.ru.replace('(top 75)', '(столешница 75)');
    res.zh = res.zh.replace('(top 75)', '(台面 75)');
    res.id = res.id.replace('(top 75)', '(permukaan meja 75)');
  }

  // Seat Height SH
  if (enDim.includes('; SH ')) {
    res.it = res.it.replace('; SH ', '; H seduta ');
    res.fr = res.fr.replace('; SH ', '; H assise ');
    res.de = res.de.replace('; SH ', '; Sitzhöhe ');
    res.ru = res.ru.replace('; SH ', '; Высота сиденья ');
    res.zh = res.zh.replace('; SH ', '；座高 ');
    res.id = res.id.replace('; SH ', '; T. dudukan ');
  }

  return res;
}

// 4. MATERIALS TRANSLATIONS FOR THE 3 PRODUCTS
const materialsMap = {
  'SOF-001': {
    en: 'Smoked eucalyptus / espresso leather / bronze / stone',
    it: 'Eucalipto affumicato / pelle color espresso / bronzo / pietra',
    fr: 'Eucalyptus fumé / cuir espresso / bronze / pierre',
    de: 'Geräucherter Eukalyptus / Espresso-Leder / Bronze / Stein',
    ru: 'Копченый эвкалипт / кожа оттенка эспрессо / бронза / камень',
    zh: '烟熏桉木 / 浓缩咖啡色皮革 / 青铜 / 原石',
    id: 'Kayu eukaliptus asap / kulit espreso / perunggu / batu'
  },
  'ARM-002': {
    en: 'Light ash / ivory boucle / champagne brass',
    it: 'Frassino chiaro / bouclé avorio / ottone champagne',
    fr: 'Frêne clair / bouclé ivoire / laiton champagne',
    de: 'Helle Esche / elfenbeinfarbener Bouclé / Champagner-Messing',
    ru: 'Светлый ясень / ткань букле цвета слоновой кости / латунь цвета шампанского',
    zh: '浅色白蜡木 / 象牙白圈圈绒 / 香槟黄铜',
    id: 'Kayu ash terang / boucle gading / kuningan sampanye'
  },
  'ARM-004': {
    en: 'Sculpted walnut / taupe leather / brass',
    it: 'Noce scolpito / pelle taupe / ottone',
    fr: 'Noyer sculpté / cuir taupe / laiton',
    de: 'Skulpturierte Walnuss / taupefarbenes Leder / Messing',
    ru: 'Резной орех / кожа цвета тауп / латунь',
    zh: '雕刻胡桃木 / 灰褐色皮革 / 黄铜',
    id: 'Kayu kenari pahat / kulit taupe / kuningan'
  }
};

// READ EXISTING CATEGORIES AND PRODUCTS
const catPath = path.join(process.cwd(), 'src', 'data', 'categories.json');
const prodPath = path.join(process.cwd(), 'src', 'data', 'products.json');

const categories = JSON.parse(fs.readFileSync(catPath, 'utf8'));
const products = JSON.parse(fs.readFileSync(prodPath, 'utf8'));

// UPDATE CATEGORIES
for (const cat of categories) {
  const trans = categoriesTranslations[cat.slug] || { en: cat.title.en };
  cat.title = { ...trans };
  cat.description = { ...trans };
}

// UPDATE PRODUCTS
for (const prod of products) {
  // Title
  prod.title = translateProductTitle(prod.title.en, prod.sku);

  // Dimensions
  const enDim = prod.dimensions?.en || '';
  prod.dimensions = translateDimensions(enDim);

  // Materials
  if (materialsMap[prod.sku]) {
    prod.materials = materialsMap[prod.sku];
  } else {
    prod.materials = { en: '', it: '', fr: '', de: '', ru: '', zh: '', id: '' };
  }

  // Specifications
  if (!prod.specifications || !prod.specifications.en) {
    prod.specifications = { en: '', it: '', fr: '', de: '', ru: '', zh: '', id: '' };
  } else {
    prod.specifications = translateDimensions(prod.specifications.en);
  }
}

// WRITE UPDATED JSON FILES
fs.writeFileSync(catPath, JSON.stringify(categories, null, 2), 'utf8');
fs.writeFileSync(prodPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Updated ${categories.length} categories and ${products.length} products with 7-language support.`);
