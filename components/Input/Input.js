import React, { useState } from "react"
import styles from './Input.module.css'
import ipRegex from 'ip-regex'
import classNames from "classnames";

export default function Input() {
  const placeholder = "Search for any IP address or domain";
  const [inputText, setInputText] = useState('');
  const [valid, setValid] = useState(true);

  const isInputValid = (input) => {
    const domainRegExp = /^((?!-)[A-Za-z0-9-]{1, 63}(?<!-)\\.)+[A-Za-z]{2, 6}$/;
    return ipRegex({ includeBoundaries: true }).test(input) || domainRegExp.test(input);
  }

  const changeHandler = (e) => {
    const input = e.target.value;
    setInputText(input);
    setValid(isInputValid(input));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setValid(isInputValid(inputText));
  }

  return (
    <form className={styles.form}>
      <input
        required
        placeholder={placeholder}
        className={classNames({
          [styles.inputText]: true,
          [styles.inputText__invalid]: !valid,
        })}
        value={inputText} type='text'
        onChange={changeHandler} />
      <button disabled={!valid} className={styles.button} onClick={submitHandler}></button>
    </form>
  );
}
