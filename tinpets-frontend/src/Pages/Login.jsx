// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState(''); // Changer le nom de state de username à email
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setError(null); // Réinitialise les erreurs avant la soumission

        try {
            // Envoie l'email et le mot de passe dans le bon format
            const response = await axios.post('http://localhost:3001/api/proprietaires/login', {
                email,
                motDePasse: password,
            });

            // Gérer la réponse (par exemple, stocker le token dans le local storage ou rediriger)
            console.log(response.data);
            // Rediriger vers la page d'accueil ou la page de profil
            window.location.href = "/"; // Redirige l'utilisateur après la connexion
        } catch (err) {
            // Gérer les erreurs lors de la connexion
            setError(err.response?.data?.message || 'Nom d\'utilisateur ou mot de passe incorrect.');
        }
    };

    return (
        <div className="flex flex-col flex-grow items-center bg-vert-caca">
            <h1 className="text-2xl font-bold text-center text-noir my-8">
                Connexion à TinPets
            </h1>
            <div className="bg-blanc-projet w-80 px-5 py-5 my-8 flex-grow drop-shadow-xl rounded-md flex-col">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email" className="text-gray-700 text-sm mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Entrez votre adresse email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="text-gray-700 text-sm mb-2">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                        type="submit" // Utiliser type="submit" pour activer la soumission du formulaire
                        className="w-full border-vert-caca border-2 text-black py-2 rounded-md hover:bg-vert-caca focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Connexion
                    </button>
                    <p className="text-gray-600 mt-4">
                        Pas encore de compte ? 
                        <a href="/signup" className="text-blue-500 underline"> Inscrivez-vous ici</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
