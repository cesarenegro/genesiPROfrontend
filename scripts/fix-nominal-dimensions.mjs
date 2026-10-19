import fs from 'fs';

const vela = JSON.parse(fs.readFileSync('src/data/vela.json', 'utf8'));

const disclaimerText = {
  it: "Tavola grafica di concept per la presentazione dell’ingombro del prodotto sul sito e nel catalogo. Quote nominali di riferimento; profili laterali dichiarati schematicamente ingranditi nelle tavole. Non costituiscono disegni esecutivi né specifiche di produzione.",
  en: "Concept dimensional graphic presenting product space envelope for web and catalogue. Nominal reference dimensions; lateral profiles schematically enlarged in plates. Not intended as shop drawings or manufacturing specifications."
};

for (const product of vela.products) {
  if (product.code && product.code.startsWith('IN-')) {
    const isDouble = product.code === 'IN-04';
    const widthMm = isDouble ? '2 × 800' : '800';
    const heightMm = 2100;
    const thicknessMm = 41;
    const model = product.model || product.code;

    product.nominalDimensions = {
      widthMm,
      heightMm,
      thicknessMm,
      note: isDouble ? 'Doppia anta battente (2 × 800 mm)' : 'Anta singola standard'
    };

    product.technicalDrawing = {
      code: product.code,
      image: `/images/vela/drawings/${product.code}_${model}.png`,
      filename: `${product.code}_${model}.png`,
      width: 2400,
      height: 1800,
      aspectRatio: '4:3',
      modelName: model,
      type: 'residential',
      nominalDimensions: {
        widthMm,
        heightMm,
        thicknessMm
      },
      disclaimer: disclaimerText
    };
  } else if (product.code && product.code.startsWith('HT-')) {
    const widthMm = '800';
    const heightMm = 2100;
    const thicknessMm = 60;
    const model = product.model || product.code;

    product.nominalDimensions = {
      widthMm,
      heightMm,
      thicknessMm,
      note: 'Specifiche ad alto isolamento acustico per hospitality'
    };

    product.technicalDrawing = {
      code: product.code,
      image: `/images/vela/drawings/${product.code}_${model}.png`,
      filename: `${product.code}_${model}.png`,
      width: 2400,
      height: 1800,
      aspectRatio: '4:3',
      modelName: model,
      type: 'hotel',
      nominalDimensions: {
        widthMm,
        heightMm,
        thicknessMm
      },
      disclaimer: disclaimerText
    };
  }
}

fs.writeFileSync('src/data/vela.json', JSON.stringify(vela, null, 2), 'utf8');
console.log('Fixed nominalDimensions and technicalDrawing for all products in vela.json');
