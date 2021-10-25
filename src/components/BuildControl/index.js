import React from "react";
import css from "./style.module.css";
const BuildControl = (probs) => {
  return(
  <div className={css.BuildControl}>
    <div  className={css.Label}>
      {probs.orts}
    </div>
    <button
      onClick={() => {
        probs.ortsNemeh(probs.type);
      }}
      className={css.More}
    >
      нэмэх
    </button>
    <button
      disabled={probs.disabled[probs.type]}
      onClick={() => probs.ortsHasah(probs.type)}
      className={css.Less}
    >
      хасах
    </button>
  </div>
  )
};

export default BuildControl;
