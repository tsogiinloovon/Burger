export const addIngrdients = (ortsNer) => {
  return {
    type: "ADD_INGREDIENT",
    ortsNer,
  };
};

export const removeIngrdients = (ortsNer) => {
  return {
    type: "REMOVE_INGREDIENT",
    ortsNer,
  };
};
