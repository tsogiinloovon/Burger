import React from "react";
import Shadow from "../Shadow";
import css from "./style.module.css";
const Modal = (probs) => {
  return (
    <div>
      <Shadow show={probs.show} darahad={probs.closeConfirmModal} />
      <div
        style={{
          transform: probs.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: probs.show ? "1" : "0",
        }}
        className={css.Modal}
      >
        {probs.children}
      </div>
    </div>
  );
};
export default Modal;
