import React from "react";
import css from "./style.module.css";

const BurgerIngredient = (probs) => {
  if (probs.type === "bread-top")
    return (
      <div className={css.BreadTop}>
        <div className={css.Seed}></div>
        <div className={`${css.Seed} ${css.Second}`}></div>
        <div className={`${css.Seed} ${css.Third}`}></div>
        <div className={`${css.Seed} ${css.Fourth}`}></div>
      </div>
    );
  if (probs.type === "salad") return <div className={css.Salad}></div>;
  if (probs.type === "becon") return <div className={css.Becon}></div>;
  if (probs.type === "meat") return <div className={css.Meat}></div>;
  if (probs.type === "cheese") return <div className={css.Cheese}></div>;
  if (probs.type === "bread-bottom")
    return <div className={css.BreadBottom}></div>;
  return <div>{probs.type}</div>;
};

export default BurgerIngredient;
