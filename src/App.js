import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condición  ? SeMuestra : noSeMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
