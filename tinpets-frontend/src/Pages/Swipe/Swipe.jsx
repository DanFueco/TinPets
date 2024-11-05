// Pages/Swipe/Swipe.jsx
import Footer from '../../Components/Footer/Footer'; // Chemin d'importation corrigé

const Swipe = () => {
    const handleLogout = () => {
        localStorage.removeItem('userToken'); // Ou toute autre méthode que vous utilisez pour gérer la session
        window.location.href = '/login'; // Redirection vers la page de connexion
    };

    return (
        <div className="flex flex-col flex-grow items-center bg-vert-caca">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-80 mx-auto mt-10">
                <h2 className="text-xl font-bold text-gray-800 mb-1">Nom de l'Animal</h2>
                <p className="text-gray-500 mb-4">Espèce</p>
                <div className="w-60 h-60 bg-gray-600 rounded-lg mx-auto mb-4"></div>
                <p className="h-32 max-h-32 overflow-hidden text-ellipsis whitespace-normal mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ultricies urna. Nulla egestas, ligula vitae vestibulum imperdiet, est massa faucibus neque, non interdum justo ipsum eu ipsum. Phasellus aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                </p>
                <div className="flex">
                    <button className="bg-black text-white font-semibold py-2 px-4 rounded-full w-full mr-2">
                        J'aime Pas
                    </button>
                    <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full w-full ml-2">
                        J'aime
                    </button>
                </div>
            </div>
            <Footer onLogout={handleLogout} /> {/* Passer la fonction de déconnexion */}
        </div>
    );
}

export default Swipe;
