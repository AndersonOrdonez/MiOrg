import './ListaOpciones.css';

const ListaOpciones = (props) =>  {

    //Método map -> arreglo.map ( (elemento, index ) => {
        // return <option></option>
    //})
        const equipos = [
            "Programación",
            "Front End",
            "Data Science",
            "Devops",
            "UX y Diseño",
            "Móvil",
            "Innovación y Gestión"
        ];

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
        
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {equipos.map( (equipo, index) => <option key={index} >{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;