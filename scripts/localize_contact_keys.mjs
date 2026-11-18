import fs from 'fs';
import path from 'path';

const messagesDir = path.resolve('genesi-web/messages');

const contactKeys = {
  inquiryForModel: {
    it: "Richiesta informazioni per modello: {model}",
    en: "Information inquiry for model: {model}",
    fr: "Demande d'informations pour le modèle : {model}",
    de: "Informationsanfrage für Modell: {model}"
  },
  optMaterials: {
    it: "Campionario Materiali e Finiture",
    en: "Materials & Finishes Sample Box",
    fr: "Coffret d'Échantillons Matériaux & Finitions",
    de: "Musterkoffer Materialien & Oberflächen"
  }
};

const locales = ['it', 'en', 'fr', 'de'];

locales.forEach(loc => {
  const filePath = path.join(messagesDir, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.Contact) data.Contact = {};

  Object.entries(contactKeys).forEach(([key, val]) => {
    data.Contact[key] = val[loc] || val.en;
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated Contact keys in ${loc}.json:`, Object.keys(data.Contact).length);
});
