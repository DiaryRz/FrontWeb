import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import {ListeFavorie} from '../component/ListeAnnonceFavorie';

function selectAnnonceFavorie(){
    return(
        <>
            <Header/>
            <ListeFavorie/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default selectAnnonceFavorie;