import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    //Destructuración
    const {colorPrimario,colorSecundario,titulo,id} = props.datos;// Sacar estos datos de los props y creame las siguientes constantes.
    const { colaboradores, eliminarColaborador,actualizarColor,like } = props;

    const fondo = {
        backgroundColor:  hexToRgba(colorPrimario, 0.5)
    }

    const estilotitulo = {
        borderColor: colorPrimario
    }

    return <>
    {
        colaboradores.length > 0 &&
        <section className="equipo" style={fondo}>
            <input
                type='color'
                className='input-color'
                value={colorPrimario}
                onChange={evento => {
                    actualizarColor(evento.target.value, id)
                }}
            
            />
            <h3 style={estilotitulo} >{titulo}</h3>
            <div className="colaboradores">
            
            {
                colaboradores.map( (colaborador, index) => <Colaborador 
                    key={index} 
                    datos={colaborador}  
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }

            </div>
        </section>
    }
    </>
    

}

export default Equipo;