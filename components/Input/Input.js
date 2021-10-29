import React, { useState } from "react"
import styles from './Input.module.css'

export default function Input() {
  const placeholder = "Search for any IP address or domain";
  const [inputText, setInputText] = useState('');

  const changeHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className={styles.form}>
      <input placeholder={placeholder} className={styles.inputText} value={inputText} type='text' onChange={changeHandler} />
      <button className={styles.button} onClick={submitHandler}></button>
    </form>
  );
}
