import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    let data= JSON.parse(localStorage.getItem('favs'))
      if(data){
        setItems(data)
      }
  }, [])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {items?.map(item => (
              <Card name={item.name} username={item.username} key={item.id} id={item.id}/>
          ))}
      </div>
    </>
  );
};

export default Favs;
