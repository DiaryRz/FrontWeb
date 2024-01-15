import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { ListeLieu } from '../component/ListeLieu';

function ListeDesLieux(){
    return(
        <>
            <Header/>
            <ListeLieu/>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default ListeDesLieux;