import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo';
import ListaOpcion from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props) => {



    const [nombre,actualizarNombre] = useState('');
    const [puesto,actualizarPuesto] = useState('');
    const [foto,actualizarFoto] = useState('');
    const [equipo,actualizarEquipo] = useState('');

    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');

    const {registrarColaborador,crearEquipo} = props;//Desestructar el props

    const manejarEnvio = (evento) => {
        evento.preventDefault();//Para que no cargue la página al hacer submit

        let datosAEnviar = { //Datos obtenidos del formulario en un bojeto
            nombre: nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }

        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (evento) =>  {
        evento.preventDefault();
        crearEquipo({titulo,colorPrimario: color})

    }



    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required= {true} 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Campo
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpcion 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos= {props.equipos}
            />
            <Boton> 
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el nuevo equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingresar título" 
                required= {true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
                
            />
            <Campo
                titulo="Color" 
                placeholder="Ingresar Color en Hex" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type= 'color'
            />
            <Boton> 
                Registrar equipo
            </Boton>
        </form>
        
    </section>
}

export default Formulario;