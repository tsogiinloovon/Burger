const initialState = {
  ingredients: {
    salad: 0,
    becon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
  purchasing: false,
};
const INGRDIENTS_PRICE = { salad: 150, cheese: 250, becon: 800, meat: 1500 };

const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + INGRDIENTS_PRICE[action.ortsNer],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: state.totalPrice - INGRDIENTS_PRICE[action.ortsNer],
      purchasing:
        state.totalPrice - INGRDIENTS_PRICE[action.ortsNer] === 0
          ? false
          : true,
    };
  }

  return state;
};

export default burgerReducer;
