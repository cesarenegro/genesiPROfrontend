# ISTRUZIONI — CODEX
## Ingestione immagini, inventario e generazione batch del catalogo furniture

**Versione:** 6 agosto 2026  
**Scopo:** utilizzare Codex come motore tecnico per estrarre gli archivi ZIP, catalogare le immagini, creare anteprime, generare pagine campione e produrre il catalogo completo in modo ripetibile.

---

## 1. Principio fondamentale

Codex deve lavorare in modo **non distruttivo**.

Non deve mai:

- modificare gli ZIP originali;
- sovrascrivere le immagini originali;
- rinominare i file dentro `01_ORIGINALS/`;
- inventare codici articolo o dati tecnici;
- associare immagini a prodotti senza tracciabilità;
- generare l’intero catalogo prima dell’approvazione dei campioni.

Tutte le trasformazioni devono avvenire su copie dentro `03_WORKING_IMAGES/`.

---

## 2. Struttura del progetto

Creare o verificare questa struttura:

```text
FURNITURE_CATALOGUE/
├── 00_INBOX_ZIP/
├── 01_ORIGINALS/
│   ├── ARCHIVE_001/
│   ├── ARCHIVE_002/
│   └── ...
├── 02_INVENTORY/
│   ├── image_inventory.csv
│   ├── duplicate_report.csv
│   ├── quality_issues.csv
│   ├── extraction_log.csv
│   └── contact_sheets/
├── 03_WORKING_IMAGES/
│   ├── normalized/
│   ├── thumbnails/
│   └── rejected/
├── 04_BRIEF_AND_COPY/
│   ├── CATALOGUE_BRIEF.md
│   ├── PAGE_PLAN.csv
│   └── PRODUCT_COPY.csv
├── 05_LAYOUT_SYSTEM/
│   ├── VISUAL_SYSTEM.md
│   ├── assets/
│   └── templates/
├── 06_SAMPLES/
├── 07_OUTPUT/
│   ├── PPTX/
│   ├── PDF/
│   ├── PREVIEWS/
│   └── MANIFESTS/
├── 08_REVISIONS/
├── 09_SCRIPTS/
├── 10_LOGS/
└── 99_ARCHIVE/
```

---

## 3. Fase 1 — Verifica ambiente

Prima di elaborare i file:

1. elencare gli ZIP trovati in `00_INBOX_ZIP/`;
2. calcolare dimensione e hash di ogni archivio;
3. verificare lo spazio libero;
4. identificare i formati immagine presenti;
5. verificare quali strumenti locali sono disponibili;
6. creare un ambiente Python isolato se necessario;
7. non installare dipendenze globali;
8. registrare tutte le operazioni in `10_LOGS/`.

Librerie utilizzabili, se disponibili o installabili localmente nel progetto:

- Pillow;
- imagehash;
- pandas;
- python-pptx;
- reportlab;
- PyMuPDF;
- openpyxl;
- piexif;
- cairosvg, solo se necessario;
- strumenti di sistema per HEIC/TIFF soltanto se già disponibili o installati con autorizzazione.

Non assumere che un programma sia installato: verificarlo.

---

## 4. Fase 2 — Estrazione sicura degli ZIP

Per ogni archivio:

1. creare una cartella separata in `01_ORIGINALS/`;
2. usare un nome stabile derivato dal nome dell’archivio;
3. bloccare path traversal e nomi pericolosi;
4. mantenere la struttura interna quando utile;
5. evitare sovrascritture;
6. in caso di collisione, conservare entrambi i file con suffisso deterministico;
7. registrare:
   - archivio sorgente;
   - percorso interno;
   - percorso estratto;
   - dimensione;
   - hash;
   - stato;
   - errore eventuale.

Salvare il registro in:

```text
02_INVENTORY/extraction_log.csv
```

---

## 5. Fase 3 — Inventario immagini

Creare:

```text
02_INVENTORY/image_inventory.csv
```

Colonne minime:

```csv
record_id,source_archive,source_path,original_filename,extension,file_size_bytes,width_px,height_px,orientation,aspect_ratio,dpi_x,dpi_y,color_mode,has_alpha,exif_orientation,sha256,perceptual_hash,category_from_folder,product_id_from_filename,data_confidence,status,notes
```

### Regole di classificazione

- `category_from_folder`: usare il nome della cartella, se chiaro.
- `product_id_from_filename`: estrarre soltanto pattern realmente presenti.
- Non inventare uno SKU.
- Se la categoria è incerta: `UNCLASSIFIED`.
- Se il codice è incerto: campo vuoto.
- `data_confidence`:
  - `VERIFIED_FILENAME`
  - `VERIFIED_FOLDER`
  - `INFERRED_VISUAL`
  - `UNKNOWN`

