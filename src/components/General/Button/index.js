import React from 'react';
import css from './style.module.css';

const Button = (probs) => <button onClick={probs.daragdsan} className={`${css.Button} ${css[probs.btnType]}`}>{probs.text}</button>

export default Button;