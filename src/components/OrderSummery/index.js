import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";
const OrderSummary = (probs) => {
  return (
    <div className={css.OrderSummary}>
      <h3>Таны захиалгууд</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(probs.ingredients).map((el) => {
          return (
            <li key={el}>
              {probs.ingredientsNames[el]} : {probs.ingredients[el]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>Захиалгын дүн:{probs.price}₮</strong>
      </p>
      <p>Цаашаа үргэжлүүлэх үү</p>
      <Button daragdsan={probs.onCancel} btnType="Danger" text="татгалзах" />
      <Button
        daragdsan={probs.onContinue}
        btnType="Success"
        text="үргэлжлүүлэх"
      />
    </div>
  );
};
export default OrderSummary;
