# ISTRUZIONI — CHATGPT DESKTOP / WORK
## Direzione creativa e impaginazione del catalogo furniture

**Versione:** 6 agosto 2026  
**Scopo:** usare ChatGPT Desktop — modalità **Work** — come art director, editor e supervisore del catalogo.  
**Nota operativa:** la preparazione batch delle immagini, l’estrazione degli ZIP e la generazione automatica delle pagine vengono affidate a **Codex**. ChatGPT Work definisce invece struttura, stile, testi, gerarchie e correzioni.

---

## 1. Risultato atteso

ChatGPT Work deve aiutare a produrre:

1. struttura completa del catalogo;
2. indice e suddivisione per categorie;
3. sistema grafico coerente;
4. copertina e separatori;
5. regole per pagine prodotto;
6. testi e didascalie, senza inventare dati;
7. piano pagina-per-pagina;
8. revisione delle pagine campione;
9. elenco delle correzioni da passare a Codex;
10. controllo editoriale del catalogo finale.

### Output principali del progetto

- `CATALOGUE_BRIEF.md`
- `VISUAL_SYSTEM.md`
- `PAGE_PLAN.csv`
- `PRODUCT_COPY.csv`
- `REVISION_NOTES.md`
- cartella `06_SAMPLES/` con pagine campione;
- catalogo finale generato da Codex in `07_OUTPUT/`.

---

## 2. Prerequisiti

1. Utilizzare la nuova applicazione **ChatGPT Desktop**.
2. Dal menu in alto a sinistra selezionare **ChatGPT**.
3. Selezionare la modalità **Work**.
4. Aprire la cartella locale del progetto.
5. Concedere accesso esclusivamente alla cartella del catalogo.
6. Non lavorare direttamente sui file dentro `01_ORIGINALS/`.

La cartella deve essere già stata preparata da Codex secondo questa struttura:

```text
FURNITURE_CATALOGUE/
├── 00_INBOX_ZIP/
├── 01_ORIGINALS/
├── 02_INVENTORY/
├── 03_WORKING_IMAGES/
├── 04_BRIEF_AND_COPY/
├── 05_LAYOUT_SYSTEM/
├── 06_SAMPLES/
├── 07_OUTPUT/
├── 08_REVISIONS/
└── 99_ARCHIVE/
```

---

## 3. Regole non negoziabili

ChatGPT Work deve rispettare queste regole:

- Non modificare, sovrascrivere o rinominare i file originali.
- Non inventare nomi articolo, SKU, dimensioni, materiali, finiture, prezzi o certificazioni.
- Considerare verificati soltanto i dati presenti nei file, nei nomi file, nei fogli di inventario o forniti dal committente.
- Marcare ogni deduzione visuale come `INFERRED`.
- Marcare ogni dato mancante come `MISSING`.
- Usare il nome file originale come riferimento tracciabile.
- Separare sempre:
  - dati verificati;
  - dati inferiti;
  - dati mancanti.
- Non inserire immagini trovate online.
- Non cambiare colore, proporzioni o design dei prodotti.
- Non usare immagini a bassa risoluzione senza segnalarlo.
- Non procedere alla generazione completa prima dell’approvazione delle pagine campione.
- Mantenere una corrispondenza univoca tra pagina, prodotto e file sorgente.

---

## 4. Sequenza di lavoro in ChatGPT Work

### Fase A — Comprendere il materiale

Leggere prima:

- `02_INVENTORY/image_inventory.csv`
- `02_INVENTORY/duplicate_report.csv`
- `02_INVENTORY/quality_issues.csv`
- le contact sheet in `02_INVENTORY/contact_sheets/`
- eventuali file commerciali o tecnici forniti dal cliente.

Produrre:

- elenco categorie rilevate;
- quantità di articoli per categoria;
- immagini disponibili per articolo;
- prodotti con immagini incomplete;
- dati tecnici mancanti;
- problemi di coerenza del naming;
- immagini non assegnabili con certezza.

Non rinominare nulla in questa fase.

---

### Fase B — Definire la struttura editoriale

Creare `04_BRIEF_AND_COPY/CATALOGUE_BRIEF.md` includendo:

- obiettivo del catalogo;
- pubblico destinatario;
- posizionamento del brand;
- tono editoriale;
- lingua o lingue;
- formato;
- ordine delle categorie;
- ritmo visivo;
- rapporto immagini/testo;
- output finali;
- elementi obbligatori;
- elementi da escludere.

#### Struttura consigliata

1. Copertina
2. Brand statement
3. Indice
4. Introduzione alla collezione
5. Separatore categoria
6. Pagine prodotto
7. Varianti e finiture
8. Specifiche generali
9. Indice codici articolo
10. Contatti e retrocopertina

La struttura può essere modificata solo sulla base del materiale disponibile.

---

### Fase C — Definire il sistema grafico

Creare `05_LAYOUT_SYSTEM/VISUAL_SYSTEM.md`.

Specificare almeno:

- formato pagina;
- orientamento;
- margini e area sicura;
- griglia;
- numero massimo di immagini per pagina;
- gerarchia tipografica;
- stili di titolo, sottotitolo, codice e descrizione;
- regole per sfondi;
- palette;
- trattamento delle immagini;
- numerazione pagine;
- separatori di categoria;
- posizione del logo;
- regole per didascalie e dati tecnici;
- pagine speciali;
- comportamento in caso di dati mancanti.

### Impostazione iniziale consigliata

Questa è una base di lavoro, non un dato obbligatorio:

- formato A4 verticale;
- layout editoriale pulito;
- una immagine hero per pagina o doppia pagina;
- massimo 3–4 immagini secondarie;
- ampio spazio bianco;
- codice articolo sempre visibile;
- descrizioni brevi;
- dati tecnici in blocco separato;
- colori neutri per non alterare la percezione dei mobili.

---

### Fase D — Costruire il piano pagina-per-pagina

Creare `04_BRIEF_AND_COPY/PAGE_PLAN.csv` con queste colonne:

```csv
page_number,page_type,category,product_id,product_name,source_images,headline,body_copy,technical_data,status,notes
```

Valori raccomandati per `page_type`:

- `cover`
- `brand_intro`
- `index`
- `category_opener`
- `product_single`
- `product_multi`
- `detail_page`
- `finishes`
- `technical`
- `contacts`
- `back_cover`

Valori raccomandati per `status`:

- `READY`
- `MISSING_DATA`
- `MISSING_IMAGE`
- `LOW_RESOLUTION`
- `NEEDS_REVIEW`
- `APPROVED`

---

### Fase E — Redigere i testi

Creare `04_BRIEF_AND_COPY/PRODUCT_COPY.csv`.

Usare soltanto informazioni verificate.

Colonne:

```csv
product_id,product_name,category,short_description,materials,finishes,dimensions,options,notes,data_status
```

Regole:

- Se il nome manca: usare `[PRODUCT NAME REQUIRED]`.
- Se il codice manca: usare `[SKU REQUIRED]`.
- Se una dimensione manca: lasciare vuoto e segnalarla.
- Non trasformare un’osservazione visiva in un dato tecnico.
- Evitare descrizioni generiche ripetute.
- Mantenere testi brevi e commercialmente leggibili.

---

### Fase F — Preparare le pagine campione

Chiedere a Codex di generare inizialmente soltanto:

1. una copertina;
2. un indice;
3. un separatore di categoria;
4. due pagine prodotto singolo;
5. due pagine con più prodotti;
6. una pagina finiture;
7. una retrocopertina.

Salvare tutto in:

```text
06_SAMPLES/
```

ChatGPT Work deve revisionare i campioni verificando:

- coerenza con il brief;
- gerarchia;
- equilibrio compositivo;
- leggibilità;
- dimensione delle fotografie;
- margini;
- allineamenti;
- correttezza dei codici;
- ripetizioni;
- immagini tagliate male;
- qualità percepita;
- coerenza fra categorie.

Produrre le correzioni in:

```text
08_REVISIONS/REVISION_NOTES.md
```

Ogni correzione deve includere:

```text
PAGE:
ELEMENT:
CURRENT PROBLEM:
REQUIRED CHANGE:
SOURCE FILE:
PRIORITY: CRITICAL / HIGH / MEDIUM / LOW
```

---

### Fase G — Approvazione e generazione completa

La produzione completa può iniziare soltanto dopo che i campioni sono marcati:

```text
SAMPLE_LAYOUT_STATUS = APPROVED
```

A quel punto ChatGPT Work deve:

1. confermare che il piano pagine è completo;
2. indicare eventuali eccezioni;
3. consegnare a Codex il brief definitivo;
4. richiedere la generazione batch;
5. revisionare il PDF risultante;
6. produrre un ultimo file di correzioni;
7. verificare la versione finale.

---

## 5. Prompt principale da incollare in ChatGPT Work

```text
Agisci come art director, editor e supervisore di produzione per un catalogo professionale di furniture.

Lavora esclusivamente nella cartella locale aperta. Non modificare né rinominare i file dentro 01_ORIGINALS. Usa come fonti principali l’inventario, le contact sheet e gli eventuali dati tecnici presenti nel progetto.

Regole:
1. Non inventare nomi, SKU, materiali, dimensioni, finiture, prezzi o certificazioni.
2. Separa chiaramente dati VERIFIED, INFERRED e MISSING.
3. Usa sempre il nome file originale per la tracciabilità.
4. Non procedere alla produzione completa senza prima creare e revisionare le pagine campione.
5. Non usare immagini esterne.
6. Non alterare il design o il colore dei prodotti.

Procedi in questo ordine:
A. Analizza inventory, duplicate report, quality report e contact sheet.
B. Crea CATALOGUE_BRIEF.md.
C. Crea VISUAL_SYSTEM.md.
D. Crea PAGE_PLAN.csv.
E. Crea PRODUCT_COPY.csv usando soltanto dati verificati.
F. Definisci l’elenco esatto delle pagine campione da far generare a Codex.
G. Dopo la loro generazione, revisionale e crea REVISION_NOTES.md.

Obiettivo:
ottenere un catalogo furniture editoriale, elegante, coerente e facilmente aggiornabile, con fotografie grandi, gerarchie chiare e perfetta corrispondenza tra immagini, codici articolo e categorie.

Prima di iniziare la produzione grafica completa, mostrami:
- categorie rilevate;
- numero di articoli;
- problemi dell’archivio;
- dati mancanti;
- proposta di struttura del catalogo;
- proposta del sistema grafico.
```

---

## 6. Prompt per la revisione delle pagine campione

```text
Revisiona tutte le pagine presenti in 06_SAMPLES come un art director di cataloghi furniture.

Per ogni pagina controlla:
- dimensione e qualità delle immagini;
- tagli fotografici;
- allineamenti;
- margini;
- gerarchia tipografica;
- leggibilità;
- coerenza con VISUAL_SYSTEM.md;
- corrispondenza con PAGE_PLAN.csv;
- correttezza di codice, nome e categoria;
- presenza di dati inventati;
- consistenza fra pagine;
- eventuali sovrapposizioni o elementi fuori pagina.

Non limitarti a commenti generici. Crea 08_REVISIONS/REVISION_NOTES.md con correzioni puntuali e direttamente eseguibili da Codex.

Non approvare la produzione completa finché gli errori CRITICAL e HIGH non sono risolti.
```

---

## 7. Prompt per il controllo del catalogo completo

```text
Controlla il catalogo completo presente in 07_OUTPUT confrontandolo con PAGE_PLAN.csv, PRODUCT_COPY.csv e VISUAL_SYSTEM.md.

Verifica almeno:
- tutte le pagine previste sono presenti;
- nessuna pagina è duplicata o mancante;
- ogni prodotto usa le immagini corrette;
- nessun codice articolo è stato scambiato;
- nessun testo è tagliato;
- nessuna immagine è deformata;
- numerazione e indice sono corretti;
- categorie e separatori sono coerenti;
- non esistono dati inventati;
- le immagini a bassa risoluzione sono segnalate;
- il catalogo è visivamente uniforme.

Genera un report finale in 08_REVISIONS/FINAL_QA_REPORT.md con:
PASS / FAIL per ciascun controllo,
numero di pagina,
problema rilevato,
correzione richiesta.
```

---

## 8. Limiti da tenere presenti

- ChatGPT Work è adatto alla direzione creativa, alla gestione dei contenuti e alla revisione.
- Per la generazione ripetitiva e deterministica di molte pagine è preferibile Codex.
- Un PDF generato automaticamente deve essere considerato una prova ad alta risoluzione finché non viene effettuato il preflight finale.
- Per stampa offset, profili colore, abbondanze e PDF/X, eseguire un controllo finale con software professionale come Adobe InDesign o Acrobat Pro.
