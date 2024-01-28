import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState('');
    const [mdp, setmdp] = useState(''); 
    const history = useHistory();

    const Inserer = async (e) => {
        e.preventDefault();
        const lieu = { email, mdp }; 

        try {
            const response = await fetch('http://localhost:8081/utilisateurs/verifierUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(lieu),
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la requête : ${response.status}`);
            }
            else{
                localStorage.setItem("token" , response.data)
                console.log(localStorage.getItem("token"));
                history.push('/insertionModel');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête :', error.message);
            // Vous pouvez ajouter ici la gestion de l'erreur, par exemple afficher un message à l'utilisateur.
        }
    };  

    return (
        <form onSubmit={Inserer}>
            <label>Email: 
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
            </label>
            <label>Mot de passe: 
                <input type="password" value={mdp} onChange={(e) => setmdp(e.target.value)} />
            </label>
            <button type="submit">Connexion</button>
        </form>
    );
};

export default Login;
