import styles from './selectmoeda.module.css';
import React from 'react';
import Moedas from '../../moedas/moedas'

function SelectMoeda({ setMoedaBase, setMoedaFinal, id }) {
    function atualizarValorMoeda(id, e) {
        if (id === '1') { setMoedaBase(e.target.value) } else { setMoedaFinal(e.target.value); }
    }

    return (
        <select className={styles.select} onChange={(e) => { atualizarValorMoeda(id, e) }}>
            {
                Moedas.map((moeda) => {
                    return <option key={moeda} value={moeda}>{moeda}</option>
                }
                )
            }
        </select>
    )
}

export default SelectMoeda;