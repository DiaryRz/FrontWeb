import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeAnnonce() {
    const [listeAnnonce, setListeAnnonce] = useState([]);
    const [nomMarque, setMarque] = useState('');

    useEffect(() => {
        fetch('https://projsbmrrj1-production.up.railway.app/annonces/listeAnnonceAModifier')
            .then(res => res.json())
            .then((result) => {
                setListeAnnonce(result);
            });
    }, []);

    const validerAnnonce = (idAnnonce) => {
        fetch(`https://projsbmrrj1-production.up.railway.app/validationAnnonce/validerAnnonce/${idAnnonce}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nomMarque })
        })
            .then(() => {
                setMarque('');
                console.log('Valider avec succès');
                // Mettez à jour l'état pour refléter les annonces modifiées
                setListeAnnonce(prevListeAnnonce => prevListeAnnonce.map(annonce => {
                    if (annonce.idAnnonce === idAnnonce) {
                        return { ...annonce, etatAnnonce: 1 };
                    }
                    return annonce;
                }));
            })
            .catch(error => console.error('Erreur lors de la validation de l\'annonce', error));
    };

    return (
        <div className="container mt-5">
            <h2>Liste des annonces</h2>
            <div className='ChaqueDiv'>
                        {listeAnnonce.map(liste => (
                            // Ajoutez une condition pour ne rendre que les annonces avec etatAnnonce égal à 0
                            liste.etatAnnonce === 0 && (
                                <div  key={liste.idAnnonce}>
                                    <ul>
                                        <li>{liste.description}</li>
                                        <li>{liste.dateHeureAnnonce}</li>
                                        <li>{liste.couleur}</li>
                                        <li>{liste.nomCreateur}</li>
                                        <li>{liste.nomLieu}</li>
                                        <li>{liste.annee}</li>
                                        <li>{liste.prix}</li>
                                        <li>
                                            <input type="submit" value="Valider" onClick={() => validerAnnonce(liste.idAnnonce)} />
                                        </li>
                                    </ul>
                                </div>
                            )
                        ))}
                 
            </div>
        </div>
    );
}

