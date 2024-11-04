// src/pages/CreationProfil.js
import React, { useState } from 'react';
import axios from 'axios';

const CreationProfil = () => {
    const [nom, setNom] = useState('');
    const [race, setRace] = useState('');
    const [taille, setTaille] = useState('');
    const [sexe, setSexe] = useState('');
    const [age, setAge] = useState('');
    const [caracteristiques, setCaracteristiques] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoi de la requête au backend pour créer un profil de chien
            await axios.post('http://localhost:5000/api/animaux', {
                nom,
                race,
                taille,
                sexe,
                age,
                caracteristiques
            });
            alert("Profil de chien ajouté avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'ajout du profil :", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md w-80">
                <h2 className="text-xl font-bold mb-4 text-center">Créer un profil pour votre chien</h2>
                
                <label className="block mb-2">Nom :</label>
                <input 
                    type="text" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required 
                />

                <label className="block mb-2">Race :</label>
                <input 
                    type="text" 
                    value={race} 
                    onChange={(e) => setRace(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required 
                />

                <label className="block mb-2">Taille :</label>
                <select 
                    value={taille} 
                    onChange={(e) => setTaille(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required
                >
                    <option value="">Sélectionnez la taille</option>
                    <option value="Petit">Petit</option>
                    <option value="Moyen">Moyen</option>
                    <option value="Grand">Grand</option>
                </select>

                <label className="block mb-2">Sexe :</label>
                <select 
                    value={sexe} 
                    onChange={(e) => setSexe(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required
                >
                    <option value="">Sélectionnez le sexe</option>
                    <option value="Mâle">Mâle</option>
                    <option value="Femelle">Femelle</option>
                </select>

                <label className="block mb-2">Âge :</label>
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                    required 
                />

                <label className="block mb-2">Caractéristiques :</label>
                <textarea 
                    value={caracteristiques} 
                    onChange={(e) => setCaracteristiques(e.target.value)} 
                    className="w-full mb-4 p-2 border rounded"
                />

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Créer le profil</button>
            </form>
        </div>
    );
};

export default CreationProfil;
