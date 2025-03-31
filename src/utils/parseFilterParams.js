const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = ['work', 'home', 'personal'];

  if (isType.includes(type)) return type;
};

const parseFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
    if (!isString) return;

    if (isFavourite === "true") return true;
    if (isFavourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  return {
    type: parseType(type),
    isFavourite: parseFavourite(isFavourite),
  };
};
