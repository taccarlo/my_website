interface MetaTagsOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
  author?: string;
  schema?: Record<string, unknown>;
}

export function useMetaTags(metadata: MetaTagsOptions): JSX.Element;
export default useMetaTags;
