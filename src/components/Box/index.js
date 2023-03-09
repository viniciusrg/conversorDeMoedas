import Input from '../Input';
import SelectMoeda from '../SelectMoeda';
import styles from './box.module.css';

function Box() {
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