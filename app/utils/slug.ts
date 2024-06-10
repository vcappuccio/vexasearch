export const randomAlphaNumeric = (length: number) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const encodeSlug = (title: string) => {
  console.log("Calling encodeSlug function with title:", title);
  const urlPattern = /(http|https):\/\/[^\s$.?#].[^\s]*/g;
  const urls = title.match(urlPattern);
  let slug = title;

  if (urls) {
    urls.forEach((url, index) => {
      const encodedUrl = encodeURIComponent(url);
      const placeholder = `__URL${index}__`;
      slug = slug.replace(url, placeholder);
    });
  }

  slug = slug
    .replace(/[^\w\s-]+/g, "") 
    .replace(/%/g, "");

  if (urls) {
    urls.forEach((url, index) => {
      const encodedUrl = encodeURIComponent(url);
      const placeholder = `__URL${index}__`;
      slug = slug.replace(placeholder, encodedUrl);
    });
  }

  return slug;
};

export const decodeSlug = (slug: string) => {
  slug = slug.split("-").slice(0, -1).join("-");
  return decodeURIComponent(slug.replace(/-/g, " "));
};
