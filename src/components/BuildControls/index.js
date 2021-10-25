import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>бүргерийн үнэ:{props.price}</p>

      {Object.keys(props.ingredientsNames).map((el) => {
        return (
          <BuildControl
            key={el}
            disabled={props.disabledIngrdients}
            ortsNemeh={props.ortsNemeh}
            ortsHasah={props.ortsHasah}
            type={el}
            orts={props.ingredientsNames[el]}
          />
        );
      })}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
