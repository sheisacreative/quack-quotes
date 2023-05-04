export const firstLower = (lower) => {
  return (lower && lower[0].toLowerCase() + lower.slice(1)) || lower;
};

// Creates an array with tags
export const getTagsArray = (array) => {
  const tagsArray = array.map((tag) => {
    return tag.name;
  });

  return tagsArray;
};

// Returns an array with tags
export const defineTagsArray = (quotes) => {
  const allTags = quotes.reduce((acc, currentQuote) => {
    currentQuote.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return allTags;
};

// turn to slug
const diacritic = require("diacritic");

export const turnToSlug = (str) => {
  str = diacritic.clean(str.toLowerCase().trim()); // remover acentos e converter para minúsculas
  str = str.replace(/[^\w\s-]/g, ""); // remover caracteres especiais
  str = str.replace(/[\s_]+/g, "-"); // substituir espaços e underscores por traços
  return str;
};

// Get tag Name from Slug
export const getTagNameFromSlug = (slug, tagsArray) => {
  for (const tag of tagsArray) {
    if (tag.slug === slug) {
      return tag.name;
    }
  }
  return "";
};
