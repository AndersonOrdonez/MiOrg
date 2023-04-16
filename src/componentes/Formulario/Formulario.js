import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaOpcion from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = () => {

    const [nombre,actualizarNombre] = useState('');
    const [puesto,actualizarPuesto] = useState('');
    const [foto,actualizarFoto] = useState('');
    const [equipo,actualizarEquipo] = useState('');

    const manejarEnvio = (evento) => {
        evento.preventDefault();//Para que no cargue la página al hacer submit

        let datosAEnviar = { //Datos obtenidos del formulario en un bojeto
            nombre: nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }

        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required= {true} 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto}
            actualizarValor={actualizarFoto}
            />
            <ListaOpcion 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
            />
            <Boton> 
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;