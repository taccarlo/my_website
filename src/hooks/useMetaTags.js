import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Hook per centralizzare la gestione dei meta tags
 * @param {Object} metadata - Configurazione meta tag
 * @param {string} metadata.title - Titolo della pagina
 * @param {string} metadata.description - Descrizione SEO
 * @param {string} metadata.canonical - URL canonico (opzionale)
 * @param {string} metadata.ogTitle - Open Graph title (opzionale)
 * @param {string} metadata.ogDescription - Open Graph description (opzionale)
 * @param {string} metadata.ogImage - Open Graph image (opzionale)
 * @param {string} metadata.keywords - Parole chiave (opzionale)
 */
export function useMetaTags(metadata) {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    keywords,
  } = metadata;

  useEffect(() => {
    // Aggiorna titolo documento
    document.title = title ? `${title} | Carlo Tacchella` : 'Carlo Tacchella - il Sito Web';
  }, [title]);

  return (
    <Helmet>
      <title>{title ? `${title}` : 'Carlo Tacchella'}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}

export default useMetaTags;
