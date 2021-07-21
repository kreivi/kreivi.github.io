export default (title: String, description: String, url: String) => {
  const tags = [];
  if (title) {
    tags.push({ property: "og:title", content: title });
    tags.push({ name: "twitter:title", content: title });
  }
  if (description) {
    tags.push({ name: "description", content: description });
    tags.push({ property: "og:description", content: description });
    tags.push({ name: "twitter:description", content: description });
  }
  if (url) {
    tags.push({ property: "og:url", content: url });
  }
  return tags;
};
