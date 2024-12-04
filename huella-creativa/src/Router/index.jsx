import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import Publications from "../Pages/Publications/Publications";

const checkAuthLoader = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        return redirect("/");
    }
    return null; // No redirection, allow navigation
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "auth",
                children: [
                    {
                        path: "login/auth/signup",
                        element: <Signup />,
                    },
                    {
                        path: "login",
                        element: <Login />,
                    },
                ],
            },
            {
                path: "/publications/:metodoId", 
                element: <Publications />,
                loader: checkAuthLoader, //se puede comentar esta línea cuando queramos probar sin meter el usuario
            },
            
        ],
    },
]);

export default router;