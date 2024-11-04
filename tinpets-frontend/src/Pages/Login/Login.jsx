// src/pages/Authentification.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authentification = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoi de la requête au backend pour créer un nouveau propriétaire
            await axios.post('http://localhost:5000/api/proprietaires', {
                nom,
                email,
                motDePasse,
            });
            navigate('/create-profile'); // Redirection vers la page de création de profil après l'inscription
        } catch (error) {
            console.error("Erreur lors de la création de compte :", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md w-80">
                <h2 className="text-xl font-bold mb-4 text-center">Créer un compte</h2>
                
                <label className="block mb-2">Nom :</label>
                <input 
                    type="text" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required 
                />

                <label className="block mb-2">Email :</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required 
                />

                <label className="block mb-2">Mot de passe :</label>
                <input 
                    type="password" 
                    value={motDePasse} 
                    onChange={(e) => setMotDePasse(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required 
                />

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Créer le compte</button>
            </form>
        </div>
    );
};

export default Authentification;