---

## 6. Fase 4 — Controllo qualità

Creare:

```text
02_INVENTORY/quality_issues.csv
```

Controllare almeno:

- file non leggibili;
- immagini corrotte;
- file con estensione errata;
- immagini troppo piccole;
- orientamento EXIF;
- immagini molto compresse;
- trasparenze problematiche;
- profilo colore non standard;
- proporzioni estreme;
- file vuoti;
- immagini con watermark, soltanto come segnalazione;
- possibili duplicati.

### Soglie iniziali suggerite

Le soglie devono essere configurabili:

- lato lungo inferiore a 1600 px: `LOW_RESOLUTION`;
- lato lungo inferiore a 1000 px: `CRITICAL_LOW_RESOLUTION`;
- file non apribile: `CORRUPT`;
- proporzione maggiore di 4:1: `EXTREME_ASPECT_RATIO`.

Le soglie non determinano automaticamente l’esclusione; servono per il controllo.

---

## 7. Fase 5 — Duplicati

Creare:

```text
02_INVENTORY/duplicate_report.csv
```

Distinguere:

- duplicato esatto mediante SHA-256;
- duplicato visivo o quasi duplicato mediante perceptual hash;
- stessa immagine con dimensioni diverse;
- immagini simili ma con angolazioni differenti.

Non eliminare automaticamente nessun file originale.

---

## 8. Fase 6 — Copie di lavoro

Creare copie normalizzate in:

```text
03_WORKING_IMAGES/normalized/
```

Regole:

- mantenere il rapporto originale;
- applicare correttamente l’orientamento EXIF;
- non deformare;
- non effettuare crop irreversibili;
- conservare un mapping tra copia e originale;
- non alterare il colore del prodotto;
- convertire in uno spazio colore coerente soltanto sulle copie;
- mantenere file ad alta qualità;
- creare thumbnail separate.

Creare un file:

```text
03_WORKING_IMAGES/working_image_map.csv
```

con:

```csv
working_file,original_file,transformation,status,notes
```

---

## 9. Fase 7 — Contact sheet

Creare contact sheet leggibili per categoria:

```text
02_INVENTORY/contact_sheets/
```

Ogni immagine deve mostrare:

- miniatura;
- nome file;
- eventuale codice estratto;
- dimensioni in pixel;
- record ID;
- eventuale warning.

Produrre:

- una contact sheet generale;
- una contact sheet per categoria;
- una contact sheet dei file non classificati;
- una contact sheet dei problemi di qualità;
- una contact sheet dei possibili duplicati.

---

## 10. Gate obbligatorio dopo l’inventario

Dopo inventario e contact sheet, fermarsi e produrre:

```text
10_LOGS/INGESTION_SUMMARY.md
```

Includere:

- numero ZIP;
- numero file estratti;
- numero immagini valide;
- numero file corrotti;
- numero duplicati;
- numero immagini a bassa risoluzione;
- categorie rilevate;
- elementi non classificati;
- dati mancanti;
- prossime azioni.

Non generare pagine del catalogo fino a quando:

```text
INGESTION_STATUS = APPROVED
```

---

## 11. Fase 8 — Lettura del brief

Prima di generare il layout, leggere:

- `04_BRIEF_AND_COPY/CATALOGUE_BRIEF.md`
- `04_BRIEF_AND_COPY/PAGE_PLAN.csv`
- `04_BRIEF_AND_COPY/PRODUCT_COPY.csv`
- `05_LAYOUT_SYSTEM/VISUAL_SYSTEM.md`

Se un file manca, fermarsi e segnalarlo.

Non sostituire dati mancanti con testo inventato.

---

## 12. Fase 9 — Motore di layout

Creare un sistema di layout parametrico e ripetibile.

### Output consigliati

1. **PPTX editabile**
2. **PDF di revisione ad alta risoluzione**
3. **PNG/JPG preview per pagina**
4. **manifest CSV**
5. **log di generazione**

Il sistema deve permettere:

- modifica del formato pagina;
- modifica dei margini;
- cambio font;
- cambio palette;
- gestione di pagine singole e doppie;
- immagini hero;
- gallerie;
- didascalie;
- dati tecnici;
- numerazione;
- indice;
- separatori;
- copertina e retrocopertina.

### Template minimi

- cover;
- brand intro;
- index;
- category opener;
- product single;
- product multi;
- detail page;
- finishes;
- technical page;
- contacts;
- back cover.

