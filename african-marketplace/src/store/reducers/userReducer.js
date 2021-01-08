export const initialState = {
  isLoading: false,
  error: '',
  isEditing: false,
  userData: {
    username: '',
    photoURL: '',
    email: '',
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    primaryLanguage: '',
    preferredCurrency: '',
    marketLocations: [
      {
        name: 'east',
        street: '',
        city: '',
        country: '',
      },
    ],
    itemsForSale: [
      {
        commodityCat: '',
        subCat: '',
        commodityProduct: '',
        description: '',
        salePrice: 0,
        quantity: 50,
        marketsSold: [
          {
            marketlocationid: 5,
            name: '',
            street: '',
            city: '',
            country: '',
          },
        ],
      },
    ],
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CURRENTUSER_START':
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case 'FETCH_CURRENTUSER_SUCCESS':
      return {
        ...state,
        error: '',
        isEditing: true,
        isLoading: false,
        userData: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
