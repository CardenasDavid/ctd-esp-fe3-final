import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  let [fav, setFav] = useState([])

  useEffect(() => {
    let data= localStorage.setItem('favs', JSON.stringify(fav))
  }, [fav])
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFav([...fav, {name, username, id}])
    console.log(fav);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
          <img src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" alt="doctor" />
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
