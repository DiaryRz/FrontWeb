import React from 'react';
import './css/Model.css';
import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';

export function InsererBoiteDeVitesse() {
  return (
    <div className="container mt-5">
      <h2>Inserer une boite de vitesse</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom de la boite de vitesse :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom de la boite de vitesse" />
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" />
                </div>
            </form>
    </div>
  );
}
