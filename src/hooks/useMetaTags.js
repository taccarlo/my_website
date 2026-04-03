import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Hook per centralizzare la gestione dei meta tags e schema markup
 * @param {Object} metadata - Configurazione meta tag
 * @param {string} metadata.title - Titolo della pagina
 * @param {string} metadata.description - Descrizione SEO (max 160 caratteri)
 * @param {string} metadata.canonical - URL canonico (opzionale)
 * @param {string} metadata.ogTitle - Open Graph title (opzionale)
 * @param {string} metadata.ogDescription - Open Graph description (opzionale)
 * @param {string} metadata.ogImage - Open Graph image URL (opzionale)
 * @param {string} metadata.keywords - Parole chiave separate da virgola (opzionale)
 * @param {string} metadata.author - Autore della pagina (opzionale)
 * @param {Object} metadata.schema - JSON-LD schema object (opzionale)
 */
export function useMetaTags(metadata) {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage = 'https://taccarlo.web.app/og-image.jpg',
    keywords,
    author,
    schema,
  } = metadata;

  useEffect(() => {
    // Aggiorna titolo documento
    document.title = title ? `${title} | Carlo Tacchella` : 'Carlo Tacchella - Didattica e Sviluppo';
  }, [title]);

  // Schema markup JSON-LD per structured data
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Carlo Tacchella',
    'url': 'https://taccarlo.web.app',
    'sameAs': [
      'https://github.com/taccarlo'
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | Carlo Tacchella` : 'Carlo Tacchella - Didattica e Sviluppo'}</title>
      <meta name="description" content={description || 'Carlo Tacchella - Insegnante, sviluppatore e creatore di contenuti didattici'} />
      {canonical && <link rel="canonical" href={`https://taccarlo.web.app${canonical}`} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="language" content="it-IT" />
      
      {/* Open Graph for Social Media */}
      <meta property="og:title" content={ogTitle || title || 'Carlo Tacchella'} />
      <meta property="og:description" content={ogDescription || description || 'Insegnante, sviluppatore e creatore di contenuti didattici'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://taccarlo.web.app${canonical || '/'}`} />
      <meta property="og:site_name" content="Carlo Tacchella" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title || 'Carlo Tacchella'} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}

export default useMetaTags;
