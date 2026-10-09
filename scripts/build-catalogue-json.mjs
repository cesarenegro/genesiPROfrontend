import fs from 'fs';
import path from 'path';

const csvPath = 'E:/Projects/GENESI FRONTEND/GENESI CATALOGUE HOTEL/FURNITURE_CATALOGUE/04_BRIEF_AND_COPY/PRODUCT_COPY.csv';
const imagesDir = path.join(process.cwd(), 'public', 'images', 'catalogue');
const outCategories = path.join(process.cwd(), 'src', 'data', 'categories.json');
const outProducts = path.join(process.cwd(), 'src', 'data', 'products.json');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

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

function generateDescription(category, sku) {
  const cat = category.toLowerCase();
  
  if (cat.includes('wardrobe')) return {
    en: `The ${sku} wardrobe represents the pinnacle of Italian craftsmanship. Featuring premium materials and a modular interior, it offers an elegant storage solution for luxury spaces.`,
    it: `L'armadio ${sku} rappresenta l'apice dell'artigianato italiano. Realizzato con materiali pregiati e interni modulari, offre un'elegante soluzione di arredo per spazi luxury.`,
    fr: `L'armoire ${sku} représente le sommet de l'artisanat italien. Dotée de matériaux haut de gamme et d'un intérieur modulaire, elle offre une solution de rangement élégante pour les espaces de luxe.`,
    de: `Der Kleiderschrank ${sku} repräsentiert den Gipfel italienischer Handwerkskunst. Mit hochwertigen Materialien und einem modularen Innenraum bietet er eine elegante Aufbewahrungslösung für Luxusräume.`,
    ru: `Шкаф ${sku} представляет собой вершину итальянского мастерства. Оснащенный первоклассными материалами и модульным интерьером, он предлагает элегантное решение для хранения в роскошных пространствах.`,
    zh: `${sku} 衣柜代表了意大利工艺的巅峰。采用优质材料和模块化内部设计，为豪华空间提供优雅的储物解决方案。`,
    id: `Lemari pakaian ${sku} mewakili puncak pengerjaan Italia. Menampilkan bahan premium dan interior modular, lemari ini menawarkan solusi penyimpanan elegan untuk ruang mewah.`
  };
  
  if (cat.includes('desk')) return {
    en: `Designed for executive suites and home offices, the ${sku} desk combines sleek lines with unparalleled functionality and premium finishes.`,
    it: `Progettata per uffici direzionali e home office, la scrivania ${sku} unisce linee eleganti a una funzionalità impareggiabile e finiture di pregio.`,
    fr: `Conçu pour les bureaux de direction et les bureaux à domicile, le bureau ${sku} allie des lignes épurées à une fonctionnalité inégalée et des finitions haut de gamme.`,
    de: `Entworfen für Chefetagen und Heimbüros, kombiniert der ${sku} Schreibtisch schlanke Linien mit unvergleichlicher Funktionalität und hochwertigen Oberflächen.`,
    ru: `Предназначенный для кабинетов руководителей и домашних офисов, письменный стол ${sku} сочетает в себе изящные линии с непревзойденной функциональностью и первоклассной отделкой.`,
    zh: `${sku} 办公桌专为行政套房和家庭办公室设计，将流畅的线条与无与伦比的功能和优质饰面相结合。`,
    id: `Dirancang untuk suite eksekutif dan kantor rumah, meja ${sku} menggabungkan garis-garis ramping dengan fungsionalitas tak tertandingi dan hasil akhir premium.`
  };

  if (cat.includes('minibar')) return {
    en: `The ${sku} minibar cabinet seamlessly conceals state-of-the-art hospitality technology within a beautifully crafted Italian furniture piece.`,
    it: `Il mobile minibar ${sku} cela perfettamente la più avanzata tecnologia per l'hospitality all'interno di un arredo di puro artigianato italiano.`,
    fr: `Le meuble minibar ${sku} dissimule parfaitement la technologie hôtelière de pointe dans un meuble italien magnifiquement conçu.`,
    de: `Der ${sku} Minibar-Schrank verbirgt nahtlos hochmoderne Gastgewerbe-Technologie in einem wunderschön gefertigten italienischen Möbelstück.`,
    ru: `Шкаф для мини-бара ${sku} органично скрывает ультрасовременные гостиничные технологии в красиво оформленном предмете итальянской мебели.`,
    zh: `${sku} 迷你吧柜将最先进的酒店技术无缝隐藏在制作精美的意大利家具中。`,
    id: `Kabinet minibar ${sku} dengan mulus menyembunyikan teknologi perhotelan canggih di dalam perabot Italia yang dibuat dengan indah.`
  };

  if (cat.includes('sofa')) return {
    en: `Experience ultimate comfort with the ${sku} sofa. Handcrafted in Italy, its generous proportions and premium upholstery make it the centerpiece of any luxury living room.`,
    it: `Scopri il massimo del comfort con il divano ${sku}. Realizzato a mano in Italia, le sue proporzioni generose e i rivestimenti premium lo rendono il fulcro di ogni living di lusso.`,
    fr: `Découvrez le confort ultime avec le canapé ${sku}. Fabriqué à la main en Italie, ses proportions généreuses et son revêtement haut de gamme en font la pièce maîtresse de tout salon de luxe.`,
    de: `Erleben Sie ultimativen Komfort mit dem Sofa ${sku}. Handgefertigt in Italien, machen seine großzügigen Proportionen und die hochwertige Polsterung es zum Herzstück jedes luxuriösen Wohnzimmers.`,
    ru: `Испытайте максимальный комфорт с диваном ${sku}. Изготовленный вручную в Италии, его щедрые пропорции и премиальная обивка делают его центральным элементом любой роскошной гостиной.`,
    zh: `使用 ${sku} 沙发体验终极舒适。在意大利手工制作，其宽大的比例和高档内饰使其成为任何豪华客厅的中心。`,
    id: `Rasakan kenyamanan luar biasa dengan sofa ${sku}. Dibuat dengan tangan di Italia, proporsinya yang luas dan pelapis premium menjadikannya pusat dari setiap ruang tamu mewah.`
  };

  if (cat.includes('armchair') || cat.includes('lounge')) return {
    en: `The ${sku} armchair offers a perfect balance of ergonomic support and striking silhouette, tailored in the finest Italian fabrics and leathers.`,
    it: `La poltrona ${sku} offre un perfetto equilibrio tra supporto ergonomico e silhouette accattivante, sartorialmente rivestita nei migliori tessuti e pellami italiani.`,
    fr: `Le fauteuil ${sku} offre un équilibre parfait entre soutien ergonomique et silhouette saisissante, conçu dans les meilleurs tissus et cuirs italiens.`,
    de: `Der Sessel ${sku} bietet eine perfekte Balance aus ergonomischer Unterstützung und markanter Silhouette, maßgeschneidert aus den feinsten italienischen Stoffen und Ledern.`,
    ru: `Кресло ${sku} предлагает идеальный баланс эргономичной поддержки и яркого силуэта, сшитого из лучших итальянских тканей и кожи.`,
    zh: `${sku} 扶手椅在符合人体工程学的支撑和引人注目的轮廓之间实现了完美平衡，采用最优质的意大利面料和皮革量身定制。`,
    id: `Kursi santai ${sku} menawarkan keseimbangan sempurna antara dukungan ergonomis dan siluet yang mencolok, disesuaikan dengan kain dan kulit Italia terbaik.`
  };

  if (cat.includes('table')) return {
    en: `A statement of modern luxury, the ${sku} table features a stunning top and sculptural base, perfect for refined dining or executive spaces.`,
    it: `Dichiarazione di lusso moderno, il tavolo ${sku} presenta un piano sorprendente e una base scultorea, perfetto per sale da pranzo raffinate o spazi direzionali.`,
    fr: `Une déclaration de luxe moderne, la table ${sku} présente un plateau époustouflant et une base sculpturale, parfaite pour les repas raffinés ou les espaces de direction.`,
    de: `Ein Statement von modernem Luxus, der Tisch ${sku} verfügt über eine atemberaubende Platte und einen skulpturalen Sockel, perfekt für gehobene Ess- oder Chefetagen.`,
    ru: `Заявление о современной роскоши, стол ${sku} имеет потрясающую столешницу и скульптурное основание, идеально подходящее для изысканных обеденных или административных помещений.`,
    zh: `${sku} 桌子是现代奢华的象征，拥有令人惊叹的桌面和雕塑般的底座，非常适合精致的用餐或行政空间。`,
    id: `Sebuah pernyataan kemewahan modern, meja ${sku} menampilkan bagian atas yang memukau dan dasar pahatan, sempurna untuk ruang makan yang mewah atau ruang eksekutif.`
  };

  if (cat.includes('chair')) return {
    en: `The ${sku} chair is a masterpiece of contemporary seating, combining elegant Italian design with exceptional comfort for dining or lounge areas.`,
    it: `La sedia ${sku} è un capolavoro di seduta contemporanea, che combina l'elegante design italiano con un comfort eccezionale per aree pranzo o lounge.`,
    fr: `La chaise ${sku} est un chef-d'œuvre de siège contemporain, combinant un design italien élégant avec un confort exceptionnel pour les salles à manger ou les espaces salons.`,
    de: `Der Stuhl ${sku} ist ein Meisterwerk zeitgenössischen Sitzens, der elegantes italienisches Design mit außergewöhnlichem Komfort für Ess- oder Loungebereiche kombiniert.`,
    ru: `Стул ${sku} - это шедевр современных сидений, сочетающий элегантный итальянский дизайн с исключительным комфортом для обеденных или лаунж-зон.`,
    zh: `${sku} 椅子是现代座椅的杰作，结合了优雅的意大利设计与在用餐或休息区的卓越舒适度。`,
    id: `Kursi ${sku} adalah mahakarya tempat duduk kontemporer, menggabungkan desain Italia yang elegan dengan kenyamanan luar biasa untuk ruang makan atau ruang tunggu.`
  };

  if (cat.includes('bed')) return {
    en: `Transform your bedroom into a luxury sanctuary with the ${sku} bed. Its refined headboard and flawless construction guarantee restful elegance.`,
    it: `Trasforma la tua camera da letto in un santuario del lusso con il letto ${sku}. La raffinata testiera e la costruzione impeccabile garantiscono un'eleganza riposante.`,
    fr: `Transformez votre chambre en un sanctuaire de luxe avec le lit ${sku}. Sa tête de lit raffinée et sa construction impeccable garantissent une élégance reposante.`,
    de: `Verwandeln Sie Ihr Schlafzimmer in ein luxuriöses Heiligtum mit dem Bett ${sku}. Sein raffiniertes Kopfteil und die makellose Konstruktion garantieren erholsame Eleganz.`,
    ru: `Превратите свою спальню в роскошное убежище с кроватью ${sku}. Ее изысканное изголовье и безупречная конструкция гарантируют умиротворяющую элегантность.`,
    zh: `使用 ${sku} 床将您的卧室变成奢华的避难所。其精致的床头板和完美的结构保证了宁静的优雅。`,
    id: `Ubah kamar tidur Anda menjadi tempat suci mewah dengan tempat tidur ${sku}. Kepala tempat tidurnya yang disempurnakan dan konstruksi yang sempurna menjamin keanggunan yang tenang.`
  };

  if (cat.includes('nightstand') || cat.includes('vanity') || cat.includes('dresser') || cat.includes('sideboard') || cat.includes('chest')) return {
    en: `The ${sku} offers refined storage and surface space, crafted with meticulous attention to detail and featuring premium hardware.`,
    it: `Il mobile ${sku} offre soluzioni di contenimento e superfici d'appoggio raffinate, realizzate con meticolosa attenzione ai dettagli e dotate di ferramenta premium.`,
    fr: `Le ${sku} offre un rangement et un espace de surface raffinés, conçus avec une attention méticuleuse aux détails et dotés d'une quincaillerie de qualité supérieure.`,
    de: `Das ${sku} bietet raffinierten Stauraum und Ablagefläche, gefertigt mit größter Liebe zum Detail und ausgestattet mit hochwertigen Beschlägen.`,
    ru: `${sku} предлагает изысканное пространство для хранения и поверхность, созданную с тщательным вниманием к деталям и с использованием премиальной фурнитуры.`,
    zh: `${sku} 提供精致的储物和表面空间，在制作时对细节一丝不苟，并采用优质五金件。`,
    id: `${sku} menawarkan penyimpanan yang disempurnakan dan ruang permukaan, dibuat dengan perhatian cermat terhadap detail dan menampilkan perangkat keras premium.`
  };

  if (cat.includes('bookcase') || cat.includes('shelving') || cat.includes('vitrine')) return {
    en: `Showcase your curated objects with the ${sku}. This structural masterpiece brings architectural elegance and intelligent display solutions to any room.`,
    it: `Metti in mostra i tuoi oggetti scelti con ${sku}. Questo capolavoro strutturale porta eleganza architettonica e soluzioni espositive intelligenti in qualsiasi stanza.`,
    fr: `Mettez en valeur vos objets sélectionnés avec la ${sku}. Ce chef-d'œuvre structurel apporte une élégance architecturale et des solutions d'affichage intelligentes à n'importe quelle pièce.`,
    de: `Präsentieren Sie Ihre kuratierten Objekte mit dem ${sku}. Dieses strukturelle Meisterwerk bringt architektonische Eleganz und intelligente Präsentationslösungen in jeden Raum.`,
    ru: `Продемонстрируйте свои курируемые объекты с помощью ${sku}. Этот структурный шедевр привносит архитектурную элегантность и интеллектуальные решения для отображения в любую комнату.`,
    zh: `使用 ${sku} 展示您的精选物品。这一结构杰作将建筑优雅和智能展示解决方案带入任何房间。`,
    id: `Pamerkan objek pilihan Anda dengan ${sku}. Mahakarya struktural ini menghadirkan keanggunan arsitektur dan solusi tampilan cerdas ke ruangan mana pun.`
  };

  if (cat.includes('media') || cat.includes('tv')) return {
    en: `The ${sku} media wall integrates entertainment technology into a sophisticated Italian furniture composition, eliminating clutter with style.`,
    it: `La parete attrezzata ${sku} integra la tecnologia di intrattenimento in una sofisticata composizione d'arredo italiana, eliminando il disordine con stile.`,
    fr: `Le mur multimédia ${sku} intègre la technologie de divertissement dans une composition de mobilier italien sophistiquée, éliminant le désordre avec style.`,
    de: `Die Medienwand ${sku} integriert Unterhaltungstechnologie in eine raffinierte italienische Möbelkomposition und beseitigt Unordnung mit Stil.`,
    ru: `Медиа-стена ${sku} интегрирует развлекательные технологии в изысканную итальянскую мебельную композицию, устраняя беспорядок со вкусом.`,
    zh: `${sku} 媒体墙将娱乐技术整合到复杂的意大利家具组合中，巧妙地消除了杂乱。`,
    id: `Dinding media ${sku} mengintegrasikan teknologi hiburan ke dalam komposisi furnitur Italia yang canggih, menghilangkan kekacauan dengan gaya.`
  };
  
  return {
    en: `The ${sku} is a masterclass in Italian design, bringing together premium materials, artisanal craftsmanship, and timeless elegance to elevate your luxury interior.`,
    it: `L'elemento ${sku} è un vero capolavoro del design italiano, che unisce materiali pregiati, artigianato e un'eleganza senza tempo per valorizzare i tuoi interni di lusso.`,
    fr: `Le ${sku} est un chef-d'œuvre du design italien, réunissant des matériaux haut de gamme, un savoir-faire artisanal et une élégance intemporelle pour sublimer votre intérieur de luxe.`,
    de: `Das ${sku} ist ein Meisterwerk des italienischen Designs, das hochwertige Materialien, handwerkliches Können und zeitlose Eleganz vereint, um Ihr luxuriöses Interieur aufzuwerten.`,
    ru: `${sku} - это мастер-класс итальянского дизайна, объединяющий премиальные материалы, ремесленное мастерство и вневременную элегантность, чтобы возвысить ваш роскошный интерьер.`,
    zh: `${sku} 是意大利设计的大师级作品，将优质材料、工匠精神和永恒的优雅汇集在一起，提升您的奢华室内设计。`,
    id: `${sku} adalah kelas master dalam desain Italia, menyatukan bahan premium, pengerjaan artisanal, dan keanggunan abadi untuk meningkatkan interior mewah Anda.`
  };
}

