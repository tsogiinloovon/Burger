import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (probs) => {
  
  return (
    <div className={css.BuildControls}>
      <p>бүргерийн үнэ:{probs.price}</p>

      {Object.keys(probs.ingredientsNames).map((el) => {
        return (
          <BuildControl
            key={el}
            disabled={probs.disabledIngrdients}
            ortsNemeh={probs.ortsNemeh}
            ortsHasah={probs.ortsHasah}
            type={el}
            orts={probs.ingredientsNames[el]}
          />
        );
      })}
      <button onClick = {probs.showConfirmModal} disabled = {probs.disabled}className={css.OrderButton}>Захиалах</button>
    </div>
  );
};

export default BuildControls;
