import React from 'react'
import Card from '../Components/Card'
import {useGlobalStates} from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const{data}=useGlobalStates()
  return (
    <main className="" >
      
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data?.map(item => (
              <Card name={item.name} username={item.username} key={item.id}/>
          ))}
      </div>
      
    </main>
  )
}

export default Home