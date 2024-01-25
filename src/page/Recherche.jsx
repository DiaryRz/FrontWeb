import {Header , Footer} from './../component/Header';
import { RechercheFonction } from './../component/RechercheComponent';

function Recheche(){
    return(
        <>
            <Header/>
            <RechercheFonction/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default Recheche;