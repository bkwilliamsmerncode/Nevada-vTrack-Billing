import { useEffect } from "react";

function SEO({
  title,
  description,
  path = "/",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attribute, key, content) => {
      let tag = document.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    document.documentElement.setAttribute(
      "data-current-path",
      path
    );
  }, [title, description, path]);

  return null;
}

export default SEO;