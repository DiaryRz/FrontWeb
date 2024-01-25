import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { ListeAnnonceFavorie } from '../component/ListeAnnonceFavorie';

function ListeDesAnnonceFavorie(){
    return(
        <>
            <Header/>
            <ListeAnnonceFavorie/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default ListeDesAnnonceFavorie;