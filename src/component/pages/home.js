import React from 'react'
import '../style/home.css'

export const Home = () => {
  return (
    <div className='container '>
    <div className='photo'>
    <img  className='img3' src='https://images.pexels.com/photos/1823704/pexels-photo-1823704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
       
    </div>
    <div className='descrip'>
      <h1><strong>Edwards</strong> Fonseca</h1>
      <p>Hey Me llamo Edwards , aca podras encontrar un poco de mi historia lo que hago actualmente y lo que hice en mi pasado
        espero te agrade y te ayude en tu camino a la programacion
      </p>
      <strong><h2>JOB TITLE</h2></strong>
      <p>Chef Professional - Egresado de ISMM Medellin-Colombia</p>
      <p>Full Stack Developer - Egresado de 4GeeksAcademy Santigo-Chile</p>
      <strong><h2>HOMETOWN</h2></strong>
      <p>Venezuela - Falcon</p>
      <strong><h2>VICIOUS</h2></strong>
      <ol>
        <li>Papas Fritas</li>
        <li>Games</li>
        <li>Front-end</li>
        <li>Peliculas Terror</li>
        <li>Dormir</li>
        <li>Pisco a Luca </li>
    
      </ol>
      
    </div>
    </div>
  )
}
