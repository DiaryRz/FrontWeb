import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function RechercheFonction() {
   
  return (
    <>
        <form>
            <div className='row'>
                <div className="form-group col-md-6">
                    <label htmlFor="prixMin">Prix Minimum :</label>
                    <input type="number" className="form-control" id="prixMin" placeholder="Entrez le prix Minimum" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="prixMax">Prix Maximum :</label>
                    <input type="number" className="form-control" id="prixMax" placeholder="Entrez le prix Maximum" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="idBoitedevitesse">Boite de vitesse :</label>
                <input type="text" className="form-control" id="idBoitedevitesse" placeholder="Inserer Boite de vitesse" />
            </div>
            <div className="form-group">
                <label htmlFor="idCarburant">Carburant :</label>
                <input type="text" className="form-control" id="idCarburant" placeholder="Inserer Carburant" />
            </div>
            <div className="form-group">
                <label htmlFor="idCategorie">Carburant :</label>
                <input type="text" className="form-control" id="idCategorie" placeholder="Inserer Categorie" />
            </div>
            <div className="form-group">
                <label htmlFor="idLieu">Lieu :</label>
                <input type="text" className="form-control" id="idLieu" placeholder="Inserer le Lieu" />
            </div>
            <div className="form-group">
                <label htmlFor="idMarque">Marque :</label>
                <input type="text" className="form-control" id="idMarque" placeholder="Inserer une Marque" />
            </div>
            <div className="form-group">
                <label htmlFor="idModel">Model :</label>
                <input type="text" className="form-control" id="idModel" placeholder="Inserer un Model" />
            </div>

            <div className='Valider'>
                <input type="submit" value="Inserer"/>
            </div>
        </form>
    </> 
    
  );
}
