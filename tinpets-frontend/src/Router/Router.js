import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Swipe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
])

export default router