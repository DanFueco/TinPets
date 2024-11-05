// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
//import Footer from "./components/Footer/Footer";
import Swipe from "./Pages/Swipe/Swipe";
import Login from "./Pages/Login";      // Import de la page d'inscription
import Signup from "./Pages/Signup"; // Import de la page de création de profil

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Swipe />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
    ]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
