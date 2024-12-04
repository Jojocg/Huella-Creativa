import { useContext, useState } from "react";
import { signup } from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { UserContext } from "../../../Context/user";

const Signup = () => {
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
                    console.log(formData); //revisar este console.log
                    response;
                    localStorage.setItem("token", response.data.token);
                    setUser(formData.nombre);
                    navigate("/");
                }
            } else {
                setError("Las contraseñas no coinciden");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <section>
                    <label>
                        Nombre y Apellidos:
                        <input
                            type="text"
                            name="nombre"
                            onChange={handleChangeFormData}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={handleChangeFormData} required/>
                    </label>
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            name="password"
                            onChange={handleChangeFormData}
                        />
                    </label>
                    <label>
                        Repite la contraseña:
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                </section>
                {error && <p>{error}</p>}
                <section>
                    <button type="submit">Crear</button>
                </section>
            </form>
        </div>
    );
};

export default Signup;