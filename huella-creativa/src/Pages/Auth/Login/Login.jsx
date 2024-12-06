import { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../Services/AuthService";
import { UserContext } from "../../../Context/user";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setUser, user } = useContext(UserContext)

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await login({ email, password });
            if (response) {
                localStorage.setItem("token", response.data.token);
                setUser({nombre: response.data.usuario, publicoId: response.data.publicoId}) //esto porque lo añadimos en nuestra API como respuesta//añadido
                console.log(user) //revisar esta línea
                navigate("/homeLogin");
            } else {
                setError("Revisa los datos introducidos");
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <section className="login">
            {/* Contenedor de imagen de fondo */}
            <div className="background">
                <img
                    className="fondo-web"
                    src="/fondo_web.png"
                    alt="Fondo"
                />
            </div>

            {/* Mensaje de bienvenida */}
        <div className="SayHi">
            <h1>
                    ¡Hola <br /> <span className="highlight">de nuevo!</span>
                </h1>
                </div>

            {/* Formulario de inicio de sesión */}
            <div className="login-form">
                <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                        <input
                            type="email"
                            placeholder="EMAIL*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="CONTRASEÑA"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}
                    <br />

                    <button type="submit" className="button_login">
                        <Link to="/HomeLogin">
                        LogIn
                        </Link>
                    </button>
                </form>
               <br />
               <div className="greenCircle"><span className="alternativa">o</span></div>

            </div>
                {/* Paginador decorativo */}
                <div className="pagination-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            {/* Botón de login con Gmail */}
            <div className="google-login">
                    <button className="button_google">
                        INICIA CON CORREO GMAIL
                        <img
                            src="/Google__G__logo.svg.png"
                            alt="Google Icon"
                            className="google-icon"
                        />
                    </button>
                </div>

<div className="signup-prompt">
                <p>
                    ¿No tienes cuenta?
                </p>
                    <button type="submit" className="button_register">
                        <Link to="/auth/login/auth/signup">
                        Regístrate
                        </Link>
                    </button>
                    </div>

                    
          
            
        </section>
    );
};



export default Login;