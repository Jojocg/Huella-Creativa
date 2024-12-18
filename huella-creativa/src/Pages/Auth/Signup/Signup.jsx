import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { UserContext } from "../../../Context/user";

function Signup() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleChangeFormData = ({ target }) => {
        const { name, value } = target;
        setFormData((previousValue) => ({ ...previousValue, [name]: value }));
    };

    const validatePassword = () => {
        return formData.password === confirmPassword ? true : false;
    };

    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            if (validatePassword()) {
                const response = await signup(formData);
                if (response) {
                    console.log(formData); // revisar este console.log
                    response;
                    localStorage.setItem("token", response.data.token);

                    setUser({ nombre: formData.nombre, publicoId: response.data.publicoId });
                    navigate("/profile/:publicoId");

                }
            } else {
                setError("Las contraseñas no coinciden");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <section className="signup">
             {/* Contenedor de imágenes de fondo */}
             <div className="hero-images-signup">
                    <img
                        className="fondo-web-izq"
                        src="/fondo_izq.png"
                        alt="Decoración izquierda"
                    />
                    <img
                        className="fondo-web-dch"
                        src="/fondo_dch.png"
                        alt="Decoración derecha"
                    />
                </div>
            {/* Mensaje de bienvenida */}
            <div className="SayHi-signup">
                {/* Contenido del Hero */}
                <h1>
                    ¡Tu viaje creativo <br /> <span className="highlight-signup">comienza aquí!</span>
                </h1>
                <p>
                    Conecta con artistas, domina nuevas herramientas y transforma tu
                    creatividad en talento. Este es el lugar donde aprender y fomentar tu
                    creatividad desde cualquier rama.
                </p>
            </div>

            {/* Formulario de registro */}
            <div className="signup-form">
                <form onSubmit={handleSignup}>
                    <div className="input-wrapper-signup">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre y apellidos*"
                            value={formData.nombre}
                            onChange={handleChangeFormData}
                            required
                        />
                    </div>
                    <div className="input-wrapper-signup">
                        <input
                            type="email"
                            name="email"
                            placeholder="email*"
                            value={formData.email}
                            onChange={handleChangeFormData}
                            required
                        />
                    </div>
                    <div className="input-wrapper-signup">
                        <input
                            type="password"
                            name="password"
                            placeholder="contraseña*"
                            value={formData.password}
                            onChange={handleChangeFormData}
                            required
                        />
                    </div>
                    <div className="input-wrapper-signup">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirmar contraseña*"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message-signup">{error}</p>}
                    <button type="submit" className="button_submit-signup">
                        Enviar
                    </button>
                </form>
            </div>

            {/* Círculo verde como separador */}
            <div className="greenCircle">
                <span className="alternativa">o</span>
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

            {/* Paginador decorativo */}
            <div className="pagination-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            {/* Texto de inicio de sesión */}
            <div className="login-prompt">
                <p>
                    ¿Ya tienes cuenta?
                </p>
                    <button type="button" className="button_login-signup">
                        <Link to="/auth/login">
                        Inicia sesión
                        </Link>
                    </button>
                    </div>
           
        </section>
    );
}

export default Signup;
