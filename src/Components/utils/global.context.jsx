import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import {actionStyle} from './actionStyle'

const ContextGlobal = createContext()

const initialState = {
  theme: "light"
}


const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(actionStyle, initialState)
    const[data,setData]=useState([])
    const url= "https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
        axios(url)
        .then(res=>setData(res.data))
    },[])

  return (
    <ContextGlobal.Provider value={{data,state,dispatch}}>
        {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}

