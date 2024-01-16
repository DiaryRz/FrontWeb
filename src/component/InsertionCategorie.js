import React, { useState } from 'react';
import '../assets/bootstrap/css/bootstrap.min.css'; 
import './css/Model.css';
import {Header , Footer} from './../component/Header';

const InsertionCategorie = () => { 
    const[nomCategorie ,setNomCategorie] = useState('')
    const Inserer=(e)=>{
        e.preventDefault()
        const carb = {nomCategorie}
        console.log(carb)
        fetch('http://localhost:8081/carburants/create' , {
        method:"POST",
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(carb)
    }).then(()=>{
        setNomCategorie('')
        console.log('Inserer avec succes')
    })
    } 
    return (
        <>  
            <Header />
            <div class="container-fluid" style={{marginTop:'20px'}}>
                <div class="container-fluid">
                    <div class="container-fluid">
                    <div class="card">
                        <div class="card-body" style={{backgroundColor:'rgb(237 237 247)'}}>
                        <h5 class="card-title fw-semibold mb-4" style={ {textAlign:'center'}}> Insertion Categorie </h5>
                        <div class="card">
                            <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="text" class="form-label">Categorie</label>
                                    <input type="text" className="form-control" id="text" placeholder="Entrer la categorie " 
                                    value={nomCategorie} onChange={(e)=>setNomCategorie(e.target.value)}/>
                                </div>
                               
                                <div className='Valider'>
                                    <input type="submit" value="Inserer" onClick={Inserer} />
                                </div>
                            </form>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default InsertionCategorie;