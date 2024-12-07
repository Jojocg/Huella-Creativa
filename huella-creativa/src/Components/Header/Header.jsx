import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from "../../Context/user";
import './Header.css';

const Header = () => {
    const { user, setUser } = useContext(UserContext); // Contexto del usuario
    const [activeMenu, setActiveMenu] = useState(null); // Control de los menús desplegables
    const navigate = useNavigate();

    const logout = async(e) => {
        try {
        e.preventDefault();
        localStorage.removeItem("token");
        setUser(null); // Para eliminar al usuario del contexto
        navigate("/");
        } catch (error) {
        console.log(error);
        }

    };

    const loadMethods = () => {
        // Si el usuario está logueado, carga las opciones del menú
        if (user) {
            return (

                <ul className="menu">
                    {/* Categoría Tradicional */}
                    <li
                        className={`menu-category ${activeMenu === "tradicional" ? "active" : ""}`}
                        onMouseEnter={() => setActiveMenu("tradicional")}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <span className="category-title">Tradicional</span>
                        {activeMenu === "tradicional" && (
                            <ul className="dropdown">
                                <li><Link to="/publications/1" state={{ category: "ilustración", method: "tradicional" }}>Ilustración</Link></li>
                                <li><Link to="/publications/3" state={{ category: "diseño gráfico", method: "tradicional" }}>Diseño Gráfico</Link></li>
                                <li><Link to="/publications/2" state={{ category: "escultura", method: "tradicional" }}>Escultura</Link></li>
                                <li><Link to="/publications/5" state={{ category: "modelado 3D", method: "tradicional" }}>Modelado 3D</Link></li>
                                <li><Link to="/publications/4" state={{ category: "animación", method: "tradicional" }}>Animación</Link></li>
                            </ul>
                        )}
                    </li>
                    {/* Categoría Digital */}
                    <li
                        className={`menu-category ${activeMenu === "digital" ? "active" : ""}`}
                        onMouseEnter={() => setActiveMenu("digital")}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <span className="category-title">Digital</span>
                        {activeMenu === "digital" && (
                            <ul className="dropdown">
                                <li><Link to="/publications/6" state={{ category: "ilustración", method: "digital" }}>Ilustración</Link></li>
                                <li><Link to="/publications/8" state={{ category: "diseño gráfico", method: "digital" }}>Diseño Gráfico</Link></li>
                                <li><Link to="/publications/7" state={{ category: "escultura", method: "digital" }}>Escultura</Link></li>
                                <li><Link to="/publications/10" state={{ category: "modelado 3D", method: "digital" }}>Modelado 3D</Link></li>
                                <li><Link to="/publications/9" state={{ category: "animación", method: "digital" }}>Animación</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            );

        }
    };

    const loadAuth = () => {
        // Si no hay un usuario logueado, muestra los botones de autenticación
        if (!user) {
            return (
                <>
                <div className='auth'>
                    <Link to="auth/login"><button className="btn-outline">Inicia sesión</button></Link>
                    <Link to="auth/login/auth/signup"><button className="btn-primary">Regístrate</button></Link>
                </div>
                </>
            );
        } else {
            return (
                // Mostrar avatar y nombre del usuario cuando esté logueado
                <div className="user-controls">
                    <img src="/AVATAR.png" alt="Avatar" className="avatar-icon" />
                    {/* <h3>{user}</h3> */}
        
                    <button className="logout" onClick={logout}>Cerrar Sesión</button>
                  
                </div>

            );
        }
    };

    return (
        <>
            <header className="navbar">

                {/* Logo */}
                <div className="logo">
                    <Link to={user ? "/homeLogin" : "/"}>
                        <img src="/Logo3.svg" alt="Huella Creativa" />
                    </Link>
                </div>
                

                {/* Menú (solo si hay usuario activo) */}
                <nav className="menu">
                    {loadMethods()}
                </nav>

                    {/* Modo oscuro */}
                    <section className="users">
                    <div className="modo">
                        <Link to="/dark">
                        <img src="/modos-28.svg" alt="Modo oscuro" />
                        </Link>
                    </div>

                {/* Controles del usuario */}
                <div className="user-controls">
    
                        {loadAuth()}
   
                </div>
                </section>
            </header>
        </>
    );
};

export default Header;
