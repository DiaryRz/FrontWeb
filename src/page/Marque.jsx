import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { InsererMarque } from '../component/InsertMarque';

function InsertionMarque(){
    return(
        <>
            <Header/>
            <InsererMarque/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionMarque;