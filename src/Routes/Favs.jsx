import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    let data= JSON.parse(localStorage.getItem('favs'))
      if(data){
        setItems(data)
      }
  }, [])
  console.log(items);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {items?.map(item => (
              <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
          ))}
      </div>
    </>
  );
};

export default Favs;
