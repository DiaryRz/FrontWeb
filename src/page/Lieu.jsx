import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { InsererLieu } from '../component/InsertLieu';

function InsertionLieu(){
    return(
        <>
            <Header/>
            <InsererLieu/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionLieu;