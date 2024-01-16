import React, { useState } from 'react';
import './css/Model.css';
//import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function InsererLieu() {
  const[nomLieu ,setLieu] = useState('')
  const Inserer=(e)=>{
    e.preventDefault()
    const lieu = {nomLieu}
    console.log(lieu)
    fetch('http://localhost:8081/lieux/create' ,{
      method:"POST",
      headers : {"Content-Type":"application/json"},
      body : JSON.stringify(lieu)
    }).then(()=>{
      setLieu('')
      console.log('Inserer avec succes')
    })
  }
   
  return (
    <div className="container mt-5">
      <h2>Inserer votre lieu</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom du lieu :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom du lieu" 
                    value={nomLieu} onChange={(e)=> setLieu(e.target.value)}/>
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" onClick={Inserer}/>
                </div>
            </form>
            <button>
              <Link to="/SelectLieu">Voir les lieux existants</Link>
            </button>
    </div>
    
  );
}
