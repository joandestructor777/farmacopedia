import './App.css'
import Beneficio from './componentes/Beneficios';
import GrupoCardButton from './componentes/GrupoCardButton';
import gruposFarmacologicos from './dataGruposFarmacologicos';
import { useState, useEffect } from 'react';
import { LogicaGrupoFarma } from './logicaGrupoFarma/LogicaGrupoFarma';

function App() {
  const [activar, setActivar] = useState(false);
  const [numKey, setNumKey] = useState(null);
  const mostrarGrupo = (indice)=>{
    setNumKey(indice);
    setActivar(!activar);
  }
  const cerrarGrupo = ()=>{
    setActivar(false);
  }

  useEffect(()=>{
    console.log('valor actualizado',numKey)
  },[numKey])


  return (
    <>
      <header>
        <div className='img-header-container'>
          <img className='img-header' src="../public/farmacopedia-img-white2.png" alt="logo de la pagina de farmacopedia enfermeria" />
        </div>
        <div className='text-header-container'>
          <h1>Guía interactiva de grupos farmacológicos para estudiantes de salud</h1>
        </div>
      </header>
      <div className="button-list-container">
        <button className='button-list'><a href="#grupos-farmacologicos">Explorar Grupos Farmacológicos</a></button>
      </div>
      <section className='benefits-container'>
        <Beneficio altBeneficio='beneficio de obtener informacion clara y puntual' tituloBeneficio='Información Clara' imagen='info' TextoBeneficio={'El contenido está redactado de forma sencilla y respaldado por fuentes seguras, ideal para estudiar sin confusiones.'}/>
        <Beneficio altBeneficio='beneficio de obtener informacion en cualquier dispositivo' tituloBeneficio='Adaptable a cualquier dispositivo' imagen='responsivo' TextoBeneficio={'La plataforma se adapta a cualquier dispositivo móvil, permitiéndote consultar lo que necesites estés donde estés.'} />
        <Beneficio altBeneficio='beneficio de repasar rapido' tituloBeneficio='Repaso Rápido' imagen='repaso' TextoBeneficio={'Diseñada con estructura visual y puntos clave para que encuentres la información en segundos, sin perder tiempo.'}/>
        <Beneficio altBeneficio='beneficio de obtener informacion especial para el area de salud' tituloBeneficio='Hecho para ti' imagen='hospital' TextoBeneficio={'Cada sección se enfoca en lo que realmente necesitas saber, especial para el área de salud.'}/>
      </section>
      <section className='farmacologicos' id="grupos-farmacologicos">
        <h2 className='farmacologicos-title'>Grupos Farmacológicos</h2>
        <div className='farmacologicos-buttons-container'>
          {gruposFarmacologicos.map((grupo, indice) =>(
            <GrupoCardButton key={indice} GrupoCardButtonImg={'../public/medicine.png'} GrupoCardButtonTitle={grupo.nombre} mostrarGrupo={()=> mostrarGrupo(indice)} />
          ))}
      </div>
        {activar && numKey !== null && LogicaGrupoFarma(numKey, cerrarGrupo)}
      </section>
      <footer className="footer">
        <p>&copy; 2025 Farmacopedia Enfermería. Todos los derechos reservados.</p>
        <p>Diseñado por Joan González | Proyecto educativo sin fines de lucro</p>
      </footer>
    </>
  )
}

export default App