---

## 13. Regole di inserimento immagini

- Usare soltanto file indicati nel `PAGE_PLAN.csv`.
- Applicare `contain` o `cover` secondo il tipo di riquadro.
- Non deformare mai un’immagine.
- Registrare ogni crop.
- Mantenere visibile l’elemento principale.
- Non applicare filtri creativi senza autorizzazione.
- Non cambiare colore, texture o finitura del mobile.
- Segnalare immagini insufficienti o troppo piccole.
- Non riutilizzare la stessa immagine su pagine diverse salvo istruzione esplicita.
- Inserire sempre il riferimento al file sorgente nel manifest.

---

## 14. Regole per testi e dati

- Usare esclusivamente `PRODUCT_COPY.csv`.
- Non completare automaticamente dati mancanti.
- Usare placeholder visibili soltanto nelle bozze:
  - `[PRODUCT NAME REQUIRED]`
  - `[SKU REQUIRED]`
  - `[DIMENSIONS REQUIRED]`
  - `[MATERIAL REQUIRED]`
- Bloccare l’output finale se restano placeholder non autorizzati.
- Controllare overflow, troncamenti e righe orfane.
- Non ridurre il corpo del testo sotto il minimo definito in `VISUAL_SYSTEM.md`.

---

## 15. Fase 10 — Generazione campioni

Generare inizialmente soltanto le pagine definite come campione.

Cartella:

```text
06_SAMPLES/
```

Produrre:

- `SAMPLE_CATALOGUE.pptx`
- `SAMPLE_CATALOGUE.pdf`
- preview PNG;
- `SAMPLE_MANIFEST.csv`
- `SAMPLE_QA_REPORT.md`

Eseguire i controlli:

- testi dentro i box;
- immagini non deformate;
- immagini non mancanti;
- codice prodotto corretto;
- categoria corretta;
- numero pagina;
- coerenza font;
- coerenza margini;
- assenza di sovrapposizioni;
- risoluzione sufficiente;
- nessun placeholder non previsto.

Poi fermarsi.

La produzione completa richiede:

```text
SAMPLE_LAYOUT_STATUS = APPROVED
```

---

## 16. Fase 11 — Applicare le revisioni

Leggere:

```text
08_REVISIONS/REVISION_NOTES.md
```

Applicare le correzioni in modo tracciabile.

Creare:

```text
10_LOGS/REVISION_IMPLEMENTATION_LOG.md
```

Per ogni correzione registrare:

```text
revision_id,page,status,files_changed,notes
```

Rigenerare i campioni e rieseguire il QA.

---

## 17. Fase 12 — Generazione completa

Dopo approvazione:

1. generare tutte le pagine previste;
2. creare PPTX editabile;
3. creare PDF di revisione;
4. creare preview per pagina;
5. creare manifest;
6. creare report QA;
7. verificare conteggio pagine;
8. verificare indice e numerazione;
9. verificare che ogni prodotto sia presente una sola volta, salvo eccezioni;
10. verificare assenza di placeholder;
11. verificare assenza di file mancanti.

Output:

```text
07_OUTPUT/PPTX/FURNITURE_CATALOGUE_FINAL.pptx
07_OUTPUT/PDF/FURNITURE_CATALOGUE_FINAL_REVIEW.pdf
07_OUTPUT/PREVIEWS/
07_OUTPUT/MANIFESTS/FINAL_PAGE_MANIFEST.csv
07_OUTPUT/MANIFESTS/FINAL_IMAGE_USAGE.csv
07_OUTPUT/FINAL_QA_REPORT.md
```

---

## 18. Controlli QA obbligatori

Il report finale deve includere PASS / FAIL per:

- tutte le pagine previste;
- ordine corretto;
- numerazione corretta;
- indice coerente;
- immagini presenti;
- immagini leggibili;
- nessuna deformazione;
- nessuna sovrapposizione;
- nessun testo tagliato;
- nessun dato inventato;
- nessun placeholder residuo;
- codici prodotto corretti;
- categorie corrette;
- nessuna duplicazione accidentale;
- risoluzione adeguata;
- output apribile;
- font disponibili o correttamente sostituiti;
- file finali sotto controllo versione.

---

## 19. Prompt principale da incollare in Codex

