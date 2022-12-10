import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'


const Navbar = () => {
  const{state,dispatch}=useGlobalStates()

  return (
    <nav className={state.theme}>
      <img src='https://w7.pngwing.com/pngs/117/109/png-transparent-logo-dentistry-graphic-design-design-blue-text-logo.png' alt='logo'/>
      <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button className='setThemeButton' onClick={() => {
        state.theme==='dark'? dispatch({type: 'light'}): dispatch({type: 'dark'})
      }}>
      Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar