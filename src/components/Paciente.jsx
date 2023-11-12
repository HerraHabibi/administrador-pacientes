function Paciente() {
  return (
    <div className='mx-5 mb-10 bg-neutral-800 shadow-md px-5 py-10 rounded-lg'>
      <p className='font-bold mb-3 text-blue-200 uppercase'>
        Nombre mascota: {''}
        <span className='text-neutral-200 font-normal normal-case'>Hook</span>
      </p>

      <p className='font-bold mb-3 text-blue-200 uppercase'>
        Nombre propietario: {''}
        <span className='text-neutral-200 font-normal normal-case'>
          HerraHabibi
        </span>
      </p>

      <p className='font-bold mb-3 text-blue-200 uppercase'>
        Email: {''}
        <span className='text-neutral-200 font-normal normal-case'>
          contacto.herrahabibi@gmail.com
        </span>
      </p>

      <p className='font-bold mb-3 text-blue-200 uppercase'>
        Fecha de Alta: {''}
        <span className='text-neutral-200 font-normal normal-case'>
          07/01/2002
        </span>
      </p>

      <p className='font-bold text-blue-200 uppercase'>
        Síntomas: {''}
        <span className='text-neutral-200 font-normal normal-case'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          eligendi sunt, est maiores repellendus porro laudantium soluta
          asperiores tempore officiis ab quae, error delectus, explicabo
          voluptatum commodi quidem voluptatibus ullam.
        </span>
      </p>
    </div>
  );
}

export default Paciente;
