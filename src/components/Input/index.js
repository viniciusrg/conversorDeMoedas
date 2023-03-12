import styles from './input.module.css';
import React from 'react';

function Input({type, placeholder, valor, setInputBase, id, setInputFinal, result}){
 function handleInput (e) {
    if (id === '1'){
        setInputBase(e.target.value);
        setInputFinal(result * e.target.value);
    }
    else if(id === '2'){

    }
 }
    return(
        <input id={id} className={styles.input} type={type} placeholder={placeholder} value={valor} onChange={(e)=>handleInput(e)} />
    )
}

export default Input;