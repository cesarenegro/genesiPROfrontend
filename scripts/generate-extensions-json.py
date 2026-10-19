import json

hotel_doors = [
    {
        "id": "h-01",
        "slug": "arenaria-oak-hotel-door",
        "name": {
            "it": "Porta Hotel Arenaria in Rovere Naturale",
            "en": "Arenaria Natural Oak Hotel Door"
        },
        "material": {
            "it": "Rovere biondo spazzolato e profili complanari a parete",
            "en": "Brushed natural oak and flush-to-wall profiles"
        },
        "description": {
            "it": "Configurazione coordinata con pannellatura continua e diptych visivo per suite d'albergo.",
            "en": "Coordinated layout with continuous wall panelling for hotel luxury suites."
        },
        "image": "/images/vela/hotel/arenaria-oak-hotel-door-diptych.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Guarnizione di battuta acustica fonoassorbente",
            "Cerniere a scomparsa registrabili",
            "Coordinamento cromatico con boiserie di camera"
        ]
    },
    {
        "id": "h-02",
        "slug": "bronze-framed-espresso-hotel-door",
        "name": {
            "it": "Porta Suite Espresso con Telaio in Bronzo",
            "en": "Bronze-Framed Espresso Suite Door"
        },
        "material": {
            "it": "Rovere tinto espresso e profilo perimetrale in bronzo satinato",
            "en": "Espresso stained oak with satin bronze perimeter frame"
        },
        "description": {
            "it": "Rigore geometrico e contrasto materico per ingressi di grande impatto visivo nei boutique hotel.",
            "en": "Geometric balance and noble contrast for boutique hotel suite entrances."
        },
        "image": "/images/vela/hotel/bronze-framed-espresso-hotel-door.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Telaio metallico a vista con finitura bronzo",
            "Serratura magnetica a scatto silenzioso",
            "Pannello a elevato spessore per isolamento termo-acustico"
        ]
    },
    {
        "id": "h-03",
        "slug": "elegant-green-hotel-door",
        "name": {
            "it": "Porta Camera Forest Green Laccata Opaca",
            "en": "Forest Green Matte Lacquered Hotel Door"
        },
        "material": {
            "it": "Laccatura opaca vellutata e inserti in ottone brunito",
            "en": "Velvet matte lacquer and burnished brass accents"
        },
        "description": {
            "it": "Tonalità botanica sofisticata ideale per hotel di charme immersi nel paesaggio o in dimore storiche.",
            "en": "Sophisticated botanical hue ideal for heritage residences and boutique hotels."
        },
        "image": "/images/vela/hotel/elegant-green-hotel-door.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Trattamento superficiale antigraffio e anti-impronta",
            "Integrazione numero camera inciso o applicato a filo",
            "Abbattimento acustico certificabile per ambienti contract"
        ]
    },
    {
        "id": "h-04",
        "slug": "espresso-oak-rfid-hotel-door",
        "name": {
            "it": "Porta Hotel Espresso con Controllo Accessi RFID",
            "en": "Espresso Oak Door with Integrated RFID Access"
        },
        "material": {
            "it": "Rovere termotrattato e lettore badge RFID a filo complanare",
            "en": "Thermal-treated oak with flush contactless RFID reader"
        },
        "description": {
            "it": "La tecnologia dell'hospitality scompare nella materia: il lettore di prossimità è perfettamente a raso.",
            "en": "Hospitality technology seamlessly hidden: proximity reader integrated flush into the wood."
        },
        "image": "/images/vela/hotel/espresso-oak-door-with-bronze-rfid-detail.webp",
        "width": 1536,
        "height": 1024,
        "features": [
            "Predisposizione per i principali standard di controllo accessi alberghiero",
            "Sensori cablati interni con passaggio cavi nascosto",
            "Finitura coordinata tra piastra lettore e impugnatura"
        ]
    },
    {
        "id": "h-05",
        "slug": "essenza-hotel-door-ash-bronze",
        "name": {
            "it": "Porta Suite Essenza in Frassino e Bronzo",
            "en": "Essenza Ash & Bronze Hotel Suite Door"
        },
        "material": {
            "it": "Frassino nodato spazzolato e profili d'arresto in bronzo naturale",
            "en": "Brushed ashwood with natural bronze architectural stops"
        },
        "description": {
            "it": "Vibrazione calda del legno naturale abbinata alla precisione millimetrica della battuta metallica.",
            "en": "Warm tactile wood vibration combined with millimetric bronze stop precision."
        },
        "image": "/images/vela/hotel/essenza-hotel-door-in-ash-and-bronze.webp",
        "width": 1536,
        "height": 1024,
        "features": [
            "Pannello con tranciato selezionato a fiamma continua",
            "Soglia mobile a ghigliottina a discesa automatica alla chiusura",
            "Cerniere ad asse maggiorato per ante a tutta altezza"
        ]
    },
    {
        "id": "h-06",
        "slug": "fluted-oak-boutique-hotel-door",
        "name": {
            "it": "Porta Camere Cannettata in Rovere Fluted",
            "en": "Fluted Oak Boutique Hotel Door"
        },
        "material": {
            "it": "Lavorazione cannettata tridimensionale su massello di rovere",
            "en": "3D fluted relief carved on solid oak surface"
        },
        "description": {
            "it": "Filtro tattile e acustico: il ritmo del cannettato genera profondità e giochi di luce lungo i corridoi.",
            "en": "Tactile relief adding rhythm, shadow lines, and depth to hotel corridor elevations."
        },
        "image": "/images/vela/hotel/fluted-oak-boutique-hotel-door.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Fresatura a passo regolare con bordatura continua",
            "Presa ergonomica verticale ricavata nel cannettato",
            "Disponibile in versione naturale, moka o laccata"
        ]
    },
    {
        "id": "h-07",
        "slug": "italian-walnut-bronze-hotel-door",
        "name": {
            "it": "Porta Suite in Noce Canaletto con Intarsio in Bronzo",
            "en": "Italian Walnut Hotel Door with Bronze Inlay"
        },
        "material": {
            "it": "Noce canaletto naturale fiammato e profilo intarsiato in bronzo",
            "en": "Natural Italian walnut with flush inlaid bronze line"
        },
        "description": {
            "it": "La maestria dell'ebanisteria italiana incontra il rigore delle commesse contract a cinque stelle.",
            "en": "Italian cabinet-making craftsmanship meeting the demands of five-star luxury developments."
        },
        "image": "/images/vela/hotel/italian-walnut-hotel-door-with-bronze-inlay.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Intarsio metallico continuo complanare alla levigatura",
            "Guarnizioni perimetrali a tenuta fumo e aria",
            "Predisposizione per chiudiporta idraulico a scomparsa"
        ]
    },
    {
        "id": "h-08",
        "slug": "limestone-guestroom-door",
        "name": {
            "it": "Porta Corridoio Hotel Pietra & Limestone",
            "en": "Limestone Corridor Guestroom Door"
        },
        "material": {
            "it": "Superficie materica pietra calcarea e stipite metallico complanare",
            "en": "Textured limestone finish with flush metallic jamb"
        },
        "description": {
            "it": "Progettata per integrarsi con i rivestimenti murari in pietra o gres dei corridoi illuminati a radente.",
            "en": "Conceived to blend with stone-clad hotel corridors with grazing architectural lighting."
        },
        "image": "/images/vela/hotel/limestone-guestroom-door-in-a-sunlit-corridor.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Finitura minerale resistente all'usura e agli urti",
            "Serratura con incontro magnetico per azzerare il rumore di scatto",
            "Complanarità totale con l'imbotte muraria"
        ]
    },
    {
        "id": "h-09",
        "slug": "warm-oak-luxury-hotel-entrance",
        "name": {
            "it": "Ingresso Suite Warm Oak con Portale Architetturale",
            "en": "Warm Oak Luxury Hotel Suite Entrance"
        },
        "material": {
            "it": "Rovere biondo miele con portale sagomato coordinato",
            "en": "Honey oak with coordinated architectural deep portal"
        },
        "description": {
            "it": "Un vero e proprio portale d'ingresso alla suite che nobilita il corridoio e crea una zona di rispetto.",
            "en": "A generous architectural portal framing the suite doorway to elevate the guest arrival."
        },
        "image": "/images/vela/hotel/warm-oak-luxury-hotel-entrance.webp",
        "width": 1122,
        "height": 1402,
        "features": [
            "Portale a sguancio svasato con illuminazione LED indiretta integrabile",
            "Pannello porta a filo con guarnizioni fonoassorbenti",
            "Coordinamento con le boiserie e gli armadi interni camera"
        ]
    }
]

