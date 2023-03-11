import { useEffect, useState } from 'react';
import Input from '../Input';
import SelectMoeda from '../SelectMoeda';
import styles from './box.module.css';
import React from 'react';
import axios from 'axios';

function Box() {

    const [moedaBase, setMoedaBase] = useState('BRL');
    const [moedaFinal, setMoedaFinal] = useState('USD');
    console.log(moedaBase);
    console.log(moedaFinal);

    const [result, setResult] = useState();
    useEffect(() => {
        axios.get(`https://economia.awesomeapi.com.br/json/last/${moedaBase}-${moedaFinal}`)
            .then(resposta => {
                setResult(resposta['data'][moedaBase + moedaFinal]['bid']);
            })
            .catch(erro => {
                console.log(erro);
            })
    })

    console.log('result: ' + (1 * result))

    return (
        <div className={styles.box}>
            <h1>Conversos de moedas</h1>
            <div className={styles.grupoInput}>
                <SelectMoeda id='1' moedaBase={moedaBase} setMoedaBase={setMoedaBase} />
                <Input type='number' placeholder='Insira o valor' />
                <label>Para</label>
                <SelectMoeda id='2' moedaFinal={moedaFinal} setMoedaFinal={setMoedaFinal} />
                <Input type='number' placeholder='Resultado' />
            </div>
        </div >
    )
}

export default Box;