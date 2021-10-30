import React, { useState } from "react"
import styles from './Input.module.css'
import ipRegex from 'ip-regex'
import classNames from "classnames"
import { useSelector,useDispatch } from 'react-redux'
import { update } from '../../features/ipGeolocator/ipGeolocatorSlice'
import { useGetIpInfoQuery } from '../../app/services/ipApi'

import Loader from "../Loader/Loader";

export default function Input() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.ipGeolocator.input);
  const { isFetching, isLoading } = useGetIpInfoQuery(input);
  const loading = isFetching || isLoading;
  const placeholder = "Search for any IP address or domain";
  const [inputText, setInputText] = useState('');
  const [valid, setValid] = useState(true);

  const isInputValid = (input) => {
    const domainRegExp = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/;
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
    dispatch(update(inputText));
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
      <button disabled={!valid || loading} className={classNames({
        [styles.button]: true,
        [styles.button__loading]: loading,
      })} onClick={submitHandler}>
        {loading ? <Loader /> : null}
      </button>
    </form>
  );
}
