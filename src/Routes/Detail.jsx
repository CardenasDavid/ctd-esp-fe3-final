import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const{data}=useGlobalStates()
const params=useParams()
  

  let result = data?.find(item => item.id === parseInt(params.id))
    console.log(result)
  
  return (
    <>
      <h1>Detail Dentist {result?.id} </h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Web-site</th>
        </tr>
        <tr>
          <td>{result?.name}</td>
          <td>{result?.email}</td>
          <td>{result?.phone}</td>
          <td>{result?.website}</td>
        </tr>
      </table>
      </>
  )
}

export default Detail