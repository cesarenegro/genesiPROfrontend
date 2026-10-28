# TODO — GENESI & VELA FRONTEND
**Aggiornato al:** 28 Ottobre 2026

---

## 📂 File Master, CSV & Excel per Catalogo Cartaceo, PDF e Listino Prezzi

Tutti i percorsi assoluti e relativi essenziali per l'impaginazione del catalogo cartaceo, la generazione dei PDF scaricabili e l'elaborazione del listino prezzi ufficiale:

### 1. File Excel Master per Listino Prezzi & Dimensioni
- **Master Excel Listino Prezzi VELA 2026 (Porte, Box Doccia, Ferramenta, Finiture & Preventivatore Tender)**:  
  `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\MASTER EXCEL VELA PRICE LIST 2026.xlsx`  
  *(8 Fogli completi: 00_INDICE & GUIDA, 01_PORTE RESIDENZIALI, 02_PORTE HOTEL, 03_BOX DOCCIA, 04_FERRAMENTA & SMART, 05_MATERIOTECA & FINITURE, 06_VANI MURARI & TELAI, 07_CALCOLATORE_TENDER con formule live)*  
  *(Copiato anche in: `E:\Projects\GENESI FRONTEND\VELA_CATALOGUE\MASTER EXCEL VELA PRICE LIST 2026.xlsx` e root)*
- **Master Excel con Dimensioni Auditate Arredi Genesi (Utilizzato per Catalogo & Listino)**:  
  `E:\Projects\GENESI FRONTEND\MASTER EXCEL GENESI PL - DIMENSIONS AUDITED.xlsx`  
  *(94.2 MB — Contiene quote dimensionali metriche auditate, descrizioni, finiture e compatibilità per tutti gli 80 prodotti)*
- **Master Excel Originale Price List**:  
  `E:\Projects\GENESI FRONTEND\MASTER EXCEL GENESI PL.xlsx`  
  *(93.8 MB — Listino prezzi storico e formule di calcolo originali)*
- **Cartella Elaborazioni Temporanee Excel**:  
  `E:\Projects\GENESI FRONTEND\temp_excel`

### 2. PDF Finali Generati (300 DPI A4 Verticale)
- **Catalogo Monografico VELA A4 Super-Premium (80 Pagine, 54.4 MB)**:  
  `E:\Projects\GENESI FRONTEND\VELA_CATALOGUE\07_OUTPUT\PDF\VELA_COLLECTION_2026_SUPER_PREMIUM.pdf`  
  *(Copiato anche direttamente in: `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\VELA_COLLECTION_2026_SUPER_PREMIUM.pdf`)*
- **Catalogo Hospitality Genesi A4 Super-Premium (108 Pagine, 39.7 MB)**:  
  `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\07_OUTPUT\PDF\GENESI_COLLECTION_2026_FINAL.pdf`  
  *(Copiato anche direttamente in: `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\GENESI_COLLECTION_2026_FINAL.pdf`)*
- **Listino Prezzi & Schede Tecniche A4 (86 Pagine, 37.9 MB)**:  
  `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\PRICE_LIST\07_OUTPUT\PDF\GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf`  
  *(Copiato anche direttamente in: `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf`)*
- **Script Generatori Python**:  
  - `E:\Projects\GENESI FRONTEND\VELA_CATALOGUE\09_SCRIPTS\build_vela_super_premium_catalogue.py`  
  - `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\09_SCRIPTS\build_super_premium_catalogue.py`  
  - `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\09_SCRIPTS\build_super_premium_price_list.py`

### 3. File CSV Master Fotografico & Catalogo Immagini
- **Master File CSV Globale (Root Progetto)**:  
  `E:\Projects\GENESI FRONTEND\WEB PORTE\MASTER FILE.CSV`  
  *(Traccia ogni immagine raw e web con percorso, categoria e tipologia)*
- **Master File CSV Frontend (Sincronizzato in Next.js)**:  
  `E:\Projects\GENESI FRONTEND\genesi-web\src\data\MASTER_FILE.csv`
- **CSV Dati Catalogo (Dimensioni Auditate 100%)**:  
  - `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\04_BRIEF_AND_COPY\PRODUCT_COPY.csv`  
  - `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL\FURNITURE_CATALOGUE\04_BRIEF_AND_COPY\PAGE_PLAN.csv`

### 4. Dati Strutturati JSON per Frontend & Automazione
- **Dataset Box Doccia (23 Serie Complete, Finiture, Spessori, Quote)**:  
  `E:\Projects\GENESI FRONTEND\genesi-web\src\data\vela-box-doccia.json`
- **Dataset Ferramenta & Serrature (17 Articoli Top di Gamma con Specifiche Tecniche)**:  
  `E:\Projects\GENESI FRONTEND\genesi-web\src\data\vela-hardware.json`
- **Dataset Maniglie Concept & Quote Vettoriali SVG**:  
  `E:\Projects\GENESI FRONTEND\genesi-web\src\data\vela-concept-handles.json`
- **Dataset Core Porte VELA (Collezioni IN & HO)**:  
  `E:\Projects\GENESI FRONTEND\genesi-web\src\data\vela.json`

### 5. Repository Immagini Master ad Altissima Risoluzione (Per Stampa 300 DPI)
- **Master Box Doccia (58 file TIFF e JPG nativi da studio, fino a 190 MB cad.)**:  
  `E:\Projects\GENESI FRONTEND\BOX DOCCIA`
- **WebP Convertiti Box Doccia (Per frontend web)**:  
  `E:\Projects\GENESI FRONTEND\genesi-web\public\images\vela\box-doccia`
- **Master Ferramenta & Render In-Situ Architettonici**:  
  `E:\Projects\GENESI FRONTEND\FERRAMENTA`  
  *Deployati in:* `E:\Projects\GENESI FRONTEND\genesi-web\public\images\vela\hardware/`
- **Materiale Grafico Hotel & Arredi**:  
  `E:\Projects\GENESI FRONTEND\GENESI CATALOGUE HOTEL`

---

## 🎯 Stato Avanzamento Lavori

### Catalogo Monografico VELA 2026 A4 Super-Premium (Stato: COMPLETATO 100%)
- [x] Redatto e approvato Implementation Plan (`implementation_plan_catalogo_vela_monografico_a4.md`).
- [x] Generato il catalogo A4 verticale `VELA_COLLECTION_2026_SUPER_PREMIUM.pdf` (80 pagine, 54.4 MB) a 300 DPI.
- [x] Capitoli integrati:
  - Manifesto del Filo Muro & I 4 Pilastri Architettonici VELA.
  - Porte per Interni Residenziali (14 modelli, bilico pivot a tutta altezza, scorrevoli a scomparsa, rasomuro).
  - Porte Camere Hotel & Hospitality (13 modelli, acustica 38-44 dB, tagliafuoco EI30/EI60, RFID a filo).
  - Box Doccia & Pareti in Cristallo (le 23 serie modulari con ambientazioni, 2D CAD e macro cerniere).
  - Ferramenta Architetturale & Smart Access (17 modelli top di gamma + 4 render fotorealistici in-situ 4K).
  - Materioteca & Finiture Coordinate (Cristalli, Metalli PVD, Essenze lignee).
  - Matrice Tecnica di Capitolato, Tolleranze Vani Murari, Dima di posa a filo pavimento zero & Contatti Contract.
- [x] Salvo manifest `VELA_PAGE_MANIFEST.csv` e 80 preview JPG ad alta risoluzione in `VELA_CATALOGUE/07_OUTPUT/PREVIEWS/`.
- [x] Script dedicato salvato in `VELA_CATALOGUE/09_SCRIPTS/build_vela_super_premium_catalogue.py`.

### Catalogo Hospitality A4 & Listino Prezzi Tecnico (Stato: COMPLETATO 100%)
- [x] Incrocio e normalizzazione 80/80 SKU con `MASTER EXCEL GENESI PL - DIMENSIONS AUDITED.xlsx`.
- [x] Sostituzione di tutti i placeholder dimensionali e descrittivi con dati metrici reali.
- [x] Generazione catalogo A4 verticale `GENESI_COLLECTION_2026_FINAL.pdf` (108 pagine, 39.7 MB) con campionari UMA ad alta definizione, indici e opener di categoria.
- [x] Generazione listino e schede tecniche `GENESI_TECHNICAL_PRICE_LIST_2026_FINAL.pdf` (86 pagine, 37.9 MB) con viste ortogonali, quote verificate e termini contract.
- [x] Generazione di 194 anteprime ad alta risoluzione in `07_OUTPUT/PREVIEWS/`.
- [x] Aggiornato `FINAL_QA_REPORT.md` a status **APPROVED / FINAL**.

### Sezione Box Doccia & Cristallo VELA (Stato: COMPLETATO 100%)
- [x] Censimento dei 58 file e 23 modelli in `BOX DOCCIA`.
- [x] Conversione batch in WebP reattivi in `genesi-web/public/images/vela/box-doccia/`.
- [x] Aggiornato preliminarmente `MASTER FILE.CSV` (+103 record) nel rispetto del principio "Zero Incoerenza Visiva".
- [x] Creato dataset `vela-box-doccia.json` e aggiornato `src/lib/vela.ts`.
- [x] Sviluppati componenti UI `VelaShowerCard.tsx`, `VelaShowerModal.tsx`, `VelaShowerTechnicalGuide.tsx`, `VelaShowerSection.tsx`.
- [x] Aggiornata la pagina hub `/vela/box-doccia` con hero reale, filtri per categoria, filtro rapido spessore vetro (8/10 mm) e ricerca real-time.
- [x] Validata build con `npm run build` terminata con codice 0.

### Sezione Ferramenta Architetturale & Serrature (Stato: COMPLETATO 100%)
- [x] Ricerca approfondita e selezione 17 modelli europei top di gamma.
- [x] Scaricati asset e schede tecniche ufficiali in `FERRAMENTA/` e `genesi-web/public/documents/technical-sheets/`.
- [x] Generati 4 render fotorealistici in-situ dedicati in 4K.
- [x] Creato dataset `vela-hardware.json` e aggiornato `src/lib/vela.ts`.
- [x] Sviluppati componenti UI `VelaHardwareCard.tsx`, `VelaHardwareSection.tsx`, `VelaHardwareTable.tsx`.
- [x] Integrata e collaudata la pagina `/vela/maniglie` con `npm run build` terminato con codice 0.
