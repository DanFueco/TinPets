// src/components/Footer/Footer.jsx
import { UserIcon } from "@heroicons/react/24/solid";

const Footer = ({ onLogout }) => {
    return (
        <div className="flex justify-around items-center bg-rouge-projet h-16 w-full fixed bottom-0 left-0">
            <p>Mentions légales</p>
            <p>A propos de nous</p>
            <p>
                <a href="/login">Connexion</a>
            </p>
            <UserIcon className="w-8 h-8" />
            {onLogout && (
                <button onClick={onLogout} className="text-white">Déconnexion</button>
            )}
        </div>
    );
};

export default Footer;
