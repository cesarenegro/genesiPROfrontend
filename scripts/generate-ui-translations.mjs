import fs from 'fs';
import path from 'path';

const locales = ['it', 'en', 'ru', 'zh', 'id', 'fr', 'de'];

// 1. UI MESSAGES DICTIONARY
const messages = {
  en: {
    Metadata: {
      title: "Genesi Premium Website",
      description: "Furniture, FF&E procurement, interior-design and project-management"
    },
    Navigation: {
      about: "About",
      studio: "Studio",
      services: "Services",
      catalogue: "Catalogue",
      projects: "Projects",
      materials: "Materials",
      openCatalogue: "Open Catalogue",
      tradeLogin: "Trade Login",
      personalArea: "Personal Area"
    },
    Footer: {
      copyright: "© {year} Genesi Premium Website. All rights reserved.",
      tradeB2b: "Trade & B2B",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      contact: "Contact"
    },
    Home: {
      heroTitle: "Elegance in Every Detail",
      heroSubtitle: "Premium furniture, FF&E procurement, interior design, and project management for luxury spaces worldwide.",
      exploreCatalogue: "Explore Catalogue",
      ourProjects: "Our Projects",
      ourPhilosophy: "Our Philosophy",
      craftingLuxurySpaces: "Crafting Luxury Spaces",
      philosophyText: "GENESI is your partner for high-end interior solutions. From bespoke furniture to complete turnkey contract management, we bring Italian design excellence to hotels, residences, and commercial spaces. Every detail is meticulously engineered to ensure timeless elegance.",
      featuredCollections: "Featured Collections",
      discoverLatest: "Discover our latest additions",
      viewAllCollections: "View All Collections",
      exploreArrow: "Explore →",
      servicesTag: "Services",
      turnkeySolutions: "Turnkey Solutions",
      turnkeyText: "We provide comprehensive FF&E procurement, custom millwork, and project management. From the initial concept to the final white-glove installation, Genesi ensures impeccable execution.",
      discoverOurServices: "Discover Our Services"
    },
    About: {
      heroTitle: "Our Heritage",
      heroSubtitle: "Rooted in the timeless tradition of Italian craftsmanship, GENESI redefines luxury living through innovative design and impeccable execution.",
      storyTitle: "A Legacy of Design Excellence",
      storyP1: "Since our inception, GENESI has been driven by a singular vision: to create environments that inspire. We believe that true luxury lies in the harmony between aesthetics and functionality, where every line, every material, and every finish tells a story.",
      storyP2: "Our approach combines the soul of artisan craftsmanship with the precision of modern engineering. From our headquarters in Milan, we curate collections and orchestrate bespoke contract projects for the world's most demanding clients.",
      statMadeInItaly: "Made in Italy",
      statMadeInItalyDesc: "Sourced, crafted, and finished entirely in Italy by master artisans.",
      statGlobalProjects: "Global Projects",
      statGlobalProjectsDesc: "Delivering turnkey FF&E solutions across five continents.",
      statBespokeOptions: "Bespoke Options",
      statBespokeOptionsDesc: "Infinite customization possibilities to meet any architectural vision."
    },
    Studio: {
      heroTitle: "Genesi Studio",
      heroSubtitle: "Our internal creative hub where architecture, interior design, and product engineering converge.",
      hubTag: "The Hub of Innovation",
      hubTitle: "Where Ideas Take Shape",
      hubP1: "GENESI Studio is the beating heart of our brand. Composed of architects, interior designers, and master engineers, the studio is responsible for the conception of our collections and the execution of our turnkey contract projects.",
      hubP2: "By maintaining a seamless dialogue between the drawing board and the production floor, we ensure that every design is not only conceptually striking but also structurally impeccable and perfectly tailored to the client's needs.",
      statDesigners: "In-house Designers",
      statRendering: "Advanced Rendering",
      quote: "Design is not just what it looks like and feels like. Design is how it works within the space.",
      quoteAuthor: "— The Genesi Studio Team"
    },
    Services: {
      headerTitle: "Our Services",
      headerSubtitle: "From concept engineering to flawless execution, GENESI offers a comprehensive suite of services tailored for the most demanding luxury projects worldwide.",
      readyTitle: "Ready to start your project?",
      readySubtitle: "Our team of contract specialists is ready to review your architectural plans and provide a comprehensive quotation.",
      contactTeam: "Contact Our Team",
      s01Title: "Bespoke Furniture Design",
      s01Desc: "Every space is unique, and so are its requirements. Our master artisans and in-house design team collaborate closely with architects to customize our collections or engineer completely bespoke pieces from scratch, ensuring perfect integration into your architectural vision.",
      s01F1: "Custom Dimensions & Finishes",
      s01F2: "Material Sourcing",
      s01F3: "Prototyping",
      s01F4: "Artisan Craftsmanship",
      s02Title: "FF&E Procurement",
      s02Desc: "We manage the complexities of global luxury procurement. From selecting the finest Furniture, Fixtures, and Equipment to managing vendor relations and quality control, GENESI acts as your single point of contact for outfitting world-class hospitality and residential projects.",
      s02F1: "Vendor Management",
      s02F2: "Quality Assurance",
      s02F3: "Budget Optimization",
      s02F4: "Global Sourcing",
      s03Title: "Turnkey Contract Solutions",
      s03Desc: "Our turnkey service provides peace of mind for large-scale developments. We oversee the entire lifecycle of the interior outfitting process, transforming bare architectural shells into fully operational, breathtaking environments, delivered on time and flawlessly executed.",
      s03F1: "Project Management",
      s03F2: "Space Planning",
      s03F3: "Milestone Tracking",
      s03F4: "Site Supervision",
      s04Title: "White-Glove Installation",
      s04Desc: "The final touch of luxury. Our dedicated logistics team ensures that every piece of furniture is transported under the strictest safety conditions and installed on-site by our specialized technicians with meticulous care and precision.",
      s04F1: "Global Logistics",
      s04F2: "White-Glove Delivery",
      s04F3: "On-site Assembly",
      s04F4: "Final Styling"
    },
    Catalogue: {
      title: "Our Collections",
      subtitle: "Explore our curated selection of premium furniture across all categories.",
      viewCollection: "View Collection",
      backToCollections: "← Back to Collections",
      productsAvailable: "{count} products available",
      noProducts: "No products currently available in this collection.",
      backToCategory: "← Back to {category}",
      materialsFinishes: "Materials & Finishes",
      dimensions: "Dimensions",
      specifications: "Specifications",
      requestQuote: "Request a Quote",
      downloadTearSheet: "Download Tear-sheet"
    },
    Gallery: {
      noImage: "No image available",
      frontView: "Front view",
      sideView: "Side view",
      galleryView: "Gallery view"
    },
    Projects: {
      headerTitle: "Our Projects",
      headerSubtitle: "A selection of our most prestigious contract and residential projects worldwide. GENESI partners with renowned architects to deliver uncompromising quality in every space.",
      viewProject: "View Project"
    },
    Materials: {
      headerTitle: "Materials & Finishes",
      headerSubtitle: "The essence of true luxury lies in what you can feel. At GENESI, we obsess over every surface, sourcing only the most exquisite materials to craft masterpieces that stand the test of time.",
      signatureFinishes: "Signature Finishes",
      sampleTitle: "Need a physical sample?",
      sampleSubtitle: "Architects and interior designers can request our exclusive Materials Box to experience the GENESI quality firsthand.",
      requestSample: "Request Materials Box",
      marblesTitle: "Precious Marbles",
      marblesDesc: "Sourced from the finest quarries in Carrara and around the world, our marbles offer unparalleled unique veining and timeless elegance. Each slab is hand-selected by our master artisans.",
      woodsTitle: "Solid Woods & Veneers",
      woodsDesc: "We use only sustainably sourced, premium timber. Our veneers are carefully book-matched to create seamless, continuous grain patterns that celebrate the natural beauty of the wood.",
      metalsTitle: "Galvanic Metals",
      metalsDesc: "Our metal components undergo rigorous galvanic treatments to achieve flawless, durable finishes that range from warm, brushed brass to sleek, polished chrome.",
      leathersTitle: "Italian Leathers",
      leathersDesc: "Working exclusively with top-tier Italian tanneries, we offer full-grain leathers and nabuk that age beautifully, providing unparalleled softness and durability."
    },
    Contact: {
      headerTitle: "Get in Touch",
      headerSubtitle: "Whether you are inquiring about a specific collection, requesting a bespoke piece, or proposing a large-scale hospitality project, our team is at your disposal.",
      hqTitle: "Headquarters",
      hqName: "Genesi Milano",
      infoTitle: "Contact Info",
      tradePressTitle: "Trade & Press",
      tradePressDesc: "For press inquiries or to join our trade program, please direct your correspondence to",
      formTitle: "Send a Message",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      inquiryType: "Inquiry Type",
      selectOption: "Select an option",
      optGeneral: "General Inquiry",
      optSales: "Product Sales",
      optContract: "Contract / B2B",
      optPress: "Press & Media",
      message: "Message",
      submit: "Submit Inquiry"
    },
    Trade: {
      tag: "Reserved Area",
      welcome: "Welcome, {name}",
      welcomePartner: "Partner",
      intro: "GENESI partners with interior designers, architects, and developers worldwide to deliver exceptional luxury furniture for residential and hospitality projects.",
      cardTitle: "2026 Technical Price List",
      cardText: "Download our complete technical catalogue and MSRP price list. For trade discounts and custom contract quotations, please contact our sales team directly.",
      downloadButton: "Download Price List PDF"
    },
    Dashboard: {
      title: "Personal Area",
      welcome: "Welcome, {name}. This is your private B2B hub.",
      welcomePartner: "Partner",
      profileTitle: "Your Profile",
      nameLabel: "Name",
      emailLabel: "Email",
      tradeMaterialsTitle: "Trade Materials",
      tradeMaterialsText: "Access the reserved area to download updated price lists and B2B technical sheets.",
      goToDownload: "Go to Download Area",
      ordersTitle: "Orders & Quotations",
      noOrders: "No active quotation."
    },
    TearSheet: {
      sku: "SKU",
      dimensions: "Dimensions",
      materialsFinishes: "Materials & Finishes",
      specifications: "Specifications",
      description: "Description"
    }
  },

  it: {
    Metadata: {
      title: "Genesi Sito Ufficiale",
      description: "Arredi di lusso, fornitura FF&E, interior design e contract management"
    },
    Navigation: {
      about: "Chi Siamo",
      studio: "Studio",
      services: "Servizi",
      catalogue: "Catalogo",
      projects: "Progetti",
      materials: "Materiali",
      openCatalogue: "Sfoglia Catalogo",
      tradeLogin: "Area Riservata",
      personalArea: "Area Personale"
    },
    Footer: {
      copyright: "© {year} Genesi Sito Ufficiale. Tutti i diritti riservati.",
      tradeB2b: "Area Trade & B2B",
      privacyPolicy: "Informativa sulla Privacy",
      termsOfService: "Termini di Servizio",
      contact: "Contatti"
    },
    Home: {
      heroTitle: "Eleganza in Ogni Dettaglio",
      heroSubtitle: "Arredi d'eccellenza, fornitura FF&E, architettura d'interni e project management per spazi esclusivi nel mondo.",
      exploreCatalogue: "Esplora il Catalogo",
      ourProjects: "I Nostri Progetti",
      ourPhilosophy: "La Nostra Filosofia",
      craftingLuxurySpaces: "Creiamo Spazi di Pregio",
      philosophyText: "GENESI è il partner d'elezione per soluzioni d'arredo di alto livello. Dagli arredi su misura alla gestione chiavi in mano per grandi progetti contract, portiamo l'eccellenza del design italiano in hotel, residenze e spazi commerciali di prestigio.",
      featuredCollections: "Collezioni in Evidenza",
      discoverLatest: "Scopri le nostre creazioni più recenti",
      viewAllCollections: "Tutte le Collezioni",
      exploreArrow: "Esplora →",
      servicesTag: "Servizi",
      turnkeySolutions: "Soluzioni Chiavi in Mano",
      turnkeyText: "Offriamo approvvigionamento completo FF&E, falegnameria su misura e project management d'eccellenza. Dal concept iniziale all'installazione professionale, Genesi assicura un'esecuzione impeccabile.",
      discoverOurServices: "Scopri i Nostri Servizi"
    },
    About: {
      heroTitle: "La Nostra Tradizione",
      heroSubtitle: "Radicata nell'intramontabile maestria artigianale italiana, GENESI ridefinisce l'arredo di lusso con un design d'avanguardia ed un'esecuzione senza compromessi.",
      storyTitle: "Un'Eredità di Eccellenza nel Design",
      storyP1: "Fin dalla sua fondazione, GENESI persegue una visione chiara: dare vita ad ambienti capaci di emozionare. La vera esclusività risiede nell'equilibrio perfetto tra estetica e funzionalità, dove ogni linea, materiale e finitura racconta una storia unica.",
      storyP2: "Il nostro metodo fonde l'anima della lavorazione artigianale con il rigore dell'ingegneria contemporanea. Dalla nostra sede a Milano, selezioniamo collezioni e coordiniamo progetti su commessa per la committenza più esigente a livello globale.",
      statMadeInItaly: "100% Made in Italy",
      statMadeInItalyDesc: "Ideato, lavorato e rifinito interamente in Italia da maestri artigiani.",
      statGlobalProjects: "50+ Progetti nel Mondo",
      statGlobalProjectsDesc: "Forniture FF&E e allestimenti completi realizzati nei cinque continenti.",
      statBespokeOptions: "Opzioni su Misura",
      statBespokeOptionsDesc: "Infinite possibilità di personalizzazione per realizzare ogni visione architettonica."
    },
    Studio: {
      heroTitle: "Genesi Studio",
      heroSubtitle: "Il nostro hub creativo in cui architettura, interior design e ingegneria di prodotto si incontrano.",
      hubTag: "Il Centro dell'Innovazione",
      hubTitle: "Dove le Idee Prendono Forma",
      hubP1: "GENESI Studio è il centro propulsore del nostro brand. Con un team multidisciplinare composto da architetti, designer e ingegneri, lo studio concepisce le nostre collezioni e coordina l'esecuzione tecnica di grandi commesse contract.",
      hubP2: "Grazie a un confronto continuo tra tavolo da disegno e laboratori manifatturieri, assicuriamo che ogni arredo si distingua non solo per impatto estetico, ma anche per solidità costruttiva e perfetta aderenza alle esigenze del cliente.",
      statDesigners: "Designer Interni",
      statRendering: "Rendering 3D Avanzato",
      quote: "Il design non riguarda solo l'aspetto e la sensazione. Il design è il modo in cui vive e funziona nello spazio.",
      quoteAuthor: "— Il Team di Genesi Studio"
    },
    Services: {
      headerTitle: "I Nostri Servizi",
      headerSubtitle: "Dallo sviluppo esecutivo all'installazione sul posto, GENESI propone un ventaglio integrato di servizi per l'hospitality e le residenze più prestigiose.",
      readyTitle: "Pronto ad avviare il tuo progetto?",
      readySubtitle: "I nostri consulenti contract sono pronti a esaminare i tuoi progetti e fornirti una proposta dedicata.",
      contactTeam: "Contatta il Nostro Team",
      s01Title: "Arredi su Disegno",
      s01Desc: "Ogni ambiente presenta peculiarità irripetibili. I nostri maestri artigiani e il reparto tecnico collaborano a stretto contatto con architetti per personalizzare le collezioni o ingegnerizzare arredi inediti perfettamente inseriti nel contesto progettuale.",
      s01F1: "Dimensioni e Finiture Personalizzate",
      s01F2: "Selezione Materiali Pregiati",
      s01F3: "Prototipazione",
      s01F4: "Artigianato Italiano",
      s02Title: "Approvvigionamento FF&E",
      s02Desc: "Gestiamo la complessità del procurement nel segmento lusso. Dalla selezione dei migliori arredi e componenti alla supervisione dei fornitori e al controllo qualità, GENESI rappresenta il tuo interlocutore unico per commesse ricettive e residenziali di alto livello.",
      s02F1: "Gestione Fornitori",
      s02F2: "Controllo Qualità Rigoroso",
      s02F3: "Ottimizzazione del Budget",
      s02F4: "Forniture Internazionali",
      s03Title: "Soluzioni Contract Chiavi in Mano",
      s03Desc: "Un servizio chiavi in mano studiato per garantire massima serenità negli interventi complessi. Seguiamo ogni fase del ciclo di allestimento, trasformando gli spazi grezzi in ambienti completi, rifiniti e pronti all'uso, nei tempi stabiliti.",
      s03F1: "Project Management",
      s03F2: "Pianificazione degli Spazi",
      s03F3: "Monitoraggio delle Fasi Operative",
      s03F4: "Supervisione in Cantiere",
      s04Title: "Installazione con Consegna Speciale",
      s04Desc: "L'attenzione finale al dettaglio. Il nostro reparto logistico cura il trasporto in condizioni ottimali e la posa in opera eseguita da personale specializzato con meticolosa accuratezza.",
      s04F1: "Logistica Internazionale",
      s04F2: "Consegna con Servizio Guanti Bianchi",
      s04F3: "Montaggio sul Posto",
      s04F4: "Allestimento Finale"
    },
    Catalogue: {
      title: "Le Nostre Collezioni",
      subtitle: "Scopri la nostra selezione curata di arredi di pregio per ogni ambiente.",
      viewCollection: "Vedi Collezione",
      backToCollections: "← Torna alle Collezioni",
      productsAvailable: "{count} prodotti disponibili",
      noProducts: "Nessun prodotto attualmente presente in questa collezione.",
      backToCategory: "← Torna a {category}",
      materialsFinishes: "Materiali e Finiture",
      dimensions: "Dimensioni",
      specifications: "Specifiche Tecniche",
      requestQuote: "Richiedi Preventivo",
      downloadTearSheet: "Scarica Scheda Tecnica"
    },
    Gallery: {
      noImage: "Nessuna immagine disponibile",
      frontView: "Vista frontale",
      sideView: "Vista laterale",
      galleryView: "Vista d'insieme"
    },
    Projects: {
      headerTitle: "I Nostri Progetti",
      headerSubtitle: "Una selezione delle nostre realizzazioni residenziali e contract più esclusive nel mondo. GENESI collabora con i più celebri architetti per offrire qualità senza compromessi.",
      viewProject: "Vedi Progetto"
    },
    Materials: {
      headerTitle: "Materiali e Finiture",
      headerSubtitle: "L'essenza del lusso autentico è racchiusa nella materia. In GENESI selezioniamo con cura ogni singola superficie, impiegando materie prime rare per creare arredi destinati a durare nel tempo.",
      signatureFinishes: "Finiture Esclusive",
      sampleTitle: "Desideri visionare un campione?",
      sampleSubtitle: "Architetti e progettisti d'interni possono richiedere il nostro esclusivo cofanetto campioni per toccare con mano la qualità GENESI.",
      requestSample: "Richiedi Cofanetto Campioni",
      marblesTitle: "Marmi Pregiati",
      marblesDesc: "Estratti dai più rinomati bacini di Carrara e internazionali, i nostri marmi presentano venature irripetibili e un fascino senza tempo. Ogni lastra viene scelta singolarmente dai nostri mastri artigiani.",
      woodsTitle: "Essenze e Legni Massello",
      woodsDesc: "Utilizziamo esclusivamente legnami selezionati da fonti certificate. Le nostre tranciature sono accoppiate con cura artigianale per donare continuità visiva ed esaltare la bellezza naturale delle venature.",
      metalsTitle: "Metalli con Trattamenti Galvanici",
      metalsDesc: "Gli elementi in metallo vengono sottoposti a raffinati trattamenti galvanici per assicurare superfici perfette e resistenti, dai caldi riflessi dell'ottone satinato alla lucentezza del cromo a specchio.",
      leathersTitle: "Pelli Pregiate Italiane",
      leathersDesc: "In collaborazione con le migliori concerie italiane, proponiamo pelli a pieno fiore e nabuk che acquistano fascino con il tempo, donando morbidezza al tatto e massima durevolezza."
    },
    Contact: {
      headerTitle: "Contattaci",
      headerSubtitle: "Che tu voglia informazioni su una collezione, un elemento su disegno o la consulenza per un grande progetto alberghiero, il nostro team è a tua disposizione.",
      hqTitle: "Sede Principale",
      hqName: "Genesi Milano",
      infoTitle: "Recapiti",
      tradePressTitle: "Trade & Ufficio Stampa",
      tradePressDesc: "Per richieste stampa o per entrare a far parte della nostra rete commerciale, scrivi a",
      formTitle: "Invia un Messaggio",
      firstName: "Nome",
      lastName: "Cognome",
      email: "Indirizzo Email",
      inquiryType: "Tipologia di Richiesta",
      selectOption: "Seleziona un'opzione",
      optGeneral: "Richiesta Generale",
      optSales: "Vendita Prodotti",
      optContract: "Forniture Contract / B2B",
      optPress: "Ufficio Stampa & Media",
      message: "Messaggio",
      submit: "Invia Richiesta"
    },
    Trade: {
      tag: "Area Riservata",
      welcome: "Benvenuto, {name}",
      welcomePartner: "Partner",
      intro: "GENESI affianca interior designer, architetti e sviluppatori immobiliari in tutto il mondo nella fornitura di arredi di lusso per progetti residenziali e contract.",
      cardTitle: "Listino Prezzi Tecnico 2026",
      cardText: "Scarica il catalogo tecnico completo e il listino prezzi al pubblico. Per condizioni commerciali riservate e quotazioni contract su misura, contatta direttamente il nostro team vendite.",
      downloadButton: "Scarica Listino in PDF"
    },
    Dashboard: {
      title: "Area Personale",
      welcome: "Benvenuto, {name}. Questo è il tuo portale B2B riservato.",
      welcomePartner: "Partner",
      profileTitle: "Il Tuo Profilo",
      nameLabel: "Nome",
      emailLabel: "Email",
      tradeMaterialsTitle: "Materiali Trade",
      tradeMaterialsText: "Accedi all'area riservata per consultare i listini prezzi aggiornati e la documentazione tecnica riservata.",
      goToDownload: "Vai all'Area Download",
      ordersTitle: "Ordini & Preventivi",
      noOrders: "Nessun preventivo attivo al momento."
    },
    TearSheet: {
      sku: "SKU",
      dimensions: "Dimensioni",
      materialsFinishes: "Materiali e Finiture",
      specifications: "Specifiche Tecniche",
      description: "Descrizione"
    }
  },

  fr: {
    Metadata: {
      title: "Site Officiel Genesi",
      description: "Mobilier haut de gamme, approvisionnement FF&E, architecture d'intérieur et gestion contractuelle"
    },
    Navigation: {
      about: "À Propos",
      studio: "Studio",
      services: "Services",
      catalogue: "Catalogue",
      projects: "Projets",
      materials: "Matériaux",
      openCatalogue: "Consulter le Catalogue",
      tradeLogin: "Espace Pro",
      personalArea: "Espace Personnel"
    },
    Footer: {
      copyright: "© {year} Site Officiel Genesi. Tous droits réservés.",
      tradeB2b: "Espace Pro & B2B",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions Générales",
      contact: "Contact"
    },
    Home: {
      heroTitle: "L'Élégance dans les Moindres Détails",
      heroSubtitle: "Mobilier d'exception, approvisionnement FF&E, architecture d'intérieur et gestion contractuelle pour espaces prestigieux dans le monde entier.",
      exploreCatalogue: "Découvrir le Catalogue",
      ourProjects: "Nos Projets",
      ourPhilosophy: "Notre Philosophie",
      craftingLuxurySpaces: "Créateurs d'Espaces d'Exception",
      philosophyText: "GENESI est votre partenaire privilégié pour les projets d'intérieur de prestige. Du mobilier sur mesure à la gestion globale clé en main, nous apportons l'excellence du design italien aux hôtels, résidences et espaces d'affaires renommés.",
      featuredCollections: "Collections en Vedette",
      discoverLatest: "Découvrez nos dernières créations",
      viewAllCollections: "Toutes les Collections",
      exploreArrow: "Explorer →",
      servicesTag: "Services",
      turnkeySolutions: "Solutions Clé en Main",
      turnkeyText: "Nous assurons l'approvisionnement complet en mobilier FF&E, la menuiserie sur mesure et la direction de projet. Du concept initial à l'installation minutieuse, Genesi garantit une maîtrise absolue.",
      discoverOurServices: "Découvrir Nos Services"
    },
    About: {
      heroTitle: "Notre Héritage",
      heroSubtitle: "Puisant ses racines dans l'excellence artisanale italienne, GENESI réinvente l'art de vivre luxueux par un design contemporain et une rigueur sans égale.",
      storyTitle: "Un Savoir-Faire d'Excellence",
      storyP1: "Depuis sa création, GENESI poursuit un idéal affirmé : concevoir des intérieurs remarquables. Le raffinement véritable naît de la rencontre fluide entre esthétique et fonctionnalité, où chaque matière et chaque nuance raconte une histoire.",
      storyP2: "Notre vision allie la virtuosité des maîtres artisans à la précision technique moderne. Depuis Milan, nous façonnons des collections et orchestrons des réalisations sur mesure pour une clientèle internationale exigeante.",
      statMadeInItaly: "100% Fabriqué en Italie",
      statMadeInItalyDesc: "Conçu, manufacturé et parachevé en Italie par des maîtres artisans d'art.",
      statGlobalProjects: "50+ Projets Mondiaux",
      statGlobalProjectsDesc: "Réalisations hôtelières et résidentielles haut de gamme sur cinq continents.",
      statBespokeOptions: "Créations Sur Mesure",
      statBespokeOptionsDesc: "Possibilités infinies d'adaptations pour satisfaire chaque intention architecturale."
    },
    Studio: {
      heroTitle: "Genesi Studio",
      heroSubtitle: "Notre pôle de conception où se croisent architecture, design d'espace et ingénierie de précision.",
      hubTag: "Le Cœur de l'Innovation",
      hubTitle: "Là où s'Élaborent les Idées",
      hubP1: "GENESI Studio incarne le dynamisme créatif de la maison. Regroupant architectes, décorateurs et ingénieurs, notre atelier imagine nos collections exclusives et pilote la faisabilité technique de nos chantiers contract.",
      hubP2: "En maintenant un échange constant entre le bureau d'études et nos manufactures partenaires, nous veillons à ce que chaque pièce concilie pureté visuelle, solidité pérenne et adéquation parfaite avec le cahier des charges.",
      statDesigners: "Concepteurs Intégrés",
      statRendering: "Modélisation 3D de Pointe",
      quote: "Le design ne se limite pas à ce que l'on voit ou ressent. Le design réside dans son harmonie vivante avec l'espace.",
      quoteAuthor: "— L'Équipe Genesi Studio"
    },
    Services: {
      headerTitle: "Nos Prestations",
      headerSubtitle: "De la modélisation technique à la pose sur site, GENESI déploie un accompagnement d'envergure dédié aux aménagements hôteliers et résidentiels prestigieux.",
      readyTitle: "Vous avez un projet en perspective ?",
      readySubtitle: "Nos experts contract sont prêts à étudier vos plans architecturaux et vous proposer une étude chiffrée détaillée.",
      contactTeam: "Échanger avec Nos Experts",
      s01Title: "Mobilier sur Mesure",
      s01Desc: "Chaque lieu possède son identité propre. Nos ateliers d'art collaborent étroitement avec les prescripteurs pour adapter nos pièces ou concevoir des éléments originaux en harmonie complète avec l'architecture intérieure.",
      s01F1: "Cotes et Finitions Personnalisées",
      s01F2: "Recherche de Matériaux Rares",
      s01F3: "Prototypage d'Atelier",
      s01F4: "Fabrication Artisanale Italienne",
      s02Title: "Approvisionnement FF&E",
      s02Desc: "Nous orchestrons l'intégralité des achats pour les opérations de prestige. Du choix des mobiliers à la coordination des sous-traitants et aux contrôles de conformité, GENESI demeure votre interlocuteur central unique.",
      s02F1: "Gestion des Fabricants",
      s02F2: "Contrôle Qualité Systématique",
      s02F3: "Maîtrise Budgétaire",
      s02F4: "Logistique Internationale",
      s03Title: "Agencement Clé en Main",
      s03Desc: "Un accompagnement global procurant une totale sérénité pour les programmes complexes. Nous prenons en charge chaque étape d'aménagement pour livrer des espaces parachevés et prêts à l'usage dans les délais prévus.",
      s03F1: "Direction de Projet",
      s03F2: "Optimisation Spatiale",
      s03F3: "Planification Opérationnelle",
      s03F4: "Suivi de Chantier",
      s04Title: "Installation Haute Exigence",
      s04Desc: "Le parachèvement du luxe. Nos équipes logistiques assurent un acheminement sécurisé et une mise en place méticuleuse assurée par des monteurs expérimentés.",
      s04F1: "Acheminement International",
      s04F2: "Livraison Gants Blancs",
      s04F3: "Assemblage Spécialisé",
      s04F4: "Mise en Scène Finale"
    },
    Catalogue: {
      title: "Nos Collections",
      subtitle: "Parcourez notre gamme exclusive de meubles italiens haut de gamme.",
      viewCollection: "Découvrir la Collection",
      backToCollections: "← Retour aux Collections",
      productsAvailable: "{count} références disponibles",
      noProducts: "Aucun article disponible pour le moment dans cette collection.",
      backToCategory: "← Retour à {category}",
      materialsFinishes: "Matériaux et Finitions",
      dimensions: "Dimensions",
      specifications: "Spécifications Techniques",
      requestQuote: "Demander un Devis",
      downloadTearSheet: "Télécharger la Fiche Produit"
    },
    Gallery: {
      noImage: "Aucun visuel disponible",
      frontView: "Vue de face",
      sideView: "Vue de profil",
      galleryView: "Vue d'ensemble"
    },
    Projects: {
      headerTitle: "Nos Réalisations",
      headerSubtitle: "Un aperçu de nos projets hôteliers et résidences privées les plus renommés dans le monde. GENESI s'associe aux grands noms de l'architecture pour des finitions d'une qualité rare.",
      viewProject: "Voir le Projet"
    },
    Materials: {
      headerTitle: "Matériaux et Nuances",
      headerSubtitle: "L'essence de l'élégance se révèle au toucher. Chez GENESI, nous sélectionnons des textures d'exception pour donner corps à des pièces pérennes.",
      signatureFinishes: "Finitions Emblématiques",
      sampleTitle: "Besoin d'un échantillon physique ?",
      sampleSubtitle: "Les architectes et designers d'intérieur peuvent solliciter notre coffret d'échantillons exclusif pour apprécier concrètement le niveau de finition GENESI.",
      requestSample: "Commander le Coffret d'Échantillons",
      marblesTitle: "Marbres Rares",
      marblesDesc: "Extraits des prestigieux bassins de Carrare et de carrières réputées, nos marbres dévoilent des veinages uniques. Chaque tranche est sélectionnée individuellement par nos spécialistes.",
      woodsTitle: "Bois Nobles et Placages",
      woodsDesc: "Nous travaillons exclusivement des essences rigoureusement sélectionnées. Nos feuilles de placage sont appariées avec soin pour garantir des motifs continus sublimant le bois naturel.",
      metalsTitle: "Métaux Traités par Galvanoplastie",
      metalsDesc: "Nos structures métalliques bénéficient de traitements protecteurs procurant des reflets durables, du laiton brossé chaleureux aux finitions chromées polies miroir.",
      leathersTitle: "Cuirs Nobles d'Italie",
      leathersDesc: "Issus des tanneries italiennes les plus renommées, nos cuirs pleine fleur et nubucks acquièrent une patine remarquable tout en offrant douceur et résistance au quotidien."
    },
    Contact: {
      headerTitle: "Prendre Contact",
      headerSubtitle: "Que ce soit pour une demande d'information, une commande spéciale sur dessin ou un complexe hôtelier d'envergure, nos équipes sont à votre entière disposition.",
      hqTitle: "Siège Social",
      hqName: "Genesi Milano",
      infoTitle: "Coordonnées",
      tradePressTitle: "Relations Professionnelles & Presse",
      tradePressDesc: "Pour les requêtes médias ou intégrer notre réseau professionnel, merci d'adresser vos échanges à",
      formTitle: "Envoyer une Demande",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse E-mail",
      inquiryType: "Type de Demande",
      selectOption: "Sélectionnez un motif",
      optGeneral: "Demande Générale",
      optSales: "Vente de Mobilier",
      optContract: "Aménagement Contract / B2B",
      optPress: "Relations Presse",
      message: "Votre Message",
      submit: "Transmettre la Demande"
    },
    Trade: {
      tag: "Espace Professionnel",
      welcome: "Bienvenue, {name}",
      welcomePartner: "Partenaire",
      intro: "GENESI accompagne les architectes, décorateurs et promoteurs immobiliers du monde entier dans l'ameublement haut de gamme de projets privés et hôteliers.",
      cardTitle: "Tarif Technique 2026",
      cardText: "Téléchargez le catalogue complet et les tarifs indicatifs. Pour vos remises professionnelles ou l'étude d'un chiffrage contractuel, contactez notre équipe commerciale.",
      downloadButton: "Télécharger le Tarif en PDF"
    },
    Dashboard: {
      title: "Espace Personnel",
      welcome: "Bienvenue, {name}. Voici votre espace de consultation B2B.",
      welcomePartner: "Partenaire",
      profileTitle: "Votre Profil",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      tradeMaterialsTitle: "Ressources Professionnelles",
      tradeMaterialsText: "Retrouvez les tarifs actualisés et les dossiers techniques réservés aux partenaires de la marque.",
      goToDownload: "Accéder aux Fichiers",
      ordersTitle: "Commandes & Devis",
      noOrders: "Aucun devis en cours pour le moment."
    },
    TearSheet: {
      sku: "RÉF",
      dimensions: "Dimensions",
      materialsFinishes: "Matériaux et Finitions",
      specifications: "Spécifications Techniques",
      description: "Description"
    }
  },

  de: {
    Metadata: {
      title: "Offizielle Genesi Webseite",
      description: "Luxusmöbel, FF&E-Beschaffung, Innenarchitektur und ganzheitliches Projektmanagement"
    },
    Navigation: {
      about: "Über Uns",
      studio: "Studio",
      services: "Leistungen",
      catalogue: "Katalog",
      projects: "Projekte",
      materials: "Materialien",
      openCatalogue: "Katalog Öffnen",
      tradeLogin: "Partnerbereich",
      personalArea: "Mein Bereich"
    },
    Footer: {
      copyright: "© {year} Offizielle Genesi Webseite. Alle Rechte vorbehalten.",
      tradeB2b: "B2B & Fachbereich",
      privacyPolicy: "Datenschutzrichtlinie",
      termsOfService: "Nutzungsbedingungen",
      contact: "Kontakt"
    },
    Home: {
      heroTitle: "Eleganz in Jedem Detail",
      heroSubtitle: "Exklusive Möbel, FF&E-Beschaffung, Innenarchitektur und professionelles Projektmanagement für anspruchsvolle Raumkonzepte weltweit.",
      exploreCatalogue: "Katalog Entdecken",
      ourProjects: "Unsere Projekte",
      ourPhilosophy: "Unsere Philosophie",
      craftingLuxurySpaces: "Gestaltung Exklusiver Räume",
      philosophyText: "GENESI ist Ihr zuverlässiger Partner für hochwertige Raumausstattungen. Von maßgefertigten Einzelstücken bis hin zur schlüsselfertigen Projektabwicklung bringen wir italienische Handwerkskunst in erstklassige Hotels, Privatresidenzen und repräsentative Geschäftsräume.",
      featuredCollections: "Ausgewählte Kollektionen",
      discoverLatest: "Entdecken Sie unsere neuesten Entwürfe",
      viewAllCollections: "Alle Kollektionen",
      exploreArrow: "Entdecken →",
      servicesTag: "Leistungen",
      turnkeySolutions: "Schlüsselfertige Lösungen",
      turnkeyText: "Wir bieten vollständige FF&E-Beschaffung, individuelle Schreinerarbeiten und verlässliche Bauleitung. Von der ersten Ideenskizze bis zur finalen Montage garantiert Genesi eine makellose Ausführung.",
      discoverOurServices: "Unsere Leistungen Entdecken"
    },
    About: {
      heroTitle: "Unsere Tradition",
      heroSubtitle: "Tief verwurzelt in der italienischen Handwerkstradition, verbindet GENESI anspruchsvolles Design mit unübertroffener handwerklicher Präzision.",
      storyTitle: "Ein Vermächtnis von Designexzellenz",
      storyP1: "Seit der Gründung leitet uns eine klare Mission: Räume zu erschaffen, die inspirieren. Wahre Eleganz beruht auf dem harmonischen Zusammenspiel von Form und Nutzen, bei dem jedes Material und jedes Detail eine bedeutungsvolle Geschichte erzählt.",
      storyP2: "Unser Ansatz vereint den Charakter traditioneller Handarbeit mit modernen Fertigungstechniken. Von Mailand aus koordinieren wir maßgeschneiderte Vertragsprojekte für anspruchsvollste Auftraggeber auf der ganzen Welt.",
      statMadeInItaly: "100% Hergestellt in Italien",
      statMadeInItalyDesc: "Vollständig in Italien von erfahrenen Handwerksmeistern gefertigt und veredelt.",
      statGlobalProjects: "50+ Internationale Projekte",
      statGlobalProjectsDesc: "Erfolgreich realisierte FF&E-Ausstattungen auf fünf Kontinenten.",
      statBespokeOptions: "Individuelle Maßanfertigung",
      statBespokeOptionsDesc: "Umfassende Gestaltungsspielräume zur Realisierung jeder architektonischen Vision."
    },
    Studio: {
      heroTitle: "Genesi Studio",
      heroSubtitle: "Unser kreatives Kompetenzzentrum, an dem Architektur, Raumdesign und Ingenieurkunst zusammenfinden.",
      hubTag: "Zentrum für Innovation",
      hubTitle: "Wo Visionen Gestalt Annehmen",
      hubP1: "Das GENESI Studio bildet das schöpferische Zentrum unseres Hauses. Hier entwickeln Architekten, Einrichter und Konstrukteure neue Kollektionen und steuern anspruchsvolle Contract-Projekte bis ins Detail.",
      hubP2: "Durch die enge Verzahnung zwischen Entwurfsabteilung und Fertigungswerkstätten gewährleisten wir, dass jede Kreation sowohl ästhetisch fasziniert als auch bautechnisch perfekt auf das Anforderungsprofil abgestimmt ist.",
      statDesigners: "Hauseigene Designer",
      statRendering: "Moderne 3D-Visualisierung",
      quote: "Design ist nicht nur die sichtbare Form. Design bestimmt, wie harmonisch ein Entwurf im Raum funktioniert.",
      quoteAuthor: "— Das Genesi Studio Team"
    },
    Services: {
      headerTitle: "Unser Leistungsspektrum",
      headerSubtitle: "Von der Ausführungsplanung bis zur schlüsselfertigen Übergabe bietet GENESI maßgeschneiderte Lösungen für gehobene Hotel- und Wohnbauprojekte.",
      readyTitle: "Planen Sie ein neues Vorhaben?",
      readySubtitle: "Unsere Objektspezialisten prüfen gern Ihre Planungsunterlagen und erstellen ein fundiertes Angebot.",
      contactTeam: "Team Kontaktieren",
      s01Title: "Möbel nach Maß",
      s01Desc: "Jedes Gebäude ist ein Unikat. Unsere Handwerker und Innenarchitekten stimmen Kollektionsentwürfe exakt auf den Grundriss ab oder entwickeln eigenständige Sonderanfertigungen für Ihr Projekt.",
      s01F1: "Individuelle Maße & Oberflächen",
      s01F2: "Gezielte Materialbeschaffung",
      s01F3: "Musterbau & Prototyping",
      s01F4: "Traditionelles Handwerk",
      s02Title: "FF&E-Beschaffungsmanagement",
      s02Desc: "Wir beherrschen die Anforderungen weltweiter Luxusbeschaffung. Von der Möbelauswahl über das Lieferantenmanagement bis hin zur Qualitätskontrolle fungiert GENESI als Ihr zentraler Ansprechpartner.",
      s02F1: "Lieferantensteuerung",
      s02F2: "Zuverlässige Qualitätssicherung",
      s02F3: "Budgetkontrolle & Optimierung",
      s02F4: "Globale Beschaffungskanäle",
      s03Title: "Schlüsselfertige Gesamtausstattung",
      s03Desc: "Ganzheitliche Betreuung für anspruchsvolle Bauvorhaben. Wir begleiten den gesamten Innenausbau und verwandeln Rohbauten termin- und kostengerecht in bezugsfertige, stilvolle Wohlfühlorte.",
      s03F1: "Projektleitung",
      s03F2: "Grundriss- & Raumplanung",
      s03F3: "Meilensteinüberwachung",
      s03F4: "Fachbauleitung Vor Ort",
      s04Title: "Professionelle Montage & Übergabe",
      s04Desc: "Der krönende Abschluss. Unser Logistikteam stellt den behutsamen Transport sicher und übernimmt mit geschulten Fachmonteuren die millimetergenaue Montage am Einsatzort.",
      s04F1: "Weltweiter Transport",
      s04F2: "White-Glove-Lieferservice",
      s04F3: "Fachgerechte Vor-Ort-Montage",
      s04F4: "Abschließende Dekoration"
    },
    Catalogue: {
      title: "Unsere Kollektionen",
      subtitle: "Entdecken Sie erlesene Designmöbel für alle Lebensbereiche.",
      viewCollection: "Kollektion Anzeigen",
      backToCollections: "← Zurück zur Übersicht",
      productsAvailable: "{count} Produkte verfügbar",
      noProducts: "In dieser Kollektion sind derzeit keine Artikel gelistet.",
      backToCategory: "← Zurück zu {category}",
      materialsFinishes: "Materialien & Oberflächen",
      dimensions: "Abmessungen",
      specifications: "Technische Daten",
      requestQuote: "Angebot Anfordern",
      downloadTearSheet: "Datenblatt Herunterladen"
    },
    Gallery: {
      noImage: "Kein Bild verfügbar",
      frontView: "Frontansicht",
      sideView: "Seitenansicht",
      galleryView: "Gesamtansicht"
    },
    Projects: {
      headerTitle: "Realisierte Projekte",
      headerSubtitle: "Eine Auswahl renommierter Referenzen aus dem Objekt- und Privatbereich. In Zusammenarbeit mit namhaften Architekten schaffen wir kompromisslose Raumqualität.",
      viewProject: "Projekt Ansehen"
    },
    Materials: {
      headerTitle: "Materialien & Veredelungen",
      headerSubtitle: "Wahrer Luxus erschließt sich über die Haptik. Bei GENESI wählen wir jede Oberfläche mit größter Sorgfalt aus, um bleibende Werte zu schaffen.",
      signatureFinishes: "Charakteristische Veredelungen",
      sampleTitle: "Benötigen Sie ein Materialmuster?",
      sampleSubtitle: "Architekten und Gestalter können unsere Musterbox anfordern, um die Oberflächengüte von GENESI unmittelbar zu erleben.",
      requestSample: "Musterbox Anfordern",
      marblesTitle: "Edler Marmor",
      marblesDesc: "Gewonnen in renommierten Brüchen wie Carrara, bestechen unsere Natursteine durch faszinierende Maserungen. Jede Rohplatte wird von Fachleuten selektiert.",
      woodsTitle: "Massivhölzer & Furniere",
      woodsDesc: "Wir verarbeiten ausschließlich Hölzer aus kontrollierter Herkunft. Unsere Furnierbilder werden sorgfältig gespiegelt zusammengesetzt, um harmonische Naturmuster zu erzielen.",
      metalsTitle: "Galvanisch Veredelte Metalle",
      metalsDesc: "Hochwertige galvanische Beschichtungen garantieren langlebige und makellose Oberflächen – von matt gebürstetem Messing bis zu hochglänzendem Chrom.",
      leathersTitle: "Italienisches Echtleder",
      leathersDesc: "Ausgewählte italienische Gerbereien liefern uns erstklassige Vollleder- und Nubukqualitäten, die mit den Jahren an Charakter und natürlicher Schönheit gewinnen."
    },
    Contact: {
      headerTitle: "Kontakt Aufnehmen",
      headerSubtitle: "Ob Sie Details zu unseren Modellen wünschen, eine Sonderanfertigung planen oder ein Großprojekt koordinieren – wir stehen Ihnen gern beratend zur Seite.",
      hqTitle: "Hauptsitz",
      hqName: "Genesi Milano",
      infoTitle: "Erreichbarkeit",
      tradePressTitle: "Geschäftskunden & Presse",
      tradePressDesc: "Für Presseanfragen oder eine Zusammenarbeit im B2B-Bereich schreiben Sie bitte an",
      formTitle: "Nachricht Senden",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail-Adresse",
      inquiryType: "Art der Anfrage",
      selectOption: "Bitte wählen",
      optGeneral: "Allgemeines Anliegen",
      optSales: "Möbelverkauf",
      optContract: "Objektbereich / B2B",
      optPress: "Presse & Medien",
      message: "Ihre Mitteilung",
      submit: "Anfrage Absenden"
    },
    Trade: {
      tag: "Geschützter Bereich",
      welcome: "Willkommen, {name}",
      welcomePartner: "Partner",
      intro: "GENESI unterstützt Planer, Architekten und Bauträger weltweit bei der Ausstattung hochkarätiger Wohn- und Gewerbeobjekte mit maßgeschneiderten Möbeln.",
      cardTitle: "Technische Preisliste 2026",
      cardText: "Laden Sie die technische Übersicht und Preisangaben herunter. Für projektbezogene Sonderkonditionen kontaktieren Sie bitte unseren Vertrieb.",
      downloadButton: "Preisliste als PDF Herunterladen"
    },
    Dashboard: {
      title: "Persönlicher Bereich",
      welcome: "Willkommen, {name}. Dies ist Ihr geschütztes B2B-Portal.",
      welcomePartner: "Partner",
      profileTitle: "Ihr Benutzerprofil",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      tradeMaterialsTitle: "Fachunterlagen",
      tradeMaterialsText: "Nutzen Sie den Downloadbereich für aktuelle Preistabellen und vertrauliche Produktunterlagen.",
      goToDownload: "Zum Downloadbereich",
      ordersTitle: "Angebote & Vorgänge",
      noOrders: "Derzeit liegen keine offenen Angebote vor."
    },
    TearSheet: {
      sku: "ARTIKEL-NR.",
      dimensions: "Abmessungen",
      materialsFinishes: "Materialien & Oberflächen",
      specifications: "Technische Daten",
      description: "Beschreibung"
    }
  },

  ru: {
    Metadata: {
      title: "Официальный сайт Genesi",
      description: "Премиальная мебель, комплектация FF&E, дизайн интерьера и контрактный менеджмент"
    },
    Navigation: {
      about: "О нас",
      studio: "Студия",
      services: "Услуги",
      catalogue: "Каталог",
      projects: "Проекты",
      materials: "Материалы",
      openCatalogue: "Открыть Каталог",
      tradeLogin: "Вход для Профессионалов",
      personalArea: "Личный Кабинет"
    },
    Footer: {
      copyright: "© {year} Официальный сайт Genesi. Все права защищены.",
      tradeB2b: "B2B и Партнерство",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия использования",
      contact: "Контакты"
    },
    Home: {
      heroTitle: "Элегантность в Каждой Детали",
      heroSubtitle: "Элитная мебель, комплексное оснащение FF&E, дизайн интерьеров и управление проектами для эксклюзивных пространств по всему миру.",
      exploreCatalogue: "Смотреть Каталог",
      ourProjects: "Наши Проекты",
      ourPhilosophy: "Наша Философия",
      craftingLuxurySpaces: "Создание Роскошных Интерьеров",
      philosophyText: "GENESI — ваш надежный партнер в реализации интерьерных решений премиум-класса. От мебели индивидуального изготовления до контрактного управления под ключ — мы привносим безупречность итальянского дизайна в отели, резиденции и коммерческие пространства.",
      featuredCollections: "Избранные Коллекции",
      discoverLatest: "Познакомьтесь с новейшими поступлениями",
      viewAllCollections: "Все Коллекции",
      exploreArrow: "Перейти →",
      servicesTag: "Услуги",
      turnkeySolutions: "Решения Под Ключ",
      turnkeyText: "Мы обеспечиваем полный цикл комплектации FF&E, столярные работы по индивидуальным чертежам и проектный контроль. От концепции до финальной установки — Genesi гарантирует безукоризненный результат.",
      discoverOurServices: "Узнать Больше об Услугах"
    },
    About: {
      heroTitle: "Наше Наследие",
      heroSubtitle: "Опираясь на многовековые традиции итальянских мастеров, GENESI создает новый стандарт роскошного образа жизни благодаря передовому дизайну и безупречному исполнению.",
      storyTitle: "Традиции Дизайнерского Мастерства",
      storyP1: "С момента основания GENESI следует неизменной цели: создавать пространства, которые восхищают. Подлинная роскошь заключается в гармонии эстетики и практичности, где каждая линия, материал и фактура имеют свое значение.",
      storyP2: "Наш подход соединяет душу ремесленного мастерства с точностью современных технологий. Из штаб-квартиры в Милане мы управляем коллекциями и ведем масштабные контрактные проекты для самых требовательных клиентов со всего мира.",
      statMadeInItaly: "100% Сделано в Италии",
      statMadeInItalyDesc: "Создано, произведено и отделано исключительно в Италии опытными мастерами.",
      statGlobalProjects: "50+ Международных Проектов",
      statGlobalProjectsDesc: "Реализация комплексных интерьерных решений на пяти континентах.",
      statBespokeOptions: "Индивидуальные Решения",
      statBespokeOptionsDesc: "Неограниченные возможности кастомизации для воплощения любого архитектурного замысла."
    },
    Studio: {
      heroTitle: "Студия Genesi",
      heroSubtitle: "Наш творческий центр, где объединяются архитектурная мысль, дизайн интерьера и инженерное проектирование.",
      hubTag: "Центр Инноваций",
      hubTitle: "Где Рождаются Идеи",
      hubP1: "GENESI Studio — это сердце бренда. Команда архитекторов, дизайнеров интерьера и ведущих инженеров разрабатывает коллекции и руководит инженерной реализацией комплексных проектов.",
      hubP2: "Благодаря непрерывному диалогу между проектным бюро и производственными цехами мы гарантируем, что каждое изделие не только эстетически выразительно, но и конструктивно надежно.",
      statDesigners: "Штатных Дизайнеров",
      statRendering: "3D-Визуализация",
      quote: "Дизайн — это не просто внешний вид и ощущения. Дизайн — это то, как предмет живет и работает в пространстве.",
      quoteAuthor: "— Команда Genesi Studio"
    },
    Services: {
      headerTitle: "Наши Услуги",
      headerSubtitle: "От инженерной проработки до установки на объекте — GENESI предлагает полный спектр услуг для самых взыскательных международных проектов.",
      readyTitle: "Готовы обсудить ваш проект?",
      readySubtitle: "Наши специалисты по контрактным поставкам готовы изучить ваши чертежи и подготовить детализированное предложение.",
      contactTeam: "Связаться с Командой",
      s01Title: "Мебель по Индивидуальному Заказу",
      s01Desc: "Каждое помещение уникально. Наши мастера тесно сотрудничают с архитекторами, чтобы адаптировать модели каталога или спроектировать совершенно новые изделия под ваш интерьер.",
      s01F1: "Индивидуальные Размеры и Отделка",
      s01F2: "Подбор Эксклюзивных Материалов",
      s01F3: "Прототипирование",
      s01F4: "Итальянское Ремесленное Качество",
      s02Title: "Комплектация FF&E",
      s02Desc: "Мы берем на себя все сложности закупок для объектов сегмента люкс. От подбора мебели и оборудования до проверки поставщиков и контроля качества — GENESI выступает вашим единым контактным лицом.",
      s02F1: "Управление Поставщиками",
      s02F2: "Строгий Контроль Качества",
      s02F3: "Оптимизация Бюджета",
      s02F4: "Международные Поставки",
      s03Title: "Контрактные Решения Под Ключ",
      s03Desc: "Комплексное ведение проекта, обеспечивающее полную уверенность. Мы сопровождаем весь процесс оснащения, превращая строительные объемы в готовые к эксплуатации элегантные пространства точно в срок.",
      s03F1: "Управление Проектами",
      s03F2: "Планировка Пространства",
      s03F3: "Контроль Сроков и Этапов",
      s03F4: "Надзор на Объекте",
      s04Title: "Бережная Доставка и Монтаж",
      s04Desc: "Завершающий штрих истинного премиум-сервиса. Наша логистическая служба гарантирует аккуратную транспортировку и профессиональную сборку мебели квалифицированными монтажниками.",
      s04F1: "Международная Логистика",
      s04F2: "Доставка в Белых Перчатках",
      s04F3: "Монтаж на Месте",
      s04F4: "Финальное Оформление"
    },
    Catalogue: {
      title: "Наши Коллекции",
      subtitle: "Ознакомьтесь с эксклюзивной подборкой премиальной итальянской мебели.",
      viewCollection: "Смотреть Коллекцию",
      backToCollections: "← Назад к Коллекциям",
      productsAvailable: "Доступно товаров: {count}",
      noProducts: "В этой коллекции в данный момент нет доступных товаров.",
      backToCategory: "← Назад в раздел {category}",
      materialsFinishes: "Материалы и Отделка",
      dimensions: "Размеры",
      specifications: "Характеристики",
      requestQuote: "Запросить Расчет",
      downloadTearSheet: "Скачать Технический Лист"
    },
    Gallery: {
      noImage: "Изображение отсутствует",
      frontView: "Вид спереди",
      sideView: "Вид сбоку",
      galleryView: "Общий вид"
    },
    Projects: {
      headerTitle: "Наши Проекты",
      headerSubtitle: "Подборка реализованных гостиничных и частных проектов по всему миру. GENESI работает в тандеме с ведущими архитекторами, обеспечивая бескомпромиссное качество.",
      viewProject: "Смотреть Проект"
    },
    Materials: {
      headerTitle: "Материалы и Фактуры",
      headerSubtitle: "Суть подлинной роскоши познается через прикосновение. В GENESI мы тщательно отбираем сырье, создавая произведения мебельного искусства на долгие годы.",
      signatureFinishes: "Фирменные Отделки",
      sampleTitle: "Нужны образцы материалов?",
      sampleSubtitle: "Архитекторы и дизайнеры могут запросить наш демонстрационный кейс с образцами материалов, чтобы оценить качество GENESI лично.",
      requestSample: "Заказать Образцы",
      marblesTitle: "Благородный Мрамор",
      marblesDesc: "Добываемый в лучших карьерах Каррары и других регионов мира, наш мрамор отличается неповторимым рисунком прожилок. Каждая плита отбирается вручную.",
      woodsTitle: "Массив и Шпон Ценных Пород",
      woodsDesc: "Мы используем древесину только из сертифицированных источников. Листы шпона подбираются симметрично, подчеркивая природное великолепие текстуры дерева.",
      metalsTitle: "Гальванические Металлы",
      metalsDesc: "Металлические элементы проходят строгую гальваническую обработку, обеспечивающую безупречную стойкость — от теплой матовой латуни до зеркального хрома.",
      leathersTitle: "Итальянская Натуральная Кожа",
      leathersDesc: "Сотрудничая с лучшими кожевенными мануфактурами Италии, мы предлагаем анилиновую кожу и нубук, которые со временем становятся еще более благородными."
    },
    Contact: {
      headerTitle: "Контакты",
      headerSubtitle: "Хотите узнать больше о коллекции, заказать мебель по индивидуальному эскизу или обсудить контрактный проект? Наша команда к вашим услугам.",
      hqTitle: "Штаб-квартира",
      hqName: "Genesi Milano",
      infoTitle: "Контактные Данные",
      tradePressTitle: "Для Профессионалов и Прессы",
      tradePressDesc: "По вопросам сотрудничества, публикации материалов или участия в партнерской программе пишите на",
      formTitle: "Отправить Сообщение",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Электронная Почта",
      inquiryType: "Тип Запроса",
      selectOption: "Выберите тему",
      optGeneral: "Общий Вопрос",
      optSales: "Покупка Мебели",
      optContract: "Контрактные Поставки / B2B",
      optPress: "Пресса и Медиа",
      message: "Ваше Сообщение",
      submit: "Отправить Запрос"
    },
    Trade: {
      tag: "Закрытый Раздел",
      welcome: "Добро пожаловать, {name}",
      welcomePartner: "Партнер",
      intro: "GENESI сотрудничает с дизайнерами, архитекторами и девелоперами по всему миру, поставляя эксклюзивную мебель для частных и коммерческих объектов.",
      cardTitle: "Технический Прайс-лист 2026",
      cardText: "Скачайте подробный каталог и ориентировочные цены. Для получения специальных партнерских скидок и контрактных расчетов свяжитесь с нашим отделом продаж.",
      downloadButton: "Скачать Прайс-лист (PDF)"
    },
    Dashboard: {
      title: "Личный Кабинет",
      welcome: "Добро пожаловать, {name}. Это ваш персональный B2B-портал.",
      welcomePartner: "Партнер",
      profileTitle: "Ваш Профиль",
      nameLabel: "Имя",
      emailLabel: "Email",
      tradeMaterialsTitle: "Материалы для Профессионалов",
      tradeMaterialsText: "Доступ к актуальным прайс-листам, техническим спецификациям и каталогам для партнеров.",
      goToDownload: "Перейти к Скачиванию",
      ordersTitle: "Заказы и Расчеты",
      noOrders: "В настоящий момент активных расчетов нет."
    },
    TearSheet: {
      sku: "АРТИКУЛ",
      dimensions: "Размеры",
      materialsFinishes: "Материалы и Отделка",
      specifications: "Характеристики",
      description: "Описание"
    }
  },

  zh: {
    Metadata: {
      title: "Genesi 官方网站",
      description: "意式顶级定制家具、FF&E 工程采购、室内空间设计与全流程项目管理"
    },
    Navigation: {
      about: "关于品牌",
      studio: "设计工坊",
      services: "定制服务",
      catalogue: "产品系列",
      projects: "工程案例",
      materials: "材质甄选",
      openCatalogue: "浏览画册",
      tradeLogin: "商用登录",
      personalArea: "个人中心"
    },
    Footer: {
      copyright: "© {year} Genesi 官方网站。保留所有权利。",
      tradeB2b: "B2B 商务合作",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款",
      contact: "联系我们"
    },
    Home: {
      heroTitle: "细节诠释非凡典雅",
      heroSubtitle: "为全球奢华住宅与高端酒店定制顶级家具、FF&E 全案采购与精细化工程交付。",
      exploreCatalogue: "探索产品系列",
      ourProjects: "精选项目案例",
      ourPhilosophy: "品牌哲学",
      craftingLuxurySpaces: "构筑奢华空间",
      philosophyText: "GENESI 是高端室内空间解决方案的卓越合作伙伴。从高级定制家具到交钥匙全案项目统筹，我们把意大利设计的非凡造诣带入全球星级酒店、私人宅邸与商业地标。",
      featuredCollections: "精选系列",
      discoverLatest: "探索最新设计作品",
      viewAllCollections: "浏览全系产品",
      exploreArrow: "探索更多 →",
      servicesTag: "服务体系",
      turnkeySolutions: "交钥匙全案方案",
      turnkeyText: "我们提供涵盖 FF&E 全流程采购、个性化木作定制与全方位工程管理的完整服务，确保从初始概念到最终安装的高标准交付。",
      discoverOurServices: "了解服务体系"
    },
    About: {
      heroTitle: "品牌传承",
      heroSubtitle: "深深植根于意大利传统手工匠艺，GENESI 以创新设计与严苛工艺重新定义现代奢华居住体验。",
      storyTitle: "卓越设计的时代传承",
      storyP1: "自创立伊始，GENESI 便怀揣纯粹愿景：打造富有感染力的空间。真正的奢华蕴藏于美学与功能的和谐统一之中，每一道线条、每一种材质与每处细节皆在倾诉非凡故事。",
      storyP2: "我们将手工匠人的温度与现代精工科技完美融合。立足米兰总部，我们为全球最具品味的客户量身打造典藏系列与大型工程项目。",
      statMadeInItaly: "100% 意大利制造",
      statMadeInItalyDesc: "甄选、打磨与制作全程由意大利资深工匠在本土完成。",
      statGlobalProjects: "50+ 全球地标项目",
      statGlobalProjectsDesc: "横跨五大洲交付高端酒店与顶级私宅的 FF&E 工程。",
      statBespokeOptions: "全方位个性化定制",
      statBespokeOptionsDesc: "提供无限可能的定制方案，精准契合各类建筑设计构想。"
    },
    Studio: {
      heroTitle: "Genesi 设计中心",
      heroSubtitle: "融合建筑思维、室内美学与家具结构工程的创意中枢。",
      hubTag: "创新发源地",
      hubTitle: "让构想化为现实",
      hubP1: "GENESI Studio 是品牌创新的核心引擎。汇聚建筑师、室内设计师与资深结构工程师，主导全系产品的研发构想与大型工程的落地实施。",
      hubP2: "通过设计工作台与制造车间之间的高效协同，我们确保每一件家具不仅具备动人美感，更拥有卓越的结构耐久性与使用体验。",
      statDesigners: "在册资深设计师",
      statRendering: "先进3D渲染技术",
      quote: "设计不仅关乎视觉与触感，更在于它如何在空间之中产生共鸣与生命力。",
      quoteAuthor: "— Genesi Studio 团队"
    },
    Services: {
      headerTitle: "核心服务",
      headerSubtitle: "从深化设计到现场落地安装，GENESI 为全球高标准工程提供全生命周期的专业服务支持。",
      readyTitle: "准备好启动您的空间项目了吗？",
      readySubtitle: "我们的工程顾问团队随时准备审阅您的设计图纸，并提供详尽的项目报价方案。",
      contactTeam: "联系专业团队",
      s01Title: "高级定制家具",
      s01Desc: "每个空间皆独具个性。我们的工匠与设计团队与建筑师保持紧密协作，不仅能微调现有系列，更可量身研发专属家具，完美融入空间设计。",
      s01F1: "定制尺寸与特殊饰面",
      s01F2: "全球严选奢华原材料",
      s01F3: "高精度实物打样",
      s01F4: "意大利手工精工细作",
      s02Title: "FF&E 全球工程采购",
      s02Desc: "我们擅长统筹复杂的跨国奢华采购。从活动家具、灯具软装到供应商协调与品质把控，GENESI 是您一站式可信赖的统筹伙伴。",
      s02F1: "供应链协同管理",
      s02F2: "全程严格质量管控",
      s02F3: "预算统筹与成本优化",
      s02F4: "全球多维采购网络",
      s03Title: "交钥匙全案工程",
      s03Desc: "为大型地产与高端酒店提供安心无忧的交钥匙支持。全程跟进软装施工与陈设落地，将建筑毛坯按期打造成完备优雅的理想空间。",
      s03F1: "专业工程项目管理",
      s03F2: "平面深化与动线规划",
      s03F3: "关键进度节点追踪",
      s03F4: "现场专业技术监理",
      s04Title: "尊享白手套安装",
      s04Desc: "奢华体验的完美收官。我们的专业物流团队严格保障家具长途运输安全，并由熟练技术团队现场精密组装就位。",
      s04F1: "全球点对点物流",
      s04F2: "白手套入户搬运",
      s04F3: "现场专业装配调试",
      s04F4: "空间陈设细节整理"
    },
    Catalogue: {
      title: "全系产品",
      subtitle: "探索我们精心甄选的各类别意大利奢华家具作品。",
      viewCollection: "查看系列",
      backToCollections: "← 返回所有系列",
      productsAvailable: "共 {count} 款可选产品",
      noProducts: "该系列暂无展示产品。",
      backToCategory: "← 返回 {category}",
      materialsFinishes: "材质与饰面",
      dimensions: "产品规格",
      specifications: "技术规格",
      requestQuote: "获取项目报价",
      downloadTearSheet: "下载产品规格书"
    },
    Gallery: {
      noImage: "暂无图片",
      frontView: "正面视角",
      sideView: "侧面视角",
      galleryView: "全景视角"
    },
    Projects: {
      headerTitle: "经典案例",
      headerSubtitle: "精选全球知名酒店与私邸合作案例。GENESI 携手国际顶级建筑设计大师，呈现不妥协的高品质空间。",
      viewProject: "查看项目详情"
    },
    Materials: {
      headerTitle: "材质与表面工艺",
      headerSubtitle: "真正的奢华源自触手可及的细腻。在 GENESI，我们对每寸表面精雕细琢，精选珍稀天然材质缔造恒久传世之作。",
      signatureFinishes: "标志性饰面工艺",
      sampleTitle: "需要索取实物样板？",
      sampleSubtitle: "建筑师与室内设计师可申请我们专属的材质甄选样板盒，亲身感受 GENESI 的非凡品质。",
      requestSample: "申请材质样板盒",
      marblesTitle: "稀世天然大理石",
      marblesDesc: "精选自卡拉拉及全球名矿，每一块天然石材都拥有独一无二的天然纹路与优雅质感，由资深石匠逐一甄选。",
      woodsTitle: "珍贵实木与天然木皮",
      woodsDesc: "全部采用合规开采的优质木材。天然木皮经精准手工对纹拼贴，展现大自然浑然天成的木纹肌理。",
      metalsTitle: "高精电镀工艺金属",
      metalsDesc: "金属构件经过严苛的电镀防氧化处理，呈现经久如新的迷人光泽，涵盖复古拉丝黄铜到高光抛光镀铬。",
      leathersTitle: "意大利顶级头层皮革",
      leathersDesc: "精选意大利顶尖制革工坊的全粒面真皮与磨砂皮，触感柔软丝滑，并随岁月沉淀散发自然温润光泽。"
    },
    Contact: {
      headerTitle: "联系我们",
      headerSubtitle: "无论是咨询现有系列、定制专属家具，还是洽谈大型酒店工程，我们的顾问团队竭诚为您服务。",
      hqTitle: "全球总部",
      hqName: "Genesi 米兰",
      infoTitle: "联系方式",
      tradePressTitle: "商务合作与媒体联络",
      tradePressDesc: "媒体垂询或申请加入我们的设计师商务伙伴计划，请致函",
      formTitle: "在线留言",
      firstName: "名",
      lastName: "姓氏",
      email: "电子邮箱",
      inquiryType: "咨询类别",
      selectOption: "请选择咨询类别",
      optGeneral: "一般咨询",
      optSales: "家具采购",
      optContract: "工装项目 / B2B 合作",
      optPress: "媒体公关",
      message: "留言内容",
      submit: "提交咨询"
    },
    Trade: {
      tag: "专业用户专区",
      welcome: "欢迎您，{name}",
      welcomePartner: "合作伙伴",
      intro: "GENESI 与全球室内设计师、建筑师和地产开发商深度合作，为各类高端住宅与酒店工程打造品质非凡的家具陈设。",
      cardTitle: "2026 技术资料与指导价目表",
      cardText: "下载完整产品技术图册与公开指导价。获取项目专享折扣或定制工程报价，请直接联系我们的销售顾问团队。",
      downloadButton: "下载技术价目表 (PDF)"
    },
    Dashboard: {
      title: "个人中心",
      welcome: "欢迎您，{name}。这是您的专属 B2B 商务平台。",
      welcomePartner: "合作伙伴",
      profileTitle: "个人资料",
      nameLabel: "姓名",
      emailLabel: "邮箱",
      tradeMaterialsTitle: "商用技术资料",
      tradeMaterialsText: "前往下载专区查看最新价格表与 B2B 内部产品技术规格书。",
      goToDownload: "前往资料下载专区",
      ordersTitle: "订单与工程报价",
      noOrders: "暂无进行中的报价记录。"
    },
    TearSheet: {
      sku: "型号",
      dimensions: "产品规格",
      materialsFinishes: "材质与饰面",
      specifications: "技术规格",
      description: "产品描述"
    }
  },

  id: {
    Metadata: {
      title: "Situs Resmi Genesi",
      description: "Furnitur mewah, pengadaan FF&E, desain interior, dan manajemen proyek profesional"
    },
    Navigation: {
      about: "Tentang Kami",
      studio: "Studio",
      services: "Layanan",
      catalogue: "Katalog",
      projects: "Proyek",
      materials: "Material",
      openCatalogue: "Buka Katalog",
      tradeLogin: "Area Bisnis",
      personalArea: "Area Pribadi"
    },
    Footer: {
      copyright: "© {year} Situs Resmi Genesi. Hak cipta dilindungi.",
      tradeB2b: "Area Bisnis & B2B",
      privacyPolicy: "Kebijakan Privasi",
      termsOfService: "Syarat & Ketentuan",
      contact: "Kontak"
    },
    Home: {
      heroTitle: "Keanggunan di Setiap Detail",
      heroSubtitle: "Furnitur premium, pengadaan FF&E, desain interior, dan manajemen proyek untuk ruang mewah di seluruh dunia.",
      exploreCatalogue: "Jelajahi Katalog",
      ourProjects: "Proyek Kami",
      ourPhilosophy: "Filosofi Kami",
      craftingLuxurySpaces: "Menciptakan Ruang Mewah",
      philosophyText: "GENESI adalah mitra tepercaya untuk solusi interior kelas atas. Dari furnitur kustom hingga manajemen proyek kontrak turnkey, kami menghadirkan keunggulan desain Italia ke hotel, hunian, dan ruang komersial bergengsi.",
      featuredCollections: "Koleksi Unggulan",
      discoverLatest: "Temukan koleksi terbaru kami",
      viewAllCollections: "Semua Koleksi",
      exploreArrow: "Jelajahi →",
      servicesTag: "Layanan",
      turnkeySolutions: "Solusi Turnkey",
      turnkeyText: "Kami menyediakan pengadaan FF&E lengkap, pekerjaan kayu kustom, dan manajemen proyek. Dari konsep awal hingga instalasi akhir, Genesi memastikan pelaksanaan yang sempurna.",
      discoverOurServices: "Pelajari Layanan Kami"
    },
    About: {
      heroTitle: "Warisan Kami",
      heroSubtitle: "Berakar pada tradisi keahlian tangan Italia yang abadi, GENESI mendefinisikan ulang kemewahan melalui desain inovatif dan eksekusi tanpa kompromi.",
      storyTitle: "Warisan Keunggulan Desain",
      storyP1: "Sejak awal berdiri, GENESI didorong oleh satu visi utama: menciptakan lingkungan yang menginspirasi. Kami percaya kemewahan sejati lahir dari keharmonisan antara estetika dan fungsionalitas.",
      storyP2: "Pendekatan kami memadukan jiwa keahlian artisanal dengan presisi rekayasa modern. Dari kantor pusat kami di Milan, kami mengkurasi koleksi dan mengelola proyek khusus untuk klien paling menuntut di dunia.",
      statMadeInItaly: "100% Buatan Italia",
      statMadeInItalyDesc: "Didesain, dibuat, dan diselesaikan seluruhnya di Italia oleh perajin ahli.",
      statGlobalProjects: "50+ Proyek Global",
      statGlobalProjectsDesc: "Menghadirkan solusi FF&E turnkey di lima benua.",
      statBespokeOptions: "Pilihan Kustom",
      statBespokeOptionsDesc: "Kemungkinan kustomisasi tanpa batas untuk mewujudkan setiap visi arsitektural."
    },
    Studio: {
      heroTitle: "Genesi Studio",
      heroSubtitle: "Pusat kreatif internal kami tempat bertemunya arsitektur, desain interior, dan rekayasa produk.",
      hubTag: "Pusat Inovasi",
      hubTitle: "Tempat Ide Terwujud",
      hubP1: "GENESI Studio adalah denyut nadi merek kami. Terdiri dari arsitek, desainer interior, dan insinyur ahli, studio ini bertanggung jawab atas perancangan koleksi dan pelaksanaan proyek kontrak turnkey kami.",
      hubP2: "Dengan menjaga komunikasi yang lancar antara meja gambar dan fasilitas produksi, kami memastikan setiap desain tidak hanya memukau secara visual, namun juga sempurna secara struktural.",
      statDesigners: "Desainer Internal",
      statRendering: "Rendering 3D Mutakhir",
      quote: "Desain bukan hanya tentang tampilan dan rasa. Desain adalah tentang bagaimana ia bekerja secara harmonis di dalam ruang.",
      quoteAuthor: "— Tim Genesi Studio"
    },
    Services: {
      headerTitle: "Layanan Kami",
      headerSubtitle: "Dari rekayasa konsep hingga eksekusi sempurna, GENESI menawarkan rangkaian layanan terpadu untuk proyek mewah paling bergengsi.",
      readyTitle: "Siap memulai proyek Anda?",
      readySubtitle: "Tim spesialis kontrak kami siap meninjau rencana arsitektur Anda dan memberikan penawaran menyeluruh.",
      contactTeam: "Hubungi Tim Kami",
      s01Title: "Desain Furnitur Khusus",
      s01Desc: "Setiap ruang memiliki keunikan tersendiri. Para perajin dan desainer internal kami bekerja sama erat dengan arsitek untuk menyesuaikan koleksi atau merancang furnitur baru dari awal.",
      s01F1: "Dimensi & Hasil Akhir Kustom",
      s01F2: "Pengadaan Material Unggulan",
      s01F3: "Pembuatan Prototipe",
      s01F4: "Keahlian Perajin Italia",
      s02Title: "Pengadaan FF&E",
      s02Desc: "Kami mengelola pengadaan barang mewah secara global. Dari pemilihan furnitur terbaik hingga pengendalian mutu, GENESI menjadi satu-satunya titik kontak Anda.",
      s02F1: "Manajemen Vendor",
      s02F2: "Jaminan Mutu Ketat",
      s02F3: "Optimalisasi Anggaran",
      s02F4: "Jaringan Pasokan Global",
      s03Title: "Solusi Kontrak Turnkey",
      s03Desc: "Layanan turnkey kami memberikan ketenangan pikiran untuk proyek skala besar. Kami mengawasi seluruh siklus penataan interior, menghasilkan ruang yang siap digunakan tepat waktu.",
      s03F1: "Manajemen Proyek",
      s03F2: "Perencanaan Ruang",
      s03F3: "Pelacakan Milestone",
      s03F4: "Pengawasan Lapangan",
      s04Title: "Instalasi Sarung Tangan Putih",
      s04Desc: "Sentuhan akhir kemewahan. Tim logistik kami memastikan furnitur diangkut dengan aman dan dipasang di lokasi oleh teknisi berpengalaman dengan ketelitian tinggi.",
      s04F1: "Logistik Global",
      s04F2: "Pengiriman White-Glove",
      s04F3: "Perakitan di Lokasi",
      s04F4: "Penataan Akhir"
    },
    Catalogue: {
      title: "Koleksi Kami",
      subtitle: "Jelajahi pilihan furnitur premium kami di seluruh kategori.",
      viewCollection: "Lihat Koleksi",
      backToCollections: "← Kembali ke Koleksi",
      productsAvailable: "{count} produk tersedia",
      noProducts: "Saat ini tidak ada produk yang tersedia dalam koleksi ini.",
      backToCategory: "← Kembali ke {category}",
      materialsFinishes: "Bahan & Hasil Akhir",
      dimensions: "Dimensi",
      specifications: "Spesifikasi",
      requestQuote: "Minta Penawaran",
      downloadTearSheet: "Unduh Lembar Spesifikasi"
    },
    Gallery: {
      noImage: "Gambar tidak tersedia",
      frontView: "Tampilan depan",
      sideView: "Tampilan samping",
      galleryView: "Tampilan keseluruhan"
    },
    Projects: {
      headerTitle: "Proyek Kami",
      headerSubtitle: "Pilihan proyek hunian dan komersial paling prestisius kami di seluruh dunia. GENESI bermitra dengan arsitek terkemuka untuk menghadirkan kualitas terbaik.",
      viewProject: "Lihat Proyek"
    },
    Materials: {
      headerTitle: "Material & Hasil Akhir",
      headerSubtitle: "Hakikat kemewahan sejati terasa dari sentuhannya. Di GENESI, kami memilih setiap permukaan dengan teliti menggunakan bahan terbaik untuk karya yang abadi.",
      signatureFinishes: "Finishing Khas",
      sampleTitle: "Membutuhkan sampel fisik?",
      sampleSubtitle: "Arsitek dan desainer interior dapat meminta Kotak Material eksklusif kami untuk merasakan langsung kualitas GENESI.",
      requestSample: "Minta Kotak Sampel",
      marblesTitle: "Marmer Berharga",
      marblesDesc: "Berasal dari tambang terbaik di Carrara dan penjuru dunia, marmer kami menawarkan urat alami yang unik dan keanggunan abadi.",
      woodsTitle: "Kayu Solid & Veneer",
      woodsDesc: "Kami hanya menggunakan kayu berkualitas dari sumber berkelanjutan. Veneer kami disusun teliti untuk menciptakan pola serat alami yang harmonis.",
      metalsTitle: "Logam Galvanis",
      metalsDesc: "Komponen logam kami menjalani perawatan galvanis ketat untuk menghasilkan permukaan tahan lama, mulai dari kuningan satin hingga krom mengilap.",
      leathersTitle: "Kulit Asli Italia",
      leathersDesc: "Bekerja sama dengan penyamak kulit terbaik Italia, kami menawarkan kulit full-grain dan nabuk yang semakin menawan seiring berjalannya waktu."
    },
    Contact: {
      headerTitle: "Hubungi Kami",
      headerSubtitle: "Baik Anda ingin menanyakan tentang koleksi, memesan furnitur khusus, atau mendiskusikan proyek hotel, tim kami siap melayani Anda.",
      hqTitle: "Kantor Pusat",
      hqName: "Genesi Milano",
      infoTitle: "Informasi Kontak",
      tradePressTitle: "Mitra Bisnis & Media",
      tradePressDesc: "Untuk pertanyaan media atau bergabung dengan program kemitraan kami, silakan kirim email ke",
      formTitle: "Kirim Pesan",
      firstName: "Nama Depan",
      lastName: "Nama Belakang",
      email: "Alamat Email",
      inquiryType: "Jenis Permintaan",
      selectOption: "Pilih opsi",
      optGeneral: "Pertanyaan Umum",
      optSales: "Penjualan Produk",
      optContract: "Proyek Kontrak / B2B",
      optPress: "Media & Pers",
      message: "Pesan",
      submit: "Kirim Pertanyaan"
    },
    Trade: {
      tag: "Area Khusus Mitra",
      welcome: "Selamat datang, {name}",
      welcomePartner: "Mitra",
      intro: "GENESI bermitra dengan desainer interior, arsitek, dan pengembang di seluruh dunia untuk menghadirkan furnitur mewah bagi proyek residensial dan perhotelan.",
      cardTitle: "Daftar Harga Teknis 2026",
      cardText: "Unduh katalog teknis lengkap dan daftar harga MSRP kami. Untuk diskon mitra dagang dan penawaran proyek khusus, silakan hubungi tim penjualan kami.",
      downloadButton: "Unduh Daftar Harga PDF"
    },
    Dashboard: {
      title: "Area Pribadi",
      welcome: "Selamat datang, {name}. Ini adalah portal B2B pribadi Anda.",
      welcomePartner: "Mitra",
      profileTitle: "Profil Anda",
      nameLabel: "Nama",
      emailLabel: "Email",
      tradeMaterialsTitle: "Materi Bisnis",
      tradeMaterialsText: "Akses area khusus untuk mengunduh daftar harga terbaru dan lembar teknis B2B.",
      goToDownload: "Ke Area Unduhan",
      ordersTitle: "Pesanan & Penawaran",
      noOrders: "Belum ada penawaran aktif."
    },
    TearSheet: {
      sku: "SKU",
      dimensions: "Dimensi",
      materialsFinishes: "Bahan & Hasil Akhir",
      specifications: "Spesifikasi",
      description: "Deskripsi"
    }
  }
};

