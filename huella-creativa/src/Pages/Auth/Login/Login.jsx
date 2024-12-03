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

    const handleLogin = async () => {
        try {
            const response = await login({ email, password });
            if (response) {
                localStorage.setItem("token", response.data.token);
                setUser(response.data.usuario) //esto porque lo añadimos en nuestra API como respuesta
                console.log(user) //revisar esta línea
                navigate("");
            } else {
                setError("Revisa los datos introducidos");
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <div>
            <form>
                <section>
                    <label>
                        Email:
                        <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
                    </label>
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </section>
                {error && <p>{error}</p>}
                <section>
                    <button onClick={handleLogin}>Entrar</button>
                </section>
            </form>
            <section>
                <p>¿No tienes cuenta?<Link to="auth/signup">Create una</Link></p>
            </section>
        </div>
    );
};

export default Login;