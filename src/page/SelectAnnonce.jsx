import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import {ListeAnnonce} from '../component/ListeAnnonce';

function selectAnnonce(){
    return(
        <>
            <Header/>
            <ListeAnnonce/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default selectAnnonce;
