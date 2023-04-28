import './ListaOpciones.css';

const ListaOpciones = (props) =>  {

    //Método map -> arreglo.map ( (elemento, index ) => {
        // return <option></option>
    //})

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
        
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index} >{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;