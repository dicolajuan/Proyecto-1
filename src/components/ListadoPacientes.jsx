import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, setPacientes}) => {
    
    const cardPacientes = <>
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-10">
            Administra tus <span className="text-indigo-600 font-bold">Pacientes</span>
        </p>
        
        {pacientes.map( (paciente) => <Paciente paciente={paciente} setPaciente={setPaciente} setPacientes={setPacientes} pacientes={pacientes} key={paciente.id} /> )}
    </>;

    const cardVacio = <>
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-10">
            Agrega un pacientes y <span className="text-indigo-600 font-bold">apareceran aqui</span>
        </p>

        <div className="bg-white shadow-md rounded-lg py-5 px-5 mb-10">
            <p className="uppercase font-bold text-center">
                No hay datos de pacientes
            </p> 
        </div>
    </>;

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

            { pacientes && pacientes.length ? cardPacientes : cardVacio }


        </div>
    )
}

export default ListadoPacientes;