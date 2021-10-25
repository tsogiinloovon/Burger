import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient key={`${el[0]}${i}}`} type={el[0]} />);
    }
    return <div></div>;
  });
  if (content.length === 0) {
    content = <p>хачиртай талхныхааа орцыг сонгоно уу ....</p>;
  }
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default withRouter(Burger);
