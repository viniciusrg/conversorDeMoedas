import { useEffect, useState } from 'react';
import Input from '../Input';
import SelectMoeda from '../SelectMoeda';
import styles from './box.module.css';
import React from 'react';
import axios from 'axios';

function Box() {
    const [result, setResult] = useState();

    useEffect(() => {
        axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            .then(resposta => {
                setResult(resposta.data.USDBRL.bid);
            })
            .catch(erro => {
                console.log(erro);
            })
    }, [])
    console.log(result);

    return (
        <div className={styles.box}>
            <h1>Conversos de moedas</h1>
            <div className={styles.grupoInput}>
                <SelectMoeda />
                <Input type='number' placeholder='Insira o valor' />
                <label>Para</label>
                <SelectMoeda />
                <Input type='number' placeholder='Resultado' />
            </div>
        </div >
    )
}

export default Box;