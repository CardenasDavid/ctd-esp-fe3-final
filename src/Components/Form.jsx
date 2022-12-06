import React,{ useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  let [user,setUser]= useState({
    nombre:""
  })

  let [msg,setMsg]=useState(false)
  let [msg2,setMsg2]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    user.nombre.length <= 5 ? setMsg2(true):setMsg(true)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre completo" type='text' onChange={(e)=> setUser({...user,nombre:e.target.value})} name='nombre'/>
        <input placeholder="Email" type='email' required/>
        <button>Enviar</button>
      </form>
      {msg2 && <p>Por favor verifique su información nuevamente</p>}
      {msg && <p>Gracias {user.nombre}, te contactaremos cuando antes vía mail</p>}
      
    </div>
  )
}


export default Form;
