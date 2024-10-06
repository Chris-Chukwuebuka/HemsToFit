// Search Engine Optimization
// This file is used to set the SEO for the website. It is used to set the meta tags for the website.
// It is used to set the title, description, and image for the website.

const SEO = ({ title = 'Default Title', metaDescription } = {}) => {
  document.title = title;
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute('content', metaDescription);
  }
}

export default SEO;