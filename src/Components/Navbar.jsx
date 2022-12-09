import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const{state,dispatch}=useGlobalStates()

  return (
    <nav>
      <img src='https://w7.pngwing.com/pngs/117/109/png-transparent-logo-dentistry-graphic-design-design-blue-text-logo.png' alt='logo'/>
      <div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='setThemeButton' onClick={() => {
        state.theme==='dark'? dispatch({type: 'light'}): dispatch({type: 'dark'})
      }}>
      Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar