import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, addFav }) => {


  return (
    <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4qkpNju-Z9OiD0UhXn3YGu1GajGP8y_2dw&usqp=CAU" alt="doctor" />
          <Link to = {"/dentist/"+id}>
          <h3>{name}</h3>
          </Link>
          <p>{username}</p>
        <button onClick={()=> addFav(name,username,id)} className="favButton"> ⭐ </button>
    </div>
  );
};

export default Card;
