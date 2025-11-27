# Leandra Customizations

Documentazione delle personalizzazioni apportate a questo Quartz 4 digital garden.

## File Principali Modificati

- `source/quartz.config.ts` — Configurazione generale (titolo, colori, font)
- `source/quartz.layout.ts` — Layout componenti
- `source/quartz/styles/custom.scss` — Stili CSS personalizzati
- `source/quartz/i18n/locales/it-IT.ts` — Traduzioni italiane

---

## Configurazioni da Ricordare

### Link "Vedi altro" nelle Note Recenti

**Stato attuale**: Disabilitato (`linkToMore: false`)

Per riattivare il link verso le etichette:

1. In `quartz.layout.ts`, aggiungi l'import:
   ```typescript
   import { SimpleSlug } from "./quartz/util/path"
   ```

2. Cambia la configurazione di RecentNotes:
   ```typescript
   Component.RecentNotes({
     title: "Note recenti",
     limit: 5,
     showTags: false,
     showDate: false,
     linkToMore: "tags/" as SimpleSlug,  // era: false
   }),
   ```

### Posizione Immagine Foglie (Dappled Light)

**File**: `source/quartz/styles/custom.scss`

**Valore attuale**: `right: -600px` (originale)

Cerca `#leaves` nel CSS per modificare la posizione.

### Ornamento HR (Divisore Orizzontale)

**File**: `source/quartz/styles/custom.scss`

Due ornamenti disponibili in `/quartz/static/`:
- `line-english.svg` (attivo)
- `line-hoefler.svg` (alternativo)

Per cambiare ornamento, modifica:
```scss
hr {
  background: url("/static/line-english.svg") no-repeat center center;
}
```

---

## Styling Personalizzato

### Footer
- Font size: 0.75rem
- Color: var(--gray)

### Note Recenti e Backlinks
- Rimossi bullet points
- Rimosso padding sui link per allineamento corretto

### Titoli
- h1: 1.6rem
- h2: 1.2rem
- h3: 1.05rem

### Font Base
- Desktop (≥1200px): 19px
- Mobile: 18px

---

## Componenti Layout

### Sidebar Sinistra
- PageTitle
- Search + Darkmode (Flex)
- RecentNotes (solo Desktop)

### Pagina Contenuto
- beforeBody: Breadcrumbs, ContentMeta, TagList
- right: Graph, TableOfContents (Desktop), Backlinks

### ArticleTitle
Rimosso dal layout — H1 deve essere nel markdown del file.


- Sostituzione dell'Explorer con RecentNotes nella sidebar sinistra
- Creazione ornamenti SVG per HR: `line-hoefler.svg` e `line-english.svg` (scelta finale: english)
- Styling del footer (0.75rem, color: var(--gray))
- Rimozione ArticleTitle dal layout — H1 viene dal markdown
- Cambio titolo sito: "Leandra" → "Stefano Cracolici" → "La Finestra" → "Leandra". Avevo pensato a La finestra sul cortile – qui evocato anche dall'effetto sunset nel passaggio da tema light a tema dark.
- Esperimenti con background image: provato pines.png, tornato a leaves.png
- Posizione leaves.png: `right: -600px` (valore originale)
- Rimozione bullet points e padding dalle liste RecentNotes e Backlinks per allineamento corretto
- Rimozione "Vedi 3 altro" — impostato `linkToMore: false`
- Traduzioni italiane: "Link entranti" → "Agganci", "Tabella dei contenuti" → "Sommario"
- Configurazione colori dark mode con palette terracotta/verde
- Font: Bricolage Grotesque (body), Inter (header), JetBrains Mono (code)
- Creato `CUSTOMIZATIONS.md` per documentare le personalizzazioni
-
---

*Ultimo aggiornamento: 2025-11-22*
