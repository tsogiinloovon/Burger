import React from "react";
import css from "./style.module.css";
const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц: гахайн мах:{props.order.orts.becon} яслага:
        {props.order.orts.cheese} үхрийн мах:{props.order.orts.meat} салад:
        {props.order.orts.salad}
      </p>
      <p>
        Хаяг: {props.order.hayga.name} {props.order.hayga.UB}
        {props.order.hayga.street}
      </p>
      <p>
        Үнийн дүн: <strong>{props.order.dun}₮</strong>
      </p>
    </div>
  );
};
export default Order;
