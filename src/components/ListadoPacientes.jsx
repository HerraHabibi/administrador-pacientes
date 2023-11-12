import Paciente from './Paciente';

function ListadoPacientes() {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Administra tus {''}
        <span className='text-sky-500 font-bold'>Pacientes y Citas</span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      
    </div>
  );
}

export default ListadoPacientes;
