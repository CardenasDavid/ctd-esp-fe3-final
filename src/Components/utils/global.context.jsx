import { createContext, useContext, useReducer, useEffect, useState, Children } from "react";
import axios from "axios";

//export const initialState = {theme: "", data: []}

const ContextGlobal = createContext()

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const[data,setData]=useState([])
    const url= "https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
        axios(url)
        .then(res=>setData(res.data))
    },[])

  return (
    <ContextGlobal.Provider value={{data}}>
        {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider

export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}

