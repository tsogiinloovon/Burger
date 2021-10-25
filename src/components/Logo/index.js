import React from "react";
import LogoImage from "../../assets/images/burger-logo.png";
import css from './style.module.css';
const Logo = () => (
  <div className={css.Logo}>
    <img src={LogoImage} alt='Logo img' />
  </div>
);
export default Logo;
