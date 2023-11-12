import { useState, useEffect } from 'react';

function Formulario() {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Enviando formulario...');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-sky-500 font-bold'>Adminístralos</span>
      </p>

      <form
        className='bg-neutral-800 shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}
      >
        <div className='mb-5'>
          <label
            htmlFor='nombreMascota'
            className='block text-blue-200 uppercase font-bold'
          >
            Nombre mascota
          </label>
          <input
            type='text'
            id='nombreMascota'
            placeholder='Nombre de la mascota'
            className='bg-neutral-800 border-2 border-neutral-600 focus:border-neutral-500 transition-all w-full p-2 mt-2 placeholder-neutral-500 rounded-md outline-none'
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='nombrePropietario'
            className='block text-blue-200 uppercase font-bold'
          >
            Nombre propietario
          </label>
          <input
            type='text'
            id='nombrePropietario'
            placeholder='Nombre del propietario'
            className='bg-neutral-800 border-2 border-neutral-600 focus:border-neutral-500 transition-all w-full p-2 mt-2 placeholder-neutral-500 rounded-md outline-none'
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='correoElectronico'
            className='block text-blue-200 uppercase font-bold'
          >
            Correo electrónico
          </label>
          <input
            type='email'
            id='correoElectronico'
            placeholder='Correo electrónico'
            className='bg-neutral-800 border-2 border-neutral-600 focus:border-neutral-500 transition-all w-full p-2 mt-2 placeholder-neutral-500 rounded-md outline-none'
            onChange={(e) => setCorreoElectronico(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='fechaAlta'
            className='block text-blue-200 uppercase font-bold'
          >
            Fecha de alta
          </label>
          <input
            type='date'
            id='fechaAlta'
            className='bg-neutral-800 border-2 border-neutral-600 focus:border-neutral-500 transition-all w-full p-2 mt-2 rounded-md outline-none'
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-blue-200 uppercase font-bold'
          >
            Síntomas
          </label>
          <textarea
            id='sintomas'
            placeholder='Describe los síntomas'
            className='bg-neutral-800 border-2 border-neutral-600 focus:border-neutral-500 transition-all w-full p-2 mt-2 placeholder-neutral-500 rounded-md outline-none'
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type='submit'
          value='Agregar paciente'
          className='bg-sky-600 w-full p-3 mt-2 rounded-md outline-none uppercase font-bold hover:bg-sky-700 cursor-pointer transition-all'
        />
      </form>
    </div>
  );
}

export default Formulario;
