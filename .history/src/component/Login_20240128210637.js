import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


 /* Login.css */
 const loginContainer = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#b2adad',
};  

  
const loginForm = {
    width: '600px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius:'10px',
    backgroundColor: 'white',
    
};

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
        <form onSubmit={Inserer}>
           <div style={loginContainer}>
                    <form style={loginForm}>
                        <div style={{ fontSize: '30px',fontFamily:'serif', marginBottom: '20px' ,color:'blue',marginLeft:'40%'}}><b>Login</b></div>
                        <div className="mb-3"> 
                            <input type="email" className="form-control" placeholder="Entrer votre Email" value={nomUtilisateur} onChange={(e) => setnomUtilisateur(e.target.value)} />
                        </div>
                        <div className="mb-3" style={{marginTop:'40px'}}>
                            <input type="password" className="form-control" placeholder="Entrer votre de passe" value={mdp} onChange={(e) => setmdp(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success" style={{width:'300px',marginTop:'30px',marginLeft}}>
                            Connexion 
                        </button>
                    </form>
                   
                </div>
        </form>
    );
};

export default Login;

 