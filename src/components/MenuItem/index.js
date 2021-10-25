import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";
const MenuItem = (probs) => {
  return (
    <li className={css.MenuItem}>
      <NavLink exact={probs.exact} activeClassName={css.active} to={probs.link}>
        {probs.children}
      </NavLink>
    </li>
  );
};
export default MenuItem;