residential_doors = [
    {
        "id": "r-01",
        "slug": "bruma-greige-pivot-door",
        "name": {
            "it": "Porta a Bilico Bruma Greige",
            "en": "Bruma Greige Pivot Door"
        },
        "material": {
            "it": "Laccatura satinata greige e perno pivot a scomparsa",
            "en": "Satin greige lacquer with concealed pivot hinge"
        },
        "description": {
            "it": "Proporzioni maestose e apertura a bilico con rotazione fluida e ammortizzata.",
            "en": "Stately proportions and smooth dampened pivot rotation."
        },
        "image": "/images/vela/residential/bruma-greige-pivot-door-detail-diptych.webp",
        "width": 1536,
        "height": 1024,
        "features": ["Rotazione pivot senza battuta a pavimento", "Laccatura multistrato setosa al tatto", "Apertura bidirezionale con fermo"]
    },
    {
        "id": "r-02",
        "slug": "burnt-sienna-double-doors",
        "name": {
            "it": "Doppia Porta Burnt Sienna in Travertino",
            "en": "Burnt Sienna Double Doors in Travertine"
        },
        "material": {
            "it": "Finitura terra di Siena bruciata e portale in travertino naturale",
            "en": "Burnt sienna finish framed by natural travertine portal"
        },
        "description": {
            "it": "Due ante imponenti che dialogano con la pietra naturale e l'architettura classica contemporanea.",
            "en": "Dual symmetrical leaves conversing with architectural stone and classical contemporary aesthetics."
        },
        "image": "/images/vela/residential/burnt-sienna-double-doors-in-travertine.webp",
        "width": 1122,
        "height": 1402,
        "features": ["Chiusura a battuta centrale micrometrica", "Accoppiamento con stipiti in pietra naturale", "Maniglioni complanari a tutta altezza"]
    },
    {
        "id": "r-03",
        "slug": "satin-bronze-reeded-glass-door",
        "name": {
            "it": "Porta Vetrata in Cristallo Cannettato e Bronzo",
            "en": "Satin Bronze Reeded Glass Door"
        },
        "material": {
            "it": "Cristallo temperato cannettato e telaio in bronzo satinato",
            "en": "Tempered reeded glass and satin bronze structural frame"
        },
        "description": {
            "it": "Filtra la luce naturale tutelando la privacy visiva tra living, cucina e studio.",
            "en": "Diffuses natural daylight while preserving privacy between living, dining, and work zones."
        },
        "image": "/images/vela/residential/satin-bronze-reeded-glass-door.webp",
        "width": 1122,
        "height": 1402,
        "features": ["Cristallo di sicurezza a isolamento acustico", "Profilo metallico minimale a sezione rastremata", "Disponibile battente o scorrevole"]
    },
    {
        "id": "r-04",
        "slug": "graphite-pivot-door-brass",
        "name": {
            "it": "Porta a Bilico Grafite con Dettaglio in Ottone",
            "en": "Graphite Pivot Door with Brass Detail"
        },
        "material": {
            "it": "Legno tinto grafite spazzolato e terminale in ottone spazzolato",
            "en": "Brushed graphite oak with brushed brass edging"
        },
        "description": {
            "it": "Fascino scultoreo per residenze private e attici contemporanei.",
            "en": "Sculptural presence tailored for contemporary private residences and penthouses."
        },
        "image": "/images/vela/residential/graphite-pivot-door-with-brass-detail.webp",
        "width": 1122,
        "height": 1402,
        "features": ["Perno decentrato con raggio d'azione regolabile", "Dettaglio di battuta in ottone massiccio", "Tiranti interni antincurvamento"]
    },
    {
        "id": "r-05",
        "slug": "fluted-oak-serene-passage",
        "name": {
            "it": "Porta a Scomparsa Cannettata Serene Passage",
            "en": "Fluted Oak Pocket Door"
        },
        "material": {
            "it": "Rovere biondo lavorato a cannettato verticale",
            "en": "Natural honey oak with delicate vertical fluting"
        },
        "description": {
            "it": "Scompare all'interno del controtelaio lasciando il vano libero e pulito.",
            "en": "Slides quietly into the wall subframe to leave the passageway open and uncluttered."
        },
        "image": "/images/vela/residential/fluted-oak-door-serene-passage.webp",
        "width": 1122,
        "height": 1402,
        "features": ["Scorrimento silenzioso su cuscinetti in teflon", "Presa a conchiglia a filo cannettato", "Assenza totale di binari a pavimento"]
    },
    {
        "id": "r-06",
        "slug": "warm-bronze-door-modern",
        "name": {
            "it": "Porta Complanare Warm Bronze",
            "en": "Warm Bronze Architectural Door"
        },
        "material": {
            "it": "Lamina metallica bronzata e bordo battuta in massello scuro",
            "en": "Warm bronzed metallic face with dark hardwood edge"
        },
        "description": {
            "it": "Riflessi metallici cangianti che mutano intensità a seconda dell'illuminazione naturale e artificiale.",
            "en": "Subtle metallic reflections shifting gracefully under daylight and warm ambient lighting."
        },
        "image": "/images/vela/residential/warm-bronze-door-modern-elegance.webp",
        "width": 1122,
        "height": 1402,
        "features": ["Superficie metallica protetta con finitura nano-ceramica", "Maniglia rettilinea integrata a filo", "Complanarità a spingere o a tirare"]
    }
]

