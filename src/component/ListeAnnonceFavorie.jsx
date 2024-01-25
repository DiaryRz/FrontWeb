import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeAnnonceFavorie() {
  const[ListeAnnonceFavorie,setListeAnnonceFavorie] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8081/listeAnnonceFavorie')
    .then(res=>res.json())
    .then((result)=>{
      setListeAnnonceFavorie(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5">
      <h2>Liste des annonces favories</h2>
            <div>
                <table border='1px'>
                    <tr>
                        <th>dateheureannonce</th>
                        <th>description</th>
                        <th>annee</th>
                        <th>prix</th>
                        <th>imatricule</th>
                        <th>nomutilisateur</th>
                        <th>nomlieu</th>
                        <th>idfavorie</th>
                    </tr>
                    {ListeAnnonceFavorie.map(liste => (
                        <tr>
                            <td key={liste.id}>
                                {liste.dateHeureAnnonce}
                                {liste.description}
                                {liste.annee}
                                {liste.prix}
                                {liste.imatricule}
                                {liste.nomUtilisateur}
                                {liste.nomLieu}
                                {liste.idFavorie}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

    </div>
    
  );
}
