import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({ nom: '', email: '', motDePasse: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any existing error message
        try {
            // Utiliser une URL relative
            //const response = await axios.post('/api/proprietaires/signup', formData);
            const response = await axios.post('http://localhost:3001/api/proprietaires/signup', formData);

            alert(response.data.message); // Message de succès
            // Optionnel: réinitialiser le formulaire après une inscription réussie
            setFormData({ nom: '', email: '', motDePasse: '' });
            // Rediriger vers la page d'accueil ou la page de profil
            window.location.href = "/login"; // Redirige l'utilisateur après la connexion
        } catch (error) {
            // Affiche le message d'erreur s'il est disponible, sinon un message générique
            const errorMessage = error.response?.data?.message || 'Une erreur est survenue lors de l\'inscription.';
            setError(errorMessage);
        }
    };

    return (
        <div className="flex flex-col flex-grow items-center bg-vert-caca">
            <h1 className="text-2xl font-bold text-center text-noir my-8">
                Inscription à TinPets
            </h1>
            <div className="bg-blanc-projet w-80 px-5 py-5 my-8 flex-grow drop-shadow-xl rounded-md flex-col">
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                
                <label htmlFor="nom" className="text-gray-700 text-sm mb-2">
                    Nom
                </label>
                <input
                    type="text"
                    id="nom"
                    name="nom"
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez votre nom"
                    value={formData.nom}
                    onChange={handleChange}
                />

                <label htmlFor="email" className="text-gray-700 text-sm mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez votre adresse email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="motDePasse" className="text-gray-700 text-sm mb-2">
                    Mot de passe
                </label>
                <input
                    type="password"
                    id="motDePasse"
                    name="motDePasse"
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez votre mot de passe"
                    value={formData.motDePasse}
                    onChange={handleChange}
                />

                <button
                    onClick={handleSubmit}
                    className="w-full border-vert-caca border-2 text-black py-2 rounded-md hover:bg-vert-caca focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    S'inscrire
                </button>

                <p className="text-gray-600 mt-4">
                    Vous avez un compte ?
                        <a href="/login" className="text-blue-500 underline"> Se connecter </a>
                    </p>
            </div>
        </div>
    );
};

export default Signup;
