import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { InsererCarburant } from '../component/InsertCarburant';

function InsertionCarburant(){
    return(
        <>
            <Header/>
            <InsererCarburant/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionCarburant;