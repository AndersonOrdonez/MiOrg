import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

import { v4 as uuid } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: 'Anderson Ordoñez',
      puesto: 'Asistente Instructor',
      foto:'https://github.com/AndersonOrdonez.png',
      equipo: 'Front End',
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ]); //lo inicializamos con un arreglo vacío.

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    }
  ])



  const like = (id) => {
    console.log('like',id);
    const colaboradoresActualizados = colaboradores.map((colaborador) =>  {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados);
  }





  //Ternario --> condición  ? SeMuestra : noSeMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
  
    //spread operator, va a hacer una copia de los valores actuales
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log('Eliminar colaborador',id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    console.log(nuevosColaboradores);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) =>{
    console.log('Actualizar: ', color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear Equipo nuevo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid}])
  }


  return (
    <div className="App">
      <Header />

      {mostrarFormulario === true ? <Formulario 
            equipos={equipos.map( (equipo) => equipo.titulo )}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          
          /> : <></> }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer></Footer>

    </div>
  );
}

export default App;
