import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/bootstrap/css/bootstrap.min.css';

const Login = () => {
    const [nomUtilisateur, setnomUtilisateur] = useState('');
    const [mdp, setmdp] = useState(''); 
    const navigate = useNavigate();

    const Inserer = async (e) => {
        e.preventDefault();
        const lieu = { nomUtilisateur, mdp }; 
    
        try {
            const response = await fetch('http://localhost:8081/utilisateurs/verifierUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(lieu),
            });
    
            if (!response.ok) {
                throw new Error(`Erreur lors de la requête : ${response.status}`);
            } else {
                const responseData = await response.text();
                
                localStorage.setItem("token", responseData);
                console.log(localStorage.getItem("token"));
                navigate('/insertionModel');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête :', error.message);
            // Vous pouvez ajouter ici la gestion de l'erreur, par exemple afficher un message à l'utilisateur.
        }
    };
    

    return (
        <div style={loginContainer}>
            <form onSubmit={Inserer}>
                <div style={{ fontSize: '30px',fontFamily:'serif', marginBottom: '20px' ,color:'chocolate'}}><b>Login</b></div>
                <div className="mb-3"> 
                <input type="text" value={nomUtilisateur} onChange={(e) => setnomUtilisateur(e.target.value)} />
                </div>
                <div className="mb-3" style={{marginTop:'40px'}}>
                <input type="password" value={mdp} onChange={(e) => setmdp(e.target.value)} />
                </div>
                <button type="submit">Connexion</button>
            </form>
        </div>
    );
};

export default Login;

