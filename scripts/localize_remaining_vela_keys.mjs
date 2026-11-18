import fs from 'fs';
import path from 'path';

const messagesDir = path.resolve('genesi-web/messages');

const newKeys = {
  // Handles & Hardware
  handlesTypeLever: {
    it: "Maniglia a Leva",
    en: "Lever Handle",
    fr: "Poignée de Porte à Béquille",
    de: "Drückergarnitur"
  },
  handlesTypePull: {
    it: "Maniglione Architetturale",
    en: "Architectural Pull Handle",
    fr: "Bâton de Maréchal Architectural",
    de: "Architektur-Stoßgriff"
  },
  handlesTypeRecessed: {
    it: "Presa a Gola a Filo",
    en: "Flush Recessed Handle",
    fr: "Prise de Main Affleurante",
    de: "Eingelassene Griffleiste"
  },
  handlesTypeHardware: {
    it: "Sistema di Chiusura / RFID",
    en: "Locking System / RFID",
    fr: "Système de Fermeture / RFID",
    de: "Schließsystem / RFID"
  },
  handlesApplication: {
    it: "Applicazione:",
    en: "Application:",
    fr: "Application :",
    de: "Anwendung:"
  },
  handlesRequestDatasheetQuote: {
    it: "Richiedi scheda tecnica & preventivo",
    en: "Request Technical Sheet & Quote",
    fr: "Demander la Fiche Technique & Devis",
    de: "Datenblatt & Angebot anfordern"
  },
  finishesPaletteTag: {
    it: "Cartella Finiture Metalli",
    en: "Metal Finishes Palette",
    fr: "Nuancier Finitions Métaux",
    de: "Musterpalette Metalloberflächen"
  },
  finishesPaletteTitle: {
    it: "I metalli nobili del programma VELA",
    en: "Noble metals of the VELA program",
    fr: "Les métaux nobles du programme VELA",
    de: "Edle Metalle der VELA-Kollektion"
  },
  finishesPaletteDesc: {
    it: "Trattamenti galvanici a spessore, lucidature a specchio e spazzolature artigianali protette da film nano-ceramici per garantire resistenza all'abrasione e all'ossidazione nel tempo.",
    en: "Thick galvanic treatments, mirror polishings, and artisanal brushings sealed with nano-ceramic films to ensure long-lasting resistance to wear and oxidation.",
    fr: "Traitements galvaniques épais, polissages miroir et brossages artisanaux protégés par film nano-céramique garantissant une résistance durable à l'abrasion et à l'oxydation.",
    de: "Starke galvanische Veredelungen, Hochglanzpolituren und handwerklich gebürstete Oberflächen mit nanokeramischem Schutz gegen Abrieb und Oxidation."
  },
  finishesBase: {
    it: "Base:",
    en: "Base:",
    fr: "Base :",
    de: "Basis:"
  },
  finishesTreatment: {
    it: "Trattamento:",
    en: "Treatment:",
    fr: "Traitement :",
    de: "Behandlung:"
  },
  handlesSampleBoxTitle: {
    it: "Desideri toccare con mano le nostre maniglie?",
    en: "Would you like to feel our handles in person?",
    fr: "Souhaitez-vous toucher nos poignées en main propre ?",
    de: "Möchten Sie unsere Türgriffe haptisch erleben?"
  },
  handlesSampleBoxDesc: {
    it: "Architetti, progettisti e general contractor possono richiedere il cofanetto campionature con finiture metalliche e impugnature in scala 1:1.",
    en: "Architects, designers, and general contractors can request the sample box with metal finishes and 1:1 scale handles.",
    fr: "Architectes, maîtres d'œuvre et contractants généraux peuvent demander le coffret d'échantillons avec finitions métalliques et poignées à l'échelle 1:1.",
    de: "Architekten, Planer und Generalunternehmer können das Musterkästchen mit Metalloberflächen und Griffen im Maßstab 1:1 anfordern."
  },
  handlesSampleBoxCta: {
    it: "Richiedi Cofanetto Campioni Maniglie",
    en: "Request Handle Sample Box",
    fr: "Demander le Coffret d'Échantillons Poignées",
    de: "Griff-Musterkästchen anfordern"
  },
  handlesFinishLabel: {
    it: "Finitura:",
    en: "Finish:",
    fr: "Finition :",
    de: "Oberfläche:"
  },
  handlesTavolaTecnicaSvg: {
    it: "Tavola Tecnica SVG",
    en: "SVG Technical Sheet",
    fr: "Planche Technique SVG",
    de: "SVG-Technikzeichnung"
  },
  handlesClickToOpenSheet: {
    it: "Clicca per aprire la scheda tecnica in pop-up",
    en: "Click to open technical sheet in popup",
    fr: "Cliquer pour ouvrir la fiche technique en pop-up",
    de: "Klicken, um das technische Datenblatt im Pop-up zu öffnen"
  },
  handlesOpenSvgFullscreen: {
    it: "Apri SVG a tutto schermo in nuova scheda",
    en: "Open SVG full screen in new tab",
    fr: "Ouvrir le SVG en plein écran dans un nouvel onglet",
    de: "SVG im Vollbildmodus in neuem Tab öffnen"
  },
  handlesDownloadSvg: {
    it: "Scarica SVG",
    en: "Download SVG",
    fr: "Télécharger le SVG",
    de: "SVG herunterladen"
  },
  handlesDisclaimerFootnote: {
    it: "* Le quote sono indicative e non esecutive. Non costituiscono dati di produzione né specifiche costruttive verificate dal produttore.",
    en: "* Dimensions are indicative and non-binding. They do not constitute production data or manufacturer-verified manufacturing specifications.",
    fr: "* Les cotes sont données à titre indicatif et ne sont pas contractuelles. Elles ne constituent pas des données d'exécution ni des spécifications vérifiées par le fabricant.",
    de: "* Maße sind Richtwerte und unverbindlich. Sie stellen keine Produktionsdaten oder vom Hersteller freigegebene Bauspezifikationen dar."
  },

  // Hardware Card & Toggles
  hardwareViewProduct: {
    it: "Prodotto",
    en: "Product",
    fr: "Produit",
    de: "Produkt"
  },
  hardwareViewInSitu: {
    it: "In-Situ",
    en: "In-Situ",
    fr: "In Situ",
    de: "In-Situ"
  },
  hardwareTitleViewProduct: {
    it: "Visualizza prodotto isolato",
    en: "View isolated product",
    fr: "Voir le produit isolé",
    de: "Isoliertes Produkt ansehen"
  },
  hardwareTitleViewInSitu: {
    it: "Visualizza installazione architettonica in-situ",
    en: "View architectural in-situ installation",
    fr: "Voir l'installation architecturale in situ",
    de: "Architektonische In-Situ-Installation ansehen"
  },
  hardwareAltInSitu: {
    it: "Installazione in-situ",
    en: "In-situ installation",
    fr: "Installation in situ",
    de: "In-Situ-Installation"
  },
  hardwareAltProduct: {
    it: "Vista tecnica prodotto",
    en: "Product technical view",
    fr: "Vue technique du produit",
    de: "Technische Produktansicht"
  },
  hardwareLoadCapacity: {
    it: "Portata Max:",
    en: "Max Load:",
    fr: "Charge Max :",
    de: "Max. Tragkraft:"
  },
  hardwareLoadCapacityUnit: {
    it: "kg / coppia",
    en: "kg / pair",
    fr: "kg / paire",
    de: "kg / Paar"
  },
  hardwareBackset: {
    it: "Entrata (Backset):",
    en: "Backset:",
    fr: "Axe (Fouille) :",
    de: "Dornmaß:"
  },
  hardwareDoorThicknessMin: {
    it: "Spessore Anta Min:",
    en: "Min Door Thickness:",
    fr: "Épaisseur Vantail Min :",
    de: "Min. Türblattstärke:"
  },
  hardwareProtocols: {
    it: "Protocolli:",
    en: "Protocols:",
    fr: "Protocoles :",
    de: "Protokolle:"
  },
  hardwareBatteryLife: {
    it: "Autonomia:",
    en: "Battery Life:",
    fr: "Autonomie :",
    de: "Batterielaufzeit:"
  },
  hardwareMoreFinishes: {
    it: "+{count} altre",
    en: "+{count} more",
    fr: "+{count} autres",
    de: "+{count} weitere"
  },
  hardwareIdealFor: {
    it: "Ideale per:",
    en: "Ideal for:",
    fr: "Idéal pour :",
    de: "Ideal für:"
  },
  hardwareDatasheetPdf: {
    it: "Scheda Tecnica PDF",
    en: "PDF Technical Sheet",
    fr: "Fiche Technique PDF",
    de: "PDF-Datenblatt"
  },
  hardwareDetailsTolerances: {
    it: "Dettagli & Tolleranze",
    en: "Details & Tolerances",
    fr: "Détails & Tolérances",
    de: "Details & Toleranzen"
  },
  hardwareRequestQuote: {
    it: "Richiedi Preventivo →",
    en: "Request a Quote →",
    fr: "Demander un Devis →",
    de: "Angebot anfordern →"
  },

  // Materials Page & Client
  matAllSurfaces: {
    it: "Tutte le Superfici ({count})",
    en: "All Surfaces ({count})",
    fr: "Toutes les Surfaces ({count})",
    de: "Alle Oberflächen ({count})"
  },
  matInteriorDoorsTab: {
    it: "Porte per Interni (10)",
    en: "Interior Doors (10)",
    fr: "Portes d'Intérieur (10)",
    de: "Innentüren (10)"
  },
  matHotelDoorsTab: {
    it: "Hospitality & Hotel (10)",
    en: "Hospitality & Hotel (10)",
    fr: "Hôtellerie & Hôtel (10)",
    de: "Hoteltüren (10)"
  },
  matWoodSpeciesTab: {
    it: "Essenze Lignee",
    en: "Wood Species",
    fr: "Essences de Bois",
    de: "Holzarten"
  },
  matLacquersTab: {
    it: "Laccature",
    en: "Lacquers",
    fr: "Laques",
    de: "Lackierungen"
  },
  matSpecialSurfacesTab: {
    it: "Cristallo, Metallo & Materici",
    en: "Glass, Metal & Textured",
    fr: "Verre, Métal & Matières",
    de: "Glas, Metall & Strukturen"
  },
  matCatResidential: {
    it: "Residenziale",
    en: "Residential",
    fr: "Résidentiel",
    de: "Wohnbereich"
  },
  matCatHospitality: {
    it: "Hospitality",
    en: "Hospitality",
    fr: "Hôtellerie",
    de: "Hotellerie"
  },
  matModelPrefix: {
    it: "Mod.",
    en: "Mod.",
    fr: "Mod.",
    de: "Mod."
  },
  matViewDoor: {
    it: "Vedi Porta {model} →",
    en: "View Door {model} →",
    fr: "Voir la Porte {model} →",
    de: "Tür {model} ansehen →"
  },
  matEnlarge: {
    it: "Ingrandisci [+]",
    en: "Enlarge [+]",
    fr: "Agrandir [+]",
    de: "Vergrößern [+]"
  },
  matDetail: {
    it: "Dettaglio [+]",
    en: "Detail [+]",
    fr: "Détail [+]",
    de: "Detail [+]"
  },
  matRequestSample1to1: {
    it: "Richiedi Campione 1:1",
    en: "Request 1:1 Sample",
    fr: "Demander Échantillon 1:1",
    de: "1:1-Muster anfordern"
  },
  matConsultationTag: {
    it: "VELA ARCHITECTURAL SERVICE",
    en: "VELA ARCHITECTURAL SERVICE",
    fr: "SERVICE ARCHITECTURAL VELA",
    de: "VELA ARCHITEKTURSERVICE"
  },
  matConsultationTitle: {
    it: "Cofanetto Campionature per Architetti & General Contractor",
    en: "Sample Box for Architects & General Contractors",
    fr: "Coffret d'Échantillons pour Architectes & Entreprises Générales",
    de: "Musterkoffer für Architekten & Generalunternehmer"
  },
  matConsultationDesc: {
    it: "Per progetti contract e residenze di prestigio forniamo il cofanetto campioni con le 20 superfici tattili in scala reale, comprensivo di schede tecniche di posa e finiture metalliche coordinate.",
    en: "For contract projects and prestige residences, we provide the sample box featuring all 20 tactile surfaces at full scale, complete with installation technical sheets and matching metal finishes.",
    fr: "Pour les projets contract et résidences de prestige, nous fournissons le coffret d'échantillons avec les 20 surfaces tactiles à l'échelle réelle, accompagné des fiches techniques de pose et finitions métalliques coordonnées.",
    de: "Für Objektprojekte und gehobene Wohnbereiche stellen wir den Musterkoffer mit allen 20 haptischen Oberflächen im Maßstab 1:1 bereit, inklusive Einbaudatenblättern und abgestimmten Metalloberflächen."
  },
  matRequestBoxCta: {
    it: "Richiedi Cofanetto Materiali VELA",
    en: "Request VELA Materials Box",
    fr: "Demander le Coffret Matériaux VELA",
    de: "VELA-Materialkoffer anfordern"
  },

  // Product Slug & Technical Drawings
  slugProductNotFound: {
    it: "Modello non trovato — VELA by Genesi",
    en: "Model not found — VELA by Genesi",
    fr: "Modèle introuvable — VELA by Genesi",
    de: "Modell nicht gefunden — VELA by Genesi"
  },
  slugEmailSubject: {
    it: "Richiesta Preventivo VELA — {code}",
    en: "VELA Quote Request — {code}",
    fr: "Demande de Devis VELA — {code}",
    de: "VELA Preisanfrage — {code}"
  },
  slugDoubleConfigNote: {
    it: "Configurazione doppia anta (2 × 800 mm)",
    en: "Double door configuration (2 × 800 mm)",
    fr: "Configuration double vantail (2 × 800 mm)",
    de: "Zweiflügelige Ausführung (2 × 800 mm)"
  },
  slugStandardClearance: {
    it: "Luce passaggio standard",
    en: "Standard clear passage",
    fr: "Passage libre standard",
    de: "Standard-Durchgangsmaß"
  },
  slugHoneycombPanel: {
    it: "Pannello tamburato ad alte prestazioni",
    en: "High-performance hollow-core panel",
    fr: "Panneau alvéolaire haute performance",
    de: "Hochleistungs-Wabenkernplatte"
  },
  slugPerspectiveView: {
    it: "Vista prospettica:",
    en: "Perspective view:",
    fr: "Vue perspective :",
    de: "Perspektivische Ansicht:"
  },
  slugFrontProfileView: {
    it: "Prospetto frontale e profilo laterale ingrandito",
    en: "Front elevation and enlarged side profile",
    fr: "Élévation de face et coupe latérale agrandie",
    de: "Vorderansicht und vergrößertes Seitenprofil"
  },
  slugViewFullRes: {
    it: "Visualizza a piena risoluzione (2400 × 1800)",
    en: "View in full resolution (2400 × 1800)",
    fr: "Voir en pleine résolution (2400 × 1800)",
    de: "In voller Auflösung anzeigen (2400 × 1800)"
  },
  slugConceptDrawingInfoTitle: {
    it: "Informativa sui Disegni di Concept",
    en: "Concept Drawings Notice",
    fr: "Note d'Information sur les Dessins de Concept",
    de: "Hinweis zu den Konzeptzeichnungen"
  },
  slugRequestDwgBim: {
    it: "Richiedi esecutivi DWG / BIM di cantiere",
    en: "Request Site DWG / BIM Working Drawings",
    fr: "Demander les Plans d'Exécution DWG / BIM",
    de: "DWG- / BIM-Ausführungspläne anfordern"
  },
  slugVelaCollectionTag: {
    it: "Collezione VELA",
    en: "VELA Collection",
    fr: "Collection VELA",
    de: "VELA-Kollektion"
  },
  galleryNoImages: {
    it: "Nessuna immagine disponibile",
    en: "No image available",
    fr: "Aucune image disponible",
    de: "Kein Bild verfügbar"
  },
  galleryQuoteBadge: {
    it: "QUOTE",
    en: "DIMS",
    fr: "COTES",
    de: "MASSE"
  }
};

const locales = ['it', 'en', 'fr', 'de'];

locales.forEach((loc) => {
  const filePath = path.join(messagesDir, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.Vela) data.Vela = {};

  Object.entries(newKeys).forEach(([k, translations]) => {
    data.Vela[k] = translations[loc] || translations.en;
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`Updated ${loc}.json - Vela keys:`, Object.keys(data.Vela).length);
});

