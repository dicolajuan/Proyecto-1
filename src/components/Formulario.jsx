import { useEffect, useState } from "react";
import AlertaError from "./shared/AlertaError";
import { Helper } from "./shared/Helper";
import LabelInput from "./shared/LabelInput";


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [alta,setAlta] = useState('');
  const [sintomas,setSintomas] = useState('');
  const [error,setError] = useState(false);


  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
      setError(false);
    }
  }, [paciente])
  




  const handleOnChangeNombre = (e) => {
    setNombre(e.target.value);
  }
  const handleOnChangePropietario = (e) => {
    setPropietario(e.target.value);
  }
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleOnChangeAlta = (e) => {
    setAlta(e.target.value);
  }
  const handleOnChangeSintomas = (e) => {
    setSintomas(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if([nombre,propietario,email,alta,sintomas].includes('')) {
      setError(true);
      return;
    }
    
    setError(false);

    const objPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    };

    paciente.id ? editarPaciente(objPaciente) : crearPaciente(objPaciente);

    limpiarStatesForm();

  }

  const crearPaciente = (objPaciente) => {
    objPaciente.id = Helper.generarId()
    setPacientes([...pacientes,objPaciente]);
  }

  const editarPaciente = (objPaciente) => {
    objPaciente.id = paciente.id;
    const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === objPaciente.id ? objPaciente : pacienteState );
    setPacientes(pacientesActualizados);
    setPaciente({});
  }

  const limpiarStatesForm = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Paciente</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600 font-bold"> Administralos</span></p>

      

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {error && <AlertaError> <p>Todos los campos son obligatorios</p> </AlertaError> }

          <div className="mb-5">
            {/* <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
            <input 
              id="mascota" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Nombre de la mascota" 
              value={nombre} 
              onChange={handleOnChangeNombre}/> */}
            <LabelInput 
              idInput='mascota'
              texto='Nombre Mascota'
              value={nombre}
              handleOnChange={handleOnChangeNombre}/>
          </div>

          <div className="mb-5">
            {/* <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
            <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario"/> */}
            <LabelInput 
              idInput='propietario' 
              texto='Nombre del propietario' 
              value={propietario} 
              handleOnChange={handleOnChangePropietario}/>
          </div>
          
          <div className="mb-5">
            {/* <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email del propietario</label>
            <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email contacto del propietario"/> */}
            <LabelInput 
              idInput='email' 
              texto='Email del propietario' 
              type='email'
              value={email}
              handleOnChange={handleOnChangeEmail}/>
          </div>
          
          <div className="mb-5">
            {/* <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Fecha de Alta</label>
            <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" /> */}
            <LabelInput 
              idInput='alta' 
              texto='Fecha de Alta' 
              type='date'
              value={alta}
              handleOnChange={handleOnChangeAlta}/>
          </div>
          
          <div className="mb-5">
            <label 
              className="block text-gray-700 uppercase font-bold" 
              htmlFor="alta">
              Sintomas
            </label>
            <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Describe los sintomas"
              value={sintomas}
              onChange={handleOnChangeSintomas}/>
          </div>

          <input 
            type="submit" 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all" 
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />

      </form>

    </div>
  )
}

export default Formulario;