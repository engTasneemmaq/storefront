const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'fashion', displayName: 'Fashion' },
    { name: 'books', displayName: 'Books' },



  ],
  activeCategory: 'electronics',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'change':
    return { categories: state.categories, activeCategory: payload };
  default:
    return state;
  }
};

export const changeActiveCategory = category => {
  return {
    type: 'change',
    payload: category,
  };
};