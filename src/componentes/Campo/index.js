import { useState } from 'react';
import './Campo.css';

const Campo = (props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const { type = 'text' } = props;

    const manejaCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejaCambio}
            type={type}
        ></input>
    </div>
}

export default Campo; 