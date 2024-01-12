import React from 'react';
import './css/Model.css';
import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';

export function InsererCarburant() {
  return (
    <div className="container mt-5">
      <h2>Inserer un model de Carburant</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom du Carburant :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom du Carburant" />
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" />
                </div>
            </form>
    </div>
  );
}
