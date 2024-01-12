/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './css/Header.css';
import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom';

export function Header() {
    return(
        <>
            <div className="row contenair">
                <div className="col-md-8 imagehaut"><img src="./image/logo.png" alt='' width={40} height={40}/></div>
                <ul className="col-md-4 Ulheader">
                    <li><a href="">Recherche</a></li>
                    <li><a href="">Statistic</a></li>
                    <li><a href="">Annonce</a></li>
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
                        <li><Link to="/liste">Acces Automobile</Link></li>
                        <li><Link to="/liste">AccessAutomobile@gmail.com</Link></li>
                        <li><Link to="/liste">0341010010</Link></li>
                        <li><Link to="/liste">AccessAuto.com</Link></li>
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