handles = [
    {
        "id": "han-01",
        "slug": "quadro-steel-lever",
        "name": {
            "it": "Maniglia a Leva Quadro Steel",
            "en": "Quadro Steel Lever Handle"
        },
        "type": "lever",
        "material": {
            "it": "Acciaio satinato AISI 316 e rosetta minimale a filo",
            "en": "Satin stainless steel AISI 316 with ultra-flat rose"
        },
        "description": {
            "it": "Geometria ortogonale pura ed ergonomia rigorosa. Il ritorno a molla calibrato assicura una tenuta orizzontale impeccabile nel tempo.",
            "en": "Pure orthogonal geometry with balanced ergonomics. Internal calibrated spring ensuring long-term horizontal perfection."
        },
        "image": "/images/vela/handles/quadro-steel-lever-and-oak-panel.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte battenti per interni e hotel",
        "finishes": ["Acciaio satinato", "Nero opaco soft-touch", "Ottone naturale spazzolato"]
    },
    {
        "id": "han-02",
        "slug": "bronze-brushed-lever",
        "name": {
            "it": "Maniglia a Leva in Bronzo Spazzolato",
            "en": "Brushed Bronze Lever Handle"
        },
        "type": "lever",
        "material": {
            "it": "Bronzo massiccio forgiato e spazzolato a mano",
            "en": "Solid forged bronze hand-brushed to architectural satin finish"
        },
        "description": {
            "it": "Materia calda e viva: la finitura spazzolata a mano conferisce un tocco setoso e riflessi profondi che dialogano con essenze lignee nobili.",
            "en": "Warm tactile metal with hand-brushed satin reflections complementing precious architectural woods."
        },
        "image": "/images/vela/handles/bronze-handle-and-brushed-metal-finish.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte battenti residenziali e suite hotel",
        "finishes": ["Bronzo satinato", "Bronzo scuro anticato", "Canna di fucile"]
    },
    {
        "id": "han-03",
        "slug": "bronze-pull-fluted-oak",
        "name": {
            "it": "Maniglione a Barra per Rovere Cannettato",
            "en": "Bronze Pull for Fluted Oak Doors"
        },
        "type": "pull",
        "material": {
            "it": "Bronzo architettonico con fissaggio passante a scomparsa",
            "en": "Architectural bronze bar with concealed through-fixing"
        },
        "description": {
            "it": "Maniglione verticale sagomato per integrarsi alla perfezione nelle scanalature delle ante cannettate o a doghe.",
            "en": "Vertical pull bar designed specifically to seat into the grooves of fluted and relief door panels."
        },
        "image": "/images/vela/handles/bronze-pull-and-fluted-oak-detail.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte a bilico pivot e scorrevoli a tutta altezza",
        "finishes": ["Bronzo chiaro", "Bronzo bruno", "Ottone grezzo cerato"]
    },
    {
        "id": "han-04",
        "slug": "bronze-pull-reeded-glass",
        "name": {
            "it": "Maniglione Lineare per Ante in Cristallo",
            "en": "Linear Bronze Pull for Glass Doors"
        },
        "type": "pull",
        "material": {
            "it": "Bronzo trafilato a sezione quadrata con rosette in gomma neutra",
            "en": "Drawn square-section bronze with neutral vibration gaskets"
        },
        "description": {
            "it": "Fissaggio sicuro a doppio punto attraverso il cristallo temperato, concepito per porte vetrate scorrevoli o a bilico.",
            "en": "Two-point secure through-glass mounting engineered for sliding and pivot reeded glass doors."
        },
        "image": "/images/vela/handles/bronze-pull-and-reeded-glass-detail.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte in vetro cannettato, box doccia e partizioni",
        "finishes": ["Bronzo satinato", "Acciaio inox lucido", "Nero anodizzato"]
    },
    {
        "id": "han-05",
        "slug": "seta-door-pull-groove",
        "name": {
            "it": "Presa d'Apertura a Gola Seta",
            "en": "Seta Recessed Opening Groove"
        },
        "type": "recessed",
        "material": {
            "it": "Fresatura a filo nel massello con profilo metallico protettivo interno",
            "en": "Direct flush milling with integrated protective metallic liner"
        },
        "description": {
            "it": "Azzeramento totale di ogni elemento sporgente. La mano trova alloggiamento naturale nella gola sagomata sul bordo dell'anta.",
            "en": "Complete eradication of protruding hardware: the hand fits naturally into the recessed contoured edge groove."
        },
        "image": "/images/vela/handles/seta-door-pull-and-groove.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte scorrevoli a scomparsa e partizioni complanari",
        "finishes": ["Interno gola laccato", "Profilo in ottone brunito", "Profilo bronzo"]
    },
    {
        "id": "han-06",
        "slug": "ombra-fluted-oak-brass-pull",
        "name": {
            "it": "Maniglione Integrato Ombra in Ottone",
            "en": "Ombra Fluted Brass & Oak Pull"
        },
        "type": "pull",
        "material": {
            "it": "Ottone satinato spazzolato e rovere termocotto",
            "en": "Satin brushed brass seated against thermo-treated oak"
        },
        "description": {
            "it": "Raccordo armonico tra l'oro caldo dell'ottone e i toni bruni del legno smoked, ideale per ambienti residenziali di rappresentanza.",
            "en": "Harmonious balance between the warm gold of brass and deep tones of smoked wood."
        },
        "image": "/images/vela/handles/ombra-door-details--fluted-oak-and-brass.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte a bilico scenografiche e ingressi padronali",
        "finishes": ["Ottone dorato satinato", "Ottone brunito", "Canna di fucile"]
    },
    {
        "id": "han-07",
        "slug": "senso-hotel-door-hardware",
        "name": {
            "it": "Sistema Senso con Serratura Magnetica a Filo",
            "en": "Senso Flush Magnetic Lock & Hardware"
        },
        "type": "hardware",
        "material": {
            "it": "Scatola serratura magnetica con frontale a raso e leva calibrata",
            "en": "Magnetic flush latch casing with ultra-slim faceplate"
        },
        "description": {
            "it": "Scatto silenzioso azionato da magneti permanenti al neodimio. La linguetta esce solo ad anta accostata, eliminando attriti e strisciamenti.",
            "en": "Silent magnetic latch activated only when door is aligned: zeroes frictional latch drag and noise."
        },
        "image": "/images/vela/handles/senso-hotel-door-hardware-details.webp",
        "width": 1122,
        "height": 1402,
        "compatibility": "Porte hotel, suite e zone notte residenziali",
        "finishes": ["Bronzo opaco", "Cromo satinato", "Nero titanio"]
    },
    {
        "id": "han-08",
        "slug": "italian-hotel-rfid-lock",
        "name": {
            "it": "Serratura Elettronica RFID per Hotel d'Autore",
            "en": "Architectural Electronic RFID Hotel Lock"
        },
        "type": "hardware",
        "material": {
            "it": "Piastra complanare in ottone con transponder contactless a scomparsa",
            "en": "Flush brass faceplate with concealed contactless RFID transponder"
        },
        "description": {
            "it": "L'elettronica alberghiera più evoluta custodita in una placca in metallo nobile complanare alla venatura del legno.",
            "en": "Advanced hospitality contactless intelligence enclosed inside a noble metal plate flush with the wood grain."
        },
        "image": "/images/vela/handles/italian-hotel-lock-and-oak-elegance.webp",
        "width": 1774,
        "height": 887,
        "compatibility": "Camere hotel, resort di lusso e residenze gestite",
        "finishes": ["Ottone satinato", "Bronzo scuro", "Acciaio naturale"]
    }
]

data = {
    "hotelDoors": hotel_doors,
    "residentialDoors": residential_doors,
    "handles": handles
}

with open(r"e:\Projects\GENESI FRONTEND\genesi-web\src\data\vela-extensions.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Generated vela-extensions.json successfully!")
