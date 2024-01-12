import React from 'react';
import './css/Model.css';
import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';

export function InsererLieu() {
  return (
    <div className="container mt-5">
      <h2>Inserer votre lieu</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom du lieu :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom du lieu" />
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" />
                </div>
            </form>
    </div>
  );
}
