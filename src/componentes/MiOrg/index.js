import { useState } from "react";
import './MiOrg.css';

const MiOrg = (props) => {

    //EStado - hooks
    //useState
    //useState()
    //const [nombreVAriable, funciónQueActualiza] = useSate(valorInicial)
    //const [nombre, actualizarNombre] = useState('Anser');
    //const [mostrar, actualizarMostrar] = useState(true);
    //const manejarClick = () => {
    //    console.log('Elemento', !mostrar);
    //    actualizarMostrar(!mostrar); //Switch,false/true
    //}

    return <section className="orgSection" >
        <h3 className="title">Mi organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}></img>

    </section>
}

export default MiOrg;