const Login = () => {
    return (
        <div className="flex flex-col flex-grow items-center bg-vert-caca">
            <h1 className="text-2xl font-bold text-center text-noir my-8">
                Connexion à TinPets
            </h1>
            <div className="bg-blanc-projet w-80 px-5 py-5 my-8 flex-grow drop-shadow-xl rounded-md flex-col">
                <label
                    htmlFor="username"
                    className="text-gray-700 text-sm mb-2"
                >
                    Nom d'utilisateur
                </label>
                <input
                    type="text"
                    id="username"
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez votre nom d'utilisateur"
                />
                <label
                    htmlFor="password"
                    className="text-gray-700 text-sm mb-2"
                >
                    Mot de passe
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Entrez votre mot de passe"
                />
                <button
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="w-full border-vert-caca border-2 text-black py-2 rounded-md hover:bg-vert-caca focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Connexion
                </button>
            </div>
        </div>
    );
};

export default Login;
