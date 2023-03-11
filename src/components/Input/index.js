import styles from './input.module.css';
import React from 'react';

function Input({type, placeholder}){
    return(
        <input className={styles.input} type={type} placeholder={placeholder} />
    )
}

export default Input;