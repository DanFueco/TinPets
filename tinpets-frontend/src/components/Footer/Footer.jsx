import { UserIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    return (
        <div className="flex justify-around items-center bg-rouge-projet h-16">
            <p>Mentions légales</p>
            <p>A propos de nous</p>
            <p>
                <a href="/login">Connexion</a>
            </p>
            <UserIcon className="w-8 h-8" />
        </div>
    );
};

export default Footer;
