# SEO Configuration

## File di configurazione SEO del sito

### `public/sitemap.xml`
Mappa XML delle pagine del sito per search engines (Google, Bing, etc).

**Come aggiungerlo a Google Search Console:**
1. Vai su [Google Search Console](https://search.google.com/search-console/)
2. Seleziona il tuo sito web
3. Vai a **Sitemap** nel menu a sinistra
4. Inserisci: `https://taccarlo.web.app/sitemap.xml`
5. Clicca invia

**Quando aggiornarlo:**
- Aggiungi una nuova pagina → aggiungi una voce nel sitemap
- Modifica una pagina importante → aggiorna la data in `<lastmod>`
- Usa `<priority>` da 0.0 a 1.0 (home = 1.0, pagine secondarie = 0.6-0.8)

### `public/robots.txt`
File che comunica ai crawler come naviga il sito.

- `Allow: /` - Consenti crawling di tutte le pagine
- `Disallow: /build/` - Esclude directory di build
- `Sitemap:` - Referenzia il sitemap XML

### Meta tag centralizzati

**Hook `useMetaTags()`** in `src/hooks/useMetaTags.js`:

```javascript
useMetaTags({
  title: 'Titolo Pagina',
  description: 'Descrizione breve (max 160 caratteri)',
  canonical: '/percorso-pagina',
  keywords: 'parole chiave, separate, da, virgola',
  ogTitle: 'Titolo Open Graph (per social)',
  ogDescription: 'Descrizione per condivisioni social',
  ogImage: 'https://...' // URL immagine per preview social
})
```

**Esempio di utilizzo:**
```jsx
import useMetaTags from '../../hooks/useMetaTags';

function MyPage() {
  useMetaTags({
    title: 'Chi Sono',
    description: 'Scopri di più su Carlo Tacchella',
    canonical: '/about'
  });
  
  return <div>...</div>;
}
```

### Breadcrumbs Navigation

Il componente `src/components/Breadcrumbs.js` aggiunge automaticamente breadcrumb per la navigazione.

- Migliora UX su pagine annidate
- Valore SEO: aiuta i crawler a capire la struttura del sito
- Accessibile: con ARIA labels

## TODO: Integrare Google Analytics (prossimamente)

Vedi punto 11 del piano di miglioramenti.
