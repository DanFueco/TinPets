import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Swipe from "./Pages/Swipe/Swipe";
import Login from "./Pages/Login";

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
    ]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
