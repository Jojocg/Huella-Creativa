import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/user";
import './Header.css';

const Header = () => {
    /* const navigate = useNavigate(); */
    const { user } = useContext(UserContext);

    /* const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }; */

    const loadMethods = () => {
        if (user) {
            return (
                <>
                    <ul className="navbar">
                        <li className="traditional">Tradicional</li>
                        <ul>
                            <li><Link to="/publications/1">Ilustración</Link></li>
                            <li><Link to="">Diseño Gráfico</Link></li>
                            <li><Link to="">Escultura</Link></li>
                            <li><Link to="">Modelado 3D</Link></li>
                            <li><Link to="">Animación</Link></li>
                        </ul>
                        <li className="digital">Digital</li>
                        <ul>
                            <li><Link to="/publications/6">Ilustración</Link></li>
                            <li><Link to="">Diseño Gráfico</Link></li>
                            <li><Link to="">Escultura</Link></li>
                            <li><Link to="">Modelado 3D</Link></li>
                            <li><Link to="">Animación</Link></li>
                        </ul>
                    </ul>
                    <div>
                        {localStorage.getItem("token") && (  //se puede comentar esta línea cuando queramos probar sin meter el usuario
                        <>
                            <h3>{user}</h3>
                            {/* <button onClick={logout}>
                                <h3>Logout</h3>
                            </button> */}
                        </>
                    )}
                    </div>
                </>
            )
        }
    }

    const loadAuth = () => {
        if (!user) {
            return (
                <>
                    <Link to="auth/login"><button>Iniciar sesión/Regístrate</button></Link>
                </>
            )
        }
    }

    return (
        <>
            <section id="headerWrapper">
                <Link to="/"><h3>Huella Creativa</h3></Link>
                <div>{loadMethods()}</div>
                <div>{loadAuth()}</div>
            </section>
        </>
    );
};

export default Header;
