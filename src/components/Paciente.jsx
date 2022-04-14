import { cloneElement } from "react";

const Paciente = ({paciente, setPaciente, setPacientes, pacientes}) => {
    
    const {nombre, propietario, email, alta, sintomas} = paciente;

    const handleClickEditar = () => {
        setPaciente(paciente);
    };
    
    const handleClickEliminar = () => {
        const respuesta = confirm('Esta seguro de querer eliminar?');

        respuesta && setPacientes(pacientes.filter(pacienteItem => pacienteItem.id !== paciente.id));
    };

    return (
        <> 
            <div className="mx-5 my-8 bg-white shadow-md rounded-lg py-10 px-5">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
                    
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
                    
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
                    
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{alta}</span></p>
                    
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>
                
                <div className="flex justify-between mt-10">
                    <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={handleClickEditar}>
                        Editar
                    </button>

                    <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={handleClickEliminar}>
                        Eliminar
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default Paciente