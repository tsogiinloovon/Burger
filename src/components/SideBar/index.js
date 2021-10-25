import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../../components/General/Shadow/index";
import css from "./style.module.css";

const SideBar = (props) => {
  let classses = [css.SideBar, css.Close];
  if (props.showSidebar) {
    classses = [css.SideBar, css.Open];
  }
  return (
    <div>
      <Shadow show={props.showSidebar} darahad={props.toggleSidebar} />
      <div onClick={props.toggleSidebar} className={classses.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
      ;
    </div>
  );
};
export default SideBar;