// WRITE MESSAGES FILES
const messagesDir = path.join(process.cwd(), 'messages');
if (!fs.existsSync(messagesDir)) fs.mkdirSync(messagesDir, { recursive: true });

for (const loc of locales) {
  const filePath = path.join(messagesDir, `${loc}.json`);
  fs.writeFileSync(filePath, JSON.stringify(messages[loc], null, 2), 'utf8');
  console.log(`Saved messages for ${loc}`);
}

// GENERATE REVIEW FILES FOR AUDIT: TRADUZIONI_DA_REVISIONARE_<lingua>.txt
// format: chiave -> testo inglese -> testo tradotto
function flattenKeys(obj, prefix = '') {
  let res = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null) {
      res = res.concat(flattenKeys(v, fullKey));
    } else {
      res.push([fullKey, String(v)]);
    }
  }
  return res;
}

const enFlat = new Map(flattenKeys(messages.en));

for (const loc of ['it', 'fr', 'de', 'ru', 'zh', 'id']) {
  const locFlat = flattenKeys(messages[loc]);
  const lines = [
    `# TRADUZIONI DA REVISIONARE - LINGUA: ${loc.toUpperCase()}`,
    `# Generato automaticamente per il processo di audit e localizzazione GENESI`,
    `# Formato: CHIAVE -> TESTO INGLESE -> TESTO TRADOTTO`,
    `# Totale stringhe interfaccia: ${locFlat.length}`,
    '--------------------------------------------------------------------------------'
  ];

  for (const [key, transVal] of locFlat) {
    const enVal = enFlat.get(key) || '';
    lines.push(`${key} -> ${enVal} -> ${transVal}`);
  }

  const reviewPath = path.join(process.cwd(), `TRADUZIONI_DA_REVISIONARE_${loc}.txt`);
  fs.writeFileSync(reviewPath, lines.join('\n'), 'utf8');
  console.log(`Saved review file: TRADUZIONI_DA_REVISIONARE_${loc}.txt`);
}

console.log('UI Messages generation complete.');