```text
Lavora come production engineer per un catalogo professionale di furniture.

La cartella aperta è la root del progetto. Devi costruire un workflow locale, non distruttivo e ripetibile per:
1. estrarre tutti gli ZIP presenti in 00_INBOX_ZIP;
2. conservare intatti gli originali;
3. creare inventario completo delle immagini;
4. rilevare duplicati e problemi di qualità;
5. produrre copie di lavoro e contact sheet;
6. generare pagine campione da un sistema di layout parametrico;
7. dopo approvazione, generare l’intero catalogo in PPTX editabile e PDF di revisione.

Regole obbligatorie:
- Non modificare né rinominare gli originali.
- Non inventare SKU, nomi, materiali, dimensioni o altre specifiche.
- Ogni immagine deve essere tracciata fino al file sorgente.
- Tutte le operazioni devono essere registrate.
- Non cancellare automaticamente duplicati.
- Non generare il catalogo completo prima dell’approvazione dei campioni.
- Non deformare le immagini.
- Non alterare colori e finiture dei prodotti.
- Non usare immagini esterne.
- Verifica sempre la disponibilità degli strumenti prima di usarli.
- Installa eventuali dipendenze soltanto in un ambiente locale al progetto.
- Crea script riutilizzabili dentro 09_SCRIPTS.

Prima fase:
A. Verifica la struttura delle cartelle.
B. Crea le cartelle mancanti.
C. Analizza gli ZIP.
D. Estrai gli archivi in modo sicuro.
E. Crea image_inventory.csv, duplicate_report.csv, quality_issues.csv ed extraction_log.csv.
F. Genera contact sheet generali e per categoria.
G. Crea INGESTION_SUMMARY.md.
H. Fermati e mostra il riepilogo. Non procedere al layout finché INGESTION_STATUS non è APPROVED.

Seconda fase, soltanto dopo approvazione:
A. Leggi CATALOGUE_BRIEF.md, PAGE_PLAN.csv, PRODUCT_COPY.csv e VISUAL_SYSTEM.md.
B. Crea il motore di layout.
C. Genera soltanto le pagine campione.
D. Crea SAMPLE_QA_REPORT.md.
E. Fermati per la revisione.

Terza fase, soltanto dopo SAMPLE_LAYOUT_STATUS = APPROVED:
A. Applica le revisioni.
B. Genera il catalogo completo.
C. Crea PPTX, PDF di revisione, preview, manifest e QA finale.

Durante tutto il lavoro, comunica immediatamente:
- file corrotti;
- ambiguità nel naming;
- immagini non assegnabili;
- immagini troppo piccole;
- dati mancanti;
- errori di generazione.
```

---

## 20. Prompt per applicare correzioni

```text
Leggi 08_REVISIONS/REVISION_NOTES.md e applica tutte le correzioni CRITICAL e HIGH alle pagine campione.

Non modificare gli originali. Mantieni la tracciabilità delle immagini. Registra ogni modifica in 10_LOGS/REVISION_IMPLEMENTATION_LOG.md.

Rigenera:
- SAMPLE_CATALOGUE.pptx
- SAMPLE_CATALOGUE.pdf
- preview PNG
- SAMPLE_QA_REPORT.md

Confronta la nuova versione con la precedente e segnala:
- correzioni completate;
- correzioni non eseguibili;
- nuovi problemi introdotti;
- elementi che richiedono decisione umana.

Non generare il catalogo completo.
```

---

## 21. Prompt per generazione finale

```text
Il layout campione è approvato. Genera il catalogo completo usando esclusivamente:
- PAGE_PLAN.csv;
- PRODUCT_COPY.csv;
- VISUAL_SYSTEM.md;
- immagini mappate nell’inventario;
- revisioni approvate.

Prima dell’export:
- verifica assenza di placeholder;
- verifica corrispondenza pagina/prodotto/immagine;
- verifica overflow di testo;
- verifica sovrapposizioni;
- verifica proporzioni immagini;
- verifica indice e numerazione;
- verifica risoluzione.

Genera:
1. PPTX editabile;
2. PDF di revisione ad alta risoluzione;
3. preview di ogni pagina;
4. FINAL_PAGE_MANIFEST.csv;
5. FINAL_IMAGE_USAGE.csv;
6. FINAL_QA_REPORT.md.

Se un controllo CRITICAL fallisce, non nominare l’output come FINAL: usa il suffisso NEEDS_REVIEW.
```

---

## 22. Nota sul PDF da stampa

L’output automatico deve essere considerato un **PDF di revisione** finché non vengono verificati:

- abbondanze;
- profili colore;
- immagini effettive;
- font;
- sovrastampa;
- trasparenze;
- standard PDF/X richiesto dalla tipografia.

La preparazione definitiva per stampa offset deve essere effettuata o verificata in Adobe InDesign / Acrobat Pro o da un service di prestampa.
