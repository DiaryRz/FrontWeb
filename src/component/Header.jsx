import React from 'react';
import './css/Header.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <>
            <div className="row contenair">
                <div className="col-md-8 imagehaut"><img src="./image/logo.png" alt='' width={40} height={40}/></div>
                <ul className="col-md-4 Ulheader">
                    <li><Link to="/Recherche">Recherche</Link></li>
                    <li><Link to="/">Statistic</Link></li>
                    <li><Link to="/">Annonce</Link></li>
                </ul>
            </div>
        </>
    );
}

export function Footer(){
    return(
        <>
            <div className="footer">
                <div className='Text'>
                    <img src="./image/logo.png" alt='' width={50} height={50}/>
                </div>
                <div className='Liste'>
                    <ul className="Liste1">
                        <li><Link to="/">Acces Automobile</Link></li>
                        <li><Link to="/">AccessAutomobile@gmail.com</Link></li>
                        <li><Link to="/">0341010010</Link></li>
                        <li><Link to="/">AccessAuto.com</Link></li>
                    </ul>
                </div>
                <div className='ligne'>
                    <hr />
                </div>
                <div className='TextDuBas'>
                    Acces Mobil vous remercie de votre visite!
                </div>
            </div>
        </>
    );
}
