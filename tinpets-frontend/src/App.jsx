// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Swipe from "./Pages/Swipe/Swipe";
import Login from "./Pages/Login";      // Import de la page d'inscription
import CreateProfilePage from "./Pages/CreationProfil/CreationProfil"; // Import de la page de création de profil

function App() {

  const router = createBrowserRouter([
    {
      path: "/",                // Route pour la page principale (Swipe)
      element: <Swipe/>
    },
    {
      path: "/login",          // Route pour la création de compte
      element: <Login/>
    },
    {
      path: "/create-profile",   // Route pour la création de profil d'animal
      element: <CreateProfilePage/>
    }
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
}

export default App;
