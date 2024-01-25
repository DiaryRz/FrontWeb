import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function Liste() {
  const[ListeCarburant,setListeCarburant] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8081/carburants')
    .then(res=>res.json())
    .then((result)=>{
      setListeCarburant(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5">
      <h2>Liste des carburants</h2>
            <div className='ListeCarburant'>
                <ul className='UlCarburant'>
                    {ListeCarburant.map(liste => (
                        <li className='ChaqueCarburant' key={liste.id}>
                            {liste.nomCarburant}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
    
  );
}
