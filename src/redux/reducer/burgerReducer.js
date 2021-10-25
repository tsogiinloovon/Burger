const initialState = {
  ingredients: {
    salad: 0,
    becon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
};
const INGRDIENTS_PRICE = { salad: 150, cheese: 250, becon: 800, meat: 1500 };

const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.nemehOrts]: state.ingredients[action.nemehOrts] + 1,
      },
      totalPrice: state.totalPrice + INGRDIENTS_PRICE[action.nemehOrts],
    };
  }
  if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.hasahOrts]: state.ingredients[action.hasahOrts] - 1,
      },
      totalPrice: state.totalPrice - INGRDIENTS_PRICE[action.hasahOrts],
    };
  }

  return state;
};

export default burgerReducer;
