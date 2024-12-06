import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import Publications from "../Pages/Publications/Publications";
import CreatePublication from "../Pages/CreatePublication/CreatePublication";
import HomeLogin from "../Pages/HomeLogin/HomeLogin";
import UserProfile from "../Pages/UserProfile/UserProfile";


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
                path: "/homeLogin",
                element: <HomeLogin />,
            },
            {
                path: "user-profile",
                element: <UserProfile />,
                loader: checkAuthLoader, // Para restringir acceso si no está autenticado
            },
            {
                path: "/publications/:metodoId",
                element: <Publications />,
                            loader: checkAuthLoader, //se puede comentar esta línea cuando queramos probar sin meter el usuario
            },
            {
                path: "/publications/:metodoId/create",
                element: <CreatePublication />,
                loader: checkAuthLoader, //se puede comentar esta línea cuando queramos probar sin meter el usuario
            },
            {
                path: "/publications/:metodoId/create",
                element: <CreatePublication />,
                loader: checkAuthLoader, //se puede comentar esta línea cuando queramos probar sin meter el usuario
            },
            
        ],
    },
]);

export default router;