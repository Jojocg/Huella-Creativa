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
                    <nav>
                        <div id='traditional'>
                        <ul>
                            <li className="default">Tradicional</li>
                            <li>
                                <Link to="">Ilustración</Link>
                            </li>
                            <li>
                                <Link to="">Diseño Gráfico</Link>
                            </li>
                            <li>
                                <Link to="">Escultura</Link>
                            </li>
                            <li>
                                <Link to="">Modelado 3D</Link>
                            </li>
                            <li>
                                <Link to="">Animación</Link>
                            </li>
                        </ul>
                        </div>
                        <div id='digital'>
                            <ul>
                                <li className="default">Digital</li>
                                <li>
                                    <Link to="/publications/6">Ilustración</Link>
                                </li>
                                <li>
                                    <Link to="">Diseño Gráfico</Link>
                                </li>
                                <li>
                                    <Link to="">Escultura</Link>
                                </li>
                                <li>
                                    <Link to="">Modelado 3D</Link>
                                </li>
                                <li>
                                    <Link to="">Animación</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div>
                    {/* localStorage.getItem("token") &&  */(
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
