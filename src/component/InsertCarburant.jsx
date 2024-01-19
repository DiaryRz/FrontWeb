import React, { useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';

export function InsererCarburant() {
  const[nomCarburant ,setCarburant] = useState('')
  const Inserer=(e)=>{
    e.preventDefault()
    const carb = {nomCarburant}
    console.log(carb)
    fetch('http://localhost:8081/carburants/create' ,{
      method:"POST",
      headers : {"Content-Type":"application/json"},
      body : JSON.stringify(carb)
    }).then(()=>{
      setCarburant('')
      console.log('Inserer avec succes')
    })
  }
  return (
    <div className="container mt-5">
      <h2>Inserer un model de Carburant</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom du Carburant :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom du Carburant" 
                    value={nomCarburant} onChange={(e)=>setCarburant(e.target.value)}/>
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" onClick={Inserer} />
                </div>
            </form>
    </div>
  );
}