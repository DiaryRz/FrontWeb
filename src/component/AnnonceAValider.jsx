// import React, { useEffect, useState } from 'react';
// import './css/Model.css';
// import '../assets/bootstrap/css/bootstrap.min.css';

// export function ListeAnnonce() {
//     const [listeAnnonce, setListeAnnonce] = useState([]);
//     const [nomMarque, setMarque] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:8081/annonces/listeAnnonceAModifier')
//             .then(res => res.json())
//             .then((result) => {
//                 setListeAnnonce(result);
//             });
//     }, []);

//     const validerAnnonce = (idAnnonce) => {
//         fetch(`http://localhost:8081/validationAnnonce/validerAnnonce/${idAnnonce}`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ nomMarque })
//         })
//             .then(() => {
//                 setMarque('');
//                 console.log('Valider avec succès');
//             })
//             .catch(error => console.error('Erreur lors de la validation de l\'annonce', error));
//     };

//     return (
//         <div className="container mt-5">
//             <h2>Liste des annonces</h2>
//             <div>
//                 <table border='1px'>
//                     <tr>
//                         <th>description</th>
//                         <th>date d'annonce</th>
//                         <th>Couleur</th>
//                         <th>nom createur</th>
//                         <th>nom lieu</th>
//                         <th>annee</th>
//                         <th>prix</th>
//                         <th>etat annonce</th>
//                         <td>Valider</td>
//                     </tr>
//                     {listeAnnonce.map(liste => (
//                         <tr key={liste.idAnnonce}> {/* Assurez-vous d'avoir un identifiant unique pour chaque élément de la liste */}
//                             <td>{liste.description}</td>
//                             <td>{liste.dateHeureAnnonce }</td>
//                             <td>{liste.couleur}</td>
//                             <td>{liste.nomCreateur}</td>
//                             <td>{liste.nomLieu}</td>
//                             <td>{liste.annee}</td>
//                             <td>{liste.prix}</td>
//                             <td>{liste.etatAnnonce}</td>
//                             <td>
//                                 <input type="submit" value="Valider" onClick={() => validerAnnonce(liste.idAnnonce)} />
//                             </td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeAnnonce() {
    const [listeAnnonce, setListeAnnonce] = useState([]);
    const [nomMarque, setMarque] = useState('');

    useEffect(() => {
        fetch('http://localhost:8081/annonces/listeAnnonceAModifier')
            .then(res => res.json())
            .then((result) => {
                setListeAnnonce(result);
            });
    }, []);

    const validerAnnonce = (idAnnonce) => {
        fetch(`http://localhost:8081/validationAnnonce/validerAnnonce/${idAnnonce}`, {
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
            <div>
                <table border='1px'>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>date d'annonce</th>
                            <th>Couleur</th>
                            <th>nom createur</th>
                            <th>nom lieu</th>
                            <th>annee</th>
                            <th>prix</th>
                            <td>Valider</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listeAnnonce.map(liste => (
                            // Ajoutez une condition pour ne rendre que les annonces avec etatAnnonce égal à 0
                            liste.etatAnnonce === 0 && (
                                <tr key={liste.idAnnonce}>
                                    <td>{liste.description}</td>
                                    <td>{liste.dateHeureAnnonce}</td>
                                    <td>{liste.couleur}</td>
                                    <td>{liste.nomCreateur}</td>
                                    <td>{liste.nomLieu}</td>
                                    <td>{liste.annee}</td>
                                    <td>{liste.prix}</td>
                                    <td>
                                        <input type="submit" value="Valider" onClick={() => validerAnnonce(liste.idAnnonce)} />
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

