import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  let [fav, setFav] = useState([])

  useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(fav))
  }, [fav])
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFav([...fav, {name, username, id}])
    //alert('Odontologo '+ name + ' agreado a favoritos')
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4qkpNju-Z9OiD0UhXn3YGu1GajGP8y_2dw&usqp=CAU" alt="doctor" />
          <Link to = {"/dentist/"+id}>
          <h3>{name}</h3>
          </Link>
          <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={()=> addFav()} className="favButton"> ⭐ </button>
    </div>
  );
};

export default Card;
