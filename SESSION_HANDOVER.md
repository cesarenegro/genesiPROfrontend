# SESSION HANDOVER — GENESI & VELA FRONTEND
**Data:** 5 Novembre 2026  
**Workspace:** `E:\Projects\GENESI FRONTEND`  
**Dominio Standard Produzione Vercel Attivo:** https://genesi-pro.vercel.app (e https://genesi-pr-ofrontend.vercel.app)  
**Stato Git:** Branch `main` (Deploy Vercel aggiornato e verificato).

---

## 1. Sintesi dei Lavori Eseguiti nella Sessione

### A. Catalogo Hospitality A4 & Listino Prezzi Tecnico (COMPLETATI E APPROVATI AL 100%)
- **Data Auditing & Normalizzazione Metrica**:
  - Incrociati 80/80 SKU (100% match) tra `MASTER EXCEL GENESI PL - DIMENSIONS AUDITED.xlsx` (94.2 MB) e `PRODUCT_COPY.csv` / `PAGE_PLAN.csv`.
  - Eliminati tutti i placeholder provvisori `[DIMENSIONS REQUIRED]` e `[INFERRED]`.
  - Inserite dimensioni metriche reali e certificate (`W × D × H cm`), descrizioni editoriali in stile hospitality di lusso, capitolati materiali e finiture.
- **Catalogo A4 Verticale Super-Premium (`GENESI_COLLECTION_2026_FINAL.pdf`)**:
  - **108 Pagine A4 a 300 DPI (2480 × 3508 px)** generate e compilate con Pillow e ReportLab.
  - Percorso: [`GENESI CATALOGUE HOTEL/FURNITURE_CATALOGUE/07_OUTPUT/PDF/GENESI_COLLECTION_2026_FINAL.pdf`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/FURNITURE_CATALOGUE/07_OUTPUT/PDF/GENESI_COLLECTION_2026_FINAL.pdf) (Dimensione: **39.7 MB**).
  - Struttura:
    - Pag. 01: Copertina editoriale con render master, travertino e palette espresso.
    - Pag. 02: 01 / APPROACH brand intro e 4 principi cardine dell'architettura Genesi.
    - Pagg. 03-06: Sezione FINISHING completa con campionari UMA ad alta definizione: Legni (Teak Honey, Oiled, Natural, Weathered, Wenge, Grey), Metalli (Dark Bronze, Anthracite, Chrome, Black Matt, White), Marmi & Pietre (Carrara, Nero Marquina, Travertino Navona), Tessuti (Sunproof, Sunbrella, Jim Thompson).
    - Pag. 07: 02 / CONTENTS indice generale con rimandi esatti alle pagine.
    - 18 Opener di Categoria con fotografia a tutta pagina per ciascun gruppo d'arredo.
    - 80 Pagine Singole Prodotto con doppia vista (Hero prospettica + Ortopedica laterale/dettaglio), riquadro dimensioni auditate, concept note e palette materiali.
    - Pagg. 106-108: Riepilogo finiture, contatti divisione contract e retrocopertina.
  - Manifest e Anteprime: 108 preview JPG salvate in `07_OUTPUT/PREVIEWS/` e manifest [`PAGE_MANIFEST_FINAL.csv`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/FURNITURE_CATALOGUE/07_OUTPUT/MANIFESTS/PAGE_MANIFEST_FINAL.csv).
  - Script dedicato: [`build_super_premium_catalogue.py`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/09_SCRIPTS/build_super_premium_catalogue.py).