async function buildCatalogue() {
  const csvData = fs.readFileSync(csvPath, 'utf8');
  const lines = csvData.split('\n').filter(l => l.trim().length > 0);
  
  // Skip header
  const rows = lines.slice(1).map(l => l.split(','));

  const categoriesMap = new Map();
  const products = [];

  for (const row of rows) {
    if (row.length < 10) continue;
    
    // product_id,product_name,category,short_description,materials,finishes,dimensions,options,notes,data_status
    const productIdRaw = row[0];
    const productNameRaw = row[1];
    const categoryNameRaw = row[2];
    const shortDesc = row[3];
    const materials = row[4];
    const dimensions = row[6];

    if (!productIdRaw) continue;
    
    const productId = productIdRaw.trim();
    const productName = productNameRaw ? productNameRaw.trim() : '';
    const categoryName = categoryNameRaw ? categoryNameRaw.trim() : '';

    const catSlug = slugify(categoryName);
    if (!categoriesMap.has(catSlug)) {
      const catTrans = categoriesTranslations[catSlug] || { en: categoryName };
      categoriesMap.set(catSlug, {
        id: catSlug,
        slug: catSlug,
        title: { ...catTrans },
        description: { ...catTrans },
        isActive: true
      });
    }

    let cleanName = productName.replace(/\[INFERRED\]/gi, '').trim();
    if (cleanName === '' || cleanName.toLowerCase().includes('name required')) {
      cleanName = `Genesi ${productId}`;
    }

    const prodSlug = slugify(cleanName) !== '' 
        ? slugify(cleanName) 
        : slugify(`${categoryName}-${productId}`);

    let finalDesc = shortDesc ? { en: shortDesc } : null;
    if (!finalDesc || finalDesc.en.toLowerCase().includes('concept product') || finalDesc.en.toLowerCase().includes('derived from')) {
      finalDesc = generateDescription(categoryName, productId);
    }

    const finalMaterials = materialsMap[productId] 
      ? materialsMap[productId]
      : { en: materials || '', it: '', fr: '', de: '', ru: '', zh: '', id: '' };

    const finalDimensions = translateDimensions(dimensions || '');
    const finalTitle = translateProductTitle(cleanName, productId);

    const product = {
      id: productId.toLowerCase(),
      categoryId: catSlug,
      slug: prodSlug,
      sku: productId,
      title: finalTitle,
      description: finalDesc,
      materials: finalMaterials,
      specifications: finalDimensions,
      dimensions: finalDimensions,
      tearSheetUrl: `/pdfs/catalogue/${prodSlug}.pdf`,
      isPublished: true,
      images: []
    };

    // Check images
    if (fs.existsSync(imagesDir)) {
      const allImages = fs.readdirSync(imagesDir);
      const matchingImages = allImages.filter(f => f.toLowerCase().startsWith(productId.toLowerCase()));
      for (const img of matchingImages) {
        let viewType = 'gallery';
        if (img.includes('_front')) viewType = 'front';
        if (img.includes('_side')) viewType = 'side';
        
        product.images.push({
          url: `/images/catalogue/${img}`,
          viewType,
          isPrimary: viewType === 'front'
        });
      }
      
      product.images.sort((a, b) => (a.isPrimary ? -1 : 1));
    }

    products.push(product);
  }

  const categories = Array.from(categoriesMap.values());
  fs.writeFileSync(outCategories, JSON.stringify(categories, null, 2));
  fs.writeFileSync(outProducts, JSON.stringify(products, null, 2));

  console.log(`Successfully generated ${categories.length} categories and ${products.length} products with full 7-language localization.`);
}

buildCatalogue().catch(console.error);
