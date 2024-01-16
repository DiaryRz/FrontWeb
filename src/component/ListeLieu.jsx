import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';

export function ListeLieu() {
  const[ListeLieu,setListeLieu] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8081/lieux')
    .then(res=>res.json())
    .then((result)=>{
      setListeLieu(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5">
      <h2>Inserer votre lieu</h2>
            <div>
                <table border='1px'>
                    <tr>
                        <th>Nom du lieu</th>
                    </tr>
                    {ListeLieu.map(liste => (
                        <tr>
                            <td key={liste.id}>
                                {liste.nomLieu}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

    </div>
    
  );
}
