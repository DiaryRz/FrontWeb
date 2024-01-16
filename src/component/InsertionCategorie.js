import '../assets/bootstrap/css/bootstrap.min.css'; 
import {Header , Footer} from './../component/Header';

const InsertionCategorie = () => {  
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
                            <div class="card-body" style={{color:'green'}}>
                            <form>
                                <div class="mb-3">
                                    <label for="text" class="form-label">Categorie</label>
                                    <input type="text" className="form-control" id="text" placeholder="Entrer la categorie " />
                                </div>
                               
                            <button type="submit" class="btn btn-success" style={{float:'right',width:'100%',marginTop:'20px'}}> Valider </button>
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