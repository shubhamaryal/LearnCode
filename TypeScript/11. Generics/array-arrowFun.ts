function getSearchProducts<T>(products: T[]): T {
  return products[0];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const arrayIndex = 4;
  return products[arrayIndex];
};

const getMoreMoreSearchProducts = <T>(products: T[]): T => {
  const arrayIndex = 4;
  return products[arrayIndex];
};

// the comma used is not a error, it is mostly used in react to get that the tag used is not a JSX but a generics
