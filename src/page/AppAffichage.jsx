import {Header , Footer} from './../component/Header';
import './css/AppAffichage.css';
import { InsererModel } from './../component/InsertModel';

function Affichage(){
    return(
        <>
            <Header/>
            <InsererModel/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default Affichage;

