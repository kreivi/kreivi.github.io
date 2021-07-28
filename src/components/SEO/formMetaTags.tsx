/**
 * Utility method that forms meta tags that can be used in page head.
 * @param title page title
 * @param description page description
 * @param url page url
 * @returns array of objects that can be used with react-helmet meta
 */
export default (title: string, description: string, url: string): Array<Object> => {
  const tags = [];
  if (title) {
    tags.push({ property: 'og:title', content: title });
    tags.push({ name: 'twitter:title', content: title });
  }
  if (description) {
    tags.push({ name: 'description', content: description });
    tags.push({ property: 'og:description', content: description });
    tags.push({ name: 'twitter:description', content: description });
  }
  if (url) {
    tags.push({ property: 'og:url', content: url });
  }
  return tags;
};