- **Listino Prezzi & Schede Tecniche (`GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf`)**:
  - **86 Pagine A4 a 300 DPI** conformi al layout campione `GENESI_TECHNICAL_PRICE_LIST_2026_SAMPLE.pdf`.
  - Percorso: [`GENESI CATALOGUE HOTEL/PRICE_LIST/07_OUTPUT/PDF/GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/PRICE_LIST/07_OUTPUT/PDF/GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf) (Dimensione: **37.9 MB**).
  - Struttura:
    - Pag. 01: Copertina tecnica con cornice architettonica a doppio filo e note di capitolato.
    - Pag. 02: Struttura del documento (01 Identità, 02 Viste ortogonali, 03 Dati tecnici, 04 Dati commerciali).
    - Pagg. 03-06: Tabella Master Index con tutti gli 80 prodotti, codici SKU, categorie, quote metriche auditate e status contract tender.
    - 80 Schede Tecniche di Prodotto individuali con vista frontale + vista profilo/dettaglio in card tecnica chiara, matrice delle specifiche (Dimensioni verificate, Materiali, Finiture, Prezzo a richiesta/tender, Lead time 8-10 settimane), e banner ufficiale di capitolato.
  - Manifest e Anteprime: 86 preview JPG salvate in `PRICE_LIST/07_OUTPUT/PREVIEWS/` e manifest [`PRICE_LIST_OUTPUTS.csv`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/PRICE_LIST/07_OUTPUT/MANIFESTS/PRICE_LIST_OUTPUTS.csv).
  - Script dedicato: [`build_super_premium_price_list.py`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/09_SCRIPTS/build_super_premium_price_list.py).
- **Report di Conformità Aggiornato**:
  - [`FINAL_QA_REPORT.md`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/FURNITURE_CATALOGUE/07_OUTPUT/FINAL_QA_REPORT.md) aggiornato a **STATUS = APPROVED / FINAL**.

---

### B. Box Doccia & Pareti in Cristallo VELA (COMPLETATO AL 100%)
- **Censimento & Conversione Asset (56 Master TIFF/JPG)**:
  - 23 serie censite dalla cartella di lavoro `BOX DOCCIA/`.
  - Convertite in WebP reattivi ottimizzati in [`genesi-web/public/images/vela/box-doccia/`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/public/images/vela/box-doccia/).
- **Master File CSV Sincronizzato**:
  - Aggiunti 103 record conformi allo standard in [`WEB PORTE/MASTER FILE.CSV`](file:///E:/Projects/GENESI%20FRONTEND/WEB%20PORTE/MASTER%20FILE.CSV) e [`genesi-web/src/data/MASTER_FILE.csv`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/data/MASTER_FILE.csv).
  - Nessuna incoerenza visiva: cristalli e box doccia confinati unicamente alla sezione wellness/bagno.
- **Data Layer & TypeScript**:
  - Creato [`vela-box-doccia.json`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/data/vela-box-doccia.json) (23 serie, spessori 8/10 mm, trattamenti nano-ceramici CleanGlass, finiture metallo coordinate VELA, quote massime e descrizioni bilingue).
  - Aggiornato [`vela.ts`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/lib/vela.ts) con interfaccia `VelaShowerEnclosure` e loader `getVelaShowerEnclosures()`.
- **Componenti Frontend Realizzati**:
  - [`VelaShowerCard.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaShowerCard.tsx): card con switch rapido **"Ambient" ↔ "2D CAD"**, badge serie/categoria, indicatore spessore vetro, pill finiture e trattamento CleanGlass.
  - [`VelaShowerModal.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaShowerModal.tsx): modal con galleria completa miniature (ambientale, prospetto 2D, dettagli cerniere/profili), tabella specifiche tecniche complete e CTA capitolato.
  - [`VelaShowerTechnicalGuide.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaShowerTechnicalGuide.tsx): guida per progettisti con 4 standard ingegneristici (Vetro 8/10 mm, CleanGlass Nano-Tech, profili a scomparsa, cinematica soft-close).
  - [`VelaShowerSection.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaShowerSection.tsx): toolbar con filtri per categoria (Bilico, Scorrevoli, Walk-In, Soffietto, Nicchia, Isola), filtro rapido spessore (8mm / 10mm / All) e ricerca real-time per codice/nome.
- **Pagina Hub Aggiornata**:
  - [`genesi-web/src/app/[locale]/vela/box-doccia/page.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/vela/box-doccia/page.tsx) collegata all'hero box doccia reale (`01_P+G4.webp`), alla griglia reattiva e ai dettagli macro.
- **Collaudo Build**:
  - `npm run build` eseguito con **0 errori** su tutte le route.

---

