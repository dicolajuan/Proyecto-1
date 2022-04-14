import { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  
  const[pacientes,setPacientes] = useState([]);
  const[paciente,setPaciente] = useState({});

  useEffect(() => {
    const pacientesSS = JSON.parse(sessionStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesSS);
  },[])


  useEffect(() => {
    sessionStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
      </div>
    </div>
  )
};

export default App;
