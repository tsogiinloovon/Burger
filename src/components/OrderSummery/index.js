import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";
const OrderSummary = (props) => {
  return (
    <div className={css.OrderSummary}>
      <h3>Таны захиалгууд</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => {
          return (
            <li key={el}>
              {props.ingredientsNames[el]} : {props.ingredients[el]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>Захиалгын дүн:{props.price}₮</strong>
      </p>
      <p>Цаашаа үргэжлүүлэх үү</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="татгалзах" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="үргэлжлүүлэх"
      />
    </div>
  );
};
export default OrderSummary;
