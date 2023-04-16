import './Boton.css';

const Boton = (props) => {
    return <button className="boton" >{props.children}</button> //Aquí utilizamos la propiedad children
}

export default Boton;