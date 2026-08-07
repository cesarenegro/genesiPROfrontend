# CATALOGO FURNITURE — I MIEI STEP ESSENZIALI

## Obiettivo

Partire dagli ZIP con tutte le fotografie e arrivare a:

- catalogo impaginato;
- PPTX modificabile;
- PDF da controllare;
- elenco ordinato di prodotti e immagini;
- file riutilizzabili per futuri aggiornamenti.

---

## STEP 1 — Preparo una cartella

Creo sul computer:

```text
FURNITURE_CATALOGUE
```

Dentro creo:

```text
00_INBOX_ZIP
```

Metto **tutti gli ZIP originali** dentro `00_INBOX_ZIP`.

Non devo estrarli, rinominarli o modificarli manualmente.

---

## STEP 2 — Apro ChatGPT Desktop

Uso la nuova applicazione **ChatGPT Desktop**, non la normale chat web.

Dal menu in alto a sinistra scelgo:

```text
Codex
```

Apro come progetto la cartella:

```text
FURNITURE_CATALOGUE
```

Concedo accesso soltanto a questa cartella.

---

## STEP 3 — Do a Codex le istruzioni

Apro il file:

```text
ISTRUZIONI_CODEX_CATALOGO_FURNITURE.md
```

Copio il testo della sezione:

```text
Prompt principale da incollare in Codex
```

Lo incollo in Codex.

Codex deve:

- estrarre gli ZIP;
- lasciare intatti gli originali;
- creare l’inventario;
- individuare duplicati;
- segnalare immagini piccole o corrotte;
- creare contact sheet;
- fermarsi prima di impaginare.

---

## STEP 4 — Controllo l’inventario

Aspetto che Codex produca:

```text
02_INVENTORY/image_inventory.csv
02_INVENTORY/contact_sheets/
10_LOGS/INGESTION_SUMMARY.md
```

Controllo soprattutto:

- categorie;
- numero di prodotti;
- immagini non classificate;
- duplicati;
- immagini mancanti;
- immagini a bassa risoluzione.

Correggo eventuali errori di categoria o naming prima di procedere.

---

## STEP 5 — Passo a ChatGPT Work

Nella stessa applicazione Desktop scelgo:

```text
ChatGPT → Work
```

Apro la stessa cartella:

```text
FURNITURE_CATALOGUE
```

Apro il file:

```text
ISTRUZIONI_CHATGPT_DESKTOP_CATALOGO_FURNITURE.md
```

Copio il testo della sezione:

```text
Prompt principale da incollare in ChatGPT Work
```

Lo incollo in Work.

ChatGPT Work deve preparare:

- struttura del catalogo;
- ordine categorie;
- stile grafico;
- piano pagine;
- testi;
- elenco pagine campione.

---

## STEP 6 — Decido il layout

Prima della produzione completa faccio creare soltanto:

- copertina;
- indice;
- separatore categoria;
- alcune pagine prodotto;
- pagina finiture;
- retrocopertina.

Controllo:

- fotografie abbastanza grandi;
- niente testi sovrapposti;
- nomi e codici corretti;
- stile coerente;
- margini corretti;
- nessun prodotto deformato;
- nessuna informazione inventata.

---

## STEP 7 — Faccio correggere i campioni

ChatGPT Work crea:

```text
08_REVISIONS/REVISION_NOTES.md
```

Torno in Codex e gli chiedo di applicare le correzioni.

Non autorizzo ancora l’intero catalogo finché i campioni non sono corretti.

---

## STEP 8 — Autorizzo il catalogo completo

Quando i campioni sono approvati, dico a Codex:

```text
SAMPLE_LAYOUT_STATUS = APPROVED
```

Poi uso il prompt:

```text
Prompt per generazione finale
```

Codex genera:

- PPTX modificabile;
- PDF di revisione;
- preview di tutte le pagine;
- manifest immagini;
- report finale dei controlli.

---

## STEP 9 — Faccio il controllo finale

Verifico:

- tutte le pagine presenti;
- indice corretto;
- numeri pagina corretti;
- ogni foto associata al prodotto giusto;
- nessun testo tagliato;
- nessuna sovrapposizione;
- nessuna immagine deformata;
- nessun dato inventato;
- nessun placeholder;
- qualità fotografica sufficiente.

---

## STEP 10 — Preparo il PDF da stampa

Il PDF automatico è una **prova ad alta risoluzione**.

Prima di inviarlo in tipografia devo controllare con Adobe InDesign, Acrobat Pro o il service di stampa:

- abbondanze;
- profilo colore;
- font;
- immagini;
- trasparenze;
- standard PDF/X richiesto.

---

# IN UNA RIGA

```text
ZIP → CODEX INVENTARIO → CHATGPT WORK LAYOUT → CODEX CAMPIONI → REVISIONE → CODEX CATALOGO COMPLETO → CONTROLLO STAMPA
```

---

# FILE DA USARE

1. `01_STEP_ESSENZIALI_PER_ME.md` — questa checklist.
2. `02_ISTRUZIONI_CHATGPT_DESKTOP_CATALOGO_FURNITURE.md` — direzione creativa.
3. `03_ISTRUZIONI_CODEX_CATALOGO_FURNITURE.md` — elaborazione tecnica e produzione batch.