### C. Ferramenta Architetturale & Serrature High-End (COMPLETATO AL 100%)
- 17 modelli europei top di gamma catalogati in [`FERRAMENTA/`](file:///E:/Projects/GENESI%20FRONTEND/FERRAMENTA) con schede tecniche PDF ufficiali.
- 4 render fotorealistici in-situ 4K generati e integrati.
- Componenti [`VelaHardwareCard.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaHardwareCard.tsx), [`VelaHardwareSection.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaHardwareSection.tsx), [`VelaHardwareTable.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/vela/VelaHardwareTable.tsx) integrati nella pagina [`/vela/maniglie`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/vela/maniglie/page.tsx).

---

### D. Catalogo Monografico VELA 2026 (A4 Verticale Super-Premium v2.0 — COMPLETATO 100%)
- **Catalogo Monografico Indipendente per il Brand VELA**:
  - **80 Pagine A4 a 300 DPI (`2480 × 3508 px`)** generate e compilate con Pillow e ReportLab.
  - Percorsi:
    - [`VELA_CATALOGUE/07_OUTPUT/PDF/VELA_COLLECTION_2026_SUPER_PREMIUM.pdf`](file:///E:/Projects/GENESI%20FRONTEND/VELA_CATALOGUE/07_OUTPUT/PDF/VELA_COLLECTION_2026_SUPER_PREMIUM.pdf) (Dimensione: **75.4 MB**).
    - [`GENESI CATALOGUE HOTEL/FURNITURE_CATALOGUE/VELA_COLLECTION_2026_SUPER_PREMIUM_v2.pdf`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/FURNITURE_CATALOGUE/VELA_COLLECTION_2026_SUPER_PREMIUM_v2.pdf)
  - **Revisioni Architetturali & Tipografiche v2.0**:
    1. **Copertina Full-Bleed & Logo Centrale**: Fotografia monografica continua a tutta pagina (Burnt Sienna double doors in travertino), logo ufficiale `VELA by Genesi` perfettamente centrato con ombreggiatura tridimensionale naturale, dicitura in basso in maiuscolo spaziato `"SISTEMI PORTE E BOX DOCCIA"`.
    2. **Fotografia a Tutta Larghezza (2200 px)**: Layout riprogettato con hero shot monumentale superiore e testi/schede tecniche posizionati sotto su due colonne bilanciate.
    3. **Tipografia Maggiorata (+60-80%)**: Titoli da 76-92 px, corpi testo da 38-46 px, tabelle da 30-34 px per massima leggibilità a 300 DPI.
    4. **Zero Duplicati Ferramenta**: Rimozione delle immagini duplicate (pagg. 68, 71, 72, 73, 74, 75) con layout a singola immagine centrale a tutta larghezza.
    5. **Retrocopertina (Pagina 80)**: Marchio VELA da 140 px e testi di chiusura perfettamente centrati e giustificati.
  - Manifest e Anteprime: 80 preview JPG ad alta risoluzione salvate in `VELA_CATALOGUE/07_OUTPUT/PREVIEWS/` e tracciate in [`VELA_PAGE_MANIFEST.csv`](file:///E:/Projects/GENESI%20FRONTEND/VELA_CATALOGUE/07_OUTPUT/MANIFESTS/VELA_PAGE_MANIFEST.csv).
  - Script dedicato: [`build_vela_super_premium_catalogue.py`](file:///E:/Projects/GENESI%20FRONTEND/VELA_CATALOGUE/09_SCRIPTS/build_vela_super_premium_catalogue.py).

---

### E. Master Excel Price List VELA 2026 (COMPLETATO 100%)
- **Listino Prezzi & Calcolatore Tender Ufficiale**:
  - Percorsi:
    - [`GENESI CATALOGUE HOTEL/FURNITURE_CATALOGUE/MASTER EXCEL VELA PRICE LIST 2026.xlsx`](file:///E:/Projects/GENESI%20FRONTEND/GENESI%20CATALOGUE%20HOTEL/FURNITURE_CATALOGUE/MASTER%20EXCEL%20VELA%20PRICE%20LIST%202026.xlsx)
    - [`VELA_CATALOGUE/07_OUTPUT/EXCEL/MASTER EXCEL VELA PRICE LIST 2026.xlsx`](file:///E:/Projects/GENESI%20FRONTEND/VELA_CATALOGUE/07_OUTPUT/EXCEL/MASTER%20EXCEL%20VELA%20PRICE%20LIST%202026.xlsx)
  - 8 Fogli di Lavoro Completamente Formattati (Palette Oro Caldo, Bronzo & Espresso):
    1. `00_INDICE & GUIDA`: Indice capitoli, condizioni commerciali contract, sconti scala e lead time.
    2. `01_PORTE RESIDENZIALI`: 14 SKU (R-01..R-14) con prezzi base luce standard, supplementi altezza fino a 3200 mm e finiture PVD.
    3. `02_PORTE HOTEL`: 13 SKU (H-01..H-13) con acustica 38/44 dB, tagliafuoco EI30/EI60 e predisposizione RFID.
    4. `03_BOX DOCCIA`: 23 Serie complete con prezzi cristallo 8/10 mm, CleanGlass e profili a terra.
    5. `04_FERRAMENTA & SMART`: 17 Sistemi europei (Simonswerk, AGB, ekey, SimonsVoss, tedee, VingCard, Olivari, Formani).
    6. `05_MATERIOTECA`: Supplementi percentuali e al mq per essenze lignee termocotte, metalli PVD e marmi scanalati.
    7. `06_VANI MURARI`: Quote controtelaio, luce passaggio netta e tolleranze di posa.
    8. `07_CALCOLATORE_TENDER`: Preventivatore interattivo con formule live Excel (`SUM`, `SUMPRODUCT`, sconti quantità, imballo cassa legno e totale imponibile).

---

### F. Aggiornamenti Sessione 5 Novembre 2026 (Vercel Production, Clerk Auth, VELA Gate, Favicon & Area Riservata 3×3)
- **1. Dominio Standard Vercel & Deploy in Produzione**:
  - Configurato e attivato sul progetto Vercel `genesi-pr-ofrontend` (`prj_nynZDdRAmClJEDp2CY4RvdLsbfSz`) il dominio standard pulito: **https://genesi-pro.vercel.app** (in attesa dell'attivazione DNS di `genesi-pro.com` su Cloudflare).
- **2. Ripristino Autenticazione Clerk (Sign-In & Trade Login)**:
  - Sostituite su Vercel (e in `.env` / `.env.local`) le chiavi `pk_live_`/`sk_live_` (che puntavano al dominio non ancora attivo `accounts.genesi-pro.com`) con le chiavi Clerk standard funzionanti (`polished-kiwi-32.accounts.dev`).
  - Il pulsante **Trade Login** nell'header e il redirect protetto su `/trade` e `/dashboard` aprono regolarmente la schermata di login.
- **3. Sezione VELA Oscurata con Pagina Standard `"UNDER DEVELOPMENT"`**:
  - Aggiunto il flag [`FEATURE_VELA_UNDER_DEVELOPMENT = true`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/lib/features.ts) (riattivabile impostando `NEXT_PUBLIC_VELA_FULL_ACCESS="true"` o `FEATURE_VELA_UNDER_DEVELOPMENT = false`).
  - Tutte le route sotto `/[locale]/vela/*` mostrano unicamente la pagina standard **"UNDER DEVELOPMENT"** tramite [`VelaLayout`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/vela/layout.tsx), preservando intatto tutto il codice sviluppato in attesa di definire i costi col committente.
  - Rimossi i PDF del catalogo VELA dalla cartella pubblica `public/docs/` e nascosti i sottomenu/pulsanti di download VELA in [`Header.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/layout/Header.tsx), [`page.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/page.tsx) e [`materials/page.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/materials/page.tsx).
- **4. Favicon Ufficiale GENESI**:
  - Generati dal monogramma ufficiale GENESI: [`src/app/favicon.ico`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/favicon.ico) (multi-risoluzione 16–64px), [`src/app/icon.png`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/icon.png) (512×512), [`src/app/apple-icon.png`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/apple-icon.png) (180×180) e relative copie in `public/`.
  - Configurati i metadati `icons` in [`src/app/[locale]/layout.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/layout.tsx) e sincronizzati entrambi i file `MASTER FILE.CSV`.
- **5. Area Riservata Cliente Loggato — Griglia 3×3 Cataloghi, Listini & Placeholder VELA**:
  - Realizzato il componente [`TradeResourcesGrid.tsx`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/components/trade/TradeResourcesGrid.tsx) e integrato in [`/dashboard`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/dashboard/page.tsx) e [`/trade`](file:///E:/Projects/GENESI%20FRONTEND/genesi-web/src/app/%5Blocale%5D/trade/page.tsx) con layout a **3 card per riga (`lg:grid-cols-3`)**:
    - **6 Card GENESI Attive**:
      1. *GENESI Hospitality Collection 2026* (`/docs/GENESI_COLLECTION_2026_FINAL.pdf` · 108 pag. A4 300 DPI)
      2. *GENESI Technical Price List 2026* (`/docs/GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf` · 86 pag. A4 300 DPI)
      3. *GENESI Trade Price List 2026 (v2)* (`/api/trade/price-list` · PDF B2B protetto)
      4. *GENESI Master Excel Price List 2026* (`/docs/GENESI_MASTER_PRICE_LIST_2026.xlsx` · 80 SKU auditati)
      5. *GENESI Finishing & Materials 2026* (`/docs/GENESI_MATERIALS_FINISHING_2026.pdf` · Dossier campionari UMA)
      6. *GENESI Architectural Overview* (`/docs/genesi-catalogue.pdf` · Brochure istituzionale)
    - **3 Card Placeholder VELA (`"Coming Soon"`)**:
      7. *VELA Collezione Porte & Sistemi 2026* (`Coming Soon`)
      8. *VELA Box Doccia & Pareti Cristallo* (`Coming Soon`)
      9. *VELA Master Price List & Hardware 2026* (`Coming Soon`)
- **6. Regola CRITICAL in `AGENTS.md`**:
  - Aggiunta in cima a [`.agents/AGENTS.md`](file:///E:/Projects/GENESI%20FRONTEND/.agents/AGENTS.md) la regola con stato **CRITICAL** di priorità assoluta e risposta immediata alle domande dirette dell'utente.

---

## 2. Elenco Risorse, CSV, Excel & File PDF Generati

| Tipologia | Percorso File Assoluto | Descrizione / Utilizzo |
|---|---|---|
| **Master Excel Listino VELA 2026** | `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\MASTER EXCEL VELA PRICE LIST 2026.xlsx` | **Listino Prezzi & Calcolatore Tender Excel** a 8 fogli con formule live |
| **Catalogo VELA Monografico PDF v2.0** | `E:\Projects\GENESI FRONTEND\VELA_CATALOGUE\07_OUTPUT\PDF\VELA_COLLECTION_2026_SUPER_PREMIUM.pdf` | **Catalogo monografico 80 pag. A4 300 DPI (75.4 MB)** con nuova copertina full-bleed, foto 2200px e caratteri grandi |
| **Copia Catalogo VELA in Furniture** | `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\VELA_COLLECTION_2026_SUPER_PREMIUM_v2.pdf` | Copia del catalogo VELA 80 pagg. aggiornato nella cartella FURNITURE_CATALOGUE |
| **Script Generatore Catalogo VELA** | `E:\Projects\GENESI FRONTEND\VELA_CATALOGUE\09_SCRIPTS\build_vela_super_premium_catalogue.py` | Script Python di rendering e compilazione PDF del catalogo VELA v2.0 |
| **Manifest Pagine Catalogo VELA** | `E:\Projects\GENESI FRONTEND\VELA_CATALOGUE\07_OUTPUT\MANIFESTS\VELA_PAGE_MANIFEST.csv` | Registro delle 80 pagine generate con status APPROVED |
| **Catalogo Hospitality A4 PDF** | `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\07_OUTPUT\PDF\GENESI_COLLECTION_2026_FINAL.pdf` | Catalogo 108 pag. A4 verticale 300 DPI con dimensioni auditate (39.7 MB) |
| **Listino Prezzi PDF Finale** | `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\PRICE_LIST\07_OUTPUT\PDF\GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf` | Listino e schede tecniche 86 pag. A4 verticale con quote e specifiche (37.9 MB) |
| **Hub Listini Consolidato (PDF & Excel)** | `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\` | **Tutti i file listino (PDF e Excel)** consolidati nella cartella catalogo |
| **CSV Master Immagini** | `E:\Projects\GENESI FRONTEND\WEB PORTE\MASTER FILE.CSV` | Registro globale immagini VELA & GENESI con tracciabilità categorie |
| **CSV Master Immagini Web** | `E:\Projects\GENESI FRONTEND\genesi-web\src\data\MASTER_FILE.csv` | Replica sincronizzata per il frontend web |
| **JSON Box Doccia Web** | `E:\Projects\GENESI FRONTEND\genesi-web\src\data\vela-box-doccia.json` | 23 modelli box doccia con specifiche e percorsi WebP |
| **JSON Ferramenta Web** | `E:\Projects\GENESI FRONTEND\genesi-web\src\data\vela-hardware.json` | 17 modelli di ferramenta e serrature smart (duplicati azzerati) |
