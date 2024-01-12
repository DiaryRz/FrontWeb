import {Header , Footer} from './../component/Header';
import './css/AppAffichage.css';
import { InsererBoiteDeVitesse } from './../component/BoiteDeVitesse';

function InsertionBoiteDeVitesse(){
    return(
        <>
            <Header/>
            <InsererBoiteDeVitesse/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionBoiteDeVitesse;

