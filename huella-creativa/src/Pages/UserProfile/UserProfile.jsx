import { useContext, useState } from "react";
import { UserContext } from "../../Context/user";
import "./UserProfile.css";

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const [avatar, setAvatar] = useState("/avatarDefault.png"); // Ruta del avatar predeterminado
    const [previewImage, setPreviewImage] = useState(avatar); // Preview de la imagen seleccionada
    const [activeSection, setActiveSection] = useState("Información básica"); // Estado para el menú flotante

    // Función para manejar el cambio de imagen
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setPreviewImage(fileUrl); // Mostrar preview temporal
            // Aquí puedes añadir la lógica para subir la imagen al servidor.
        }
    };

    // Función para manejar el clic en el menú flotante
    const handleMenuClick = (section) => {
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="user-profile">
            {/* Menú flotante */}
            <aside className="floating-menu-profile">
                <ul>
                    <li
                        className={activeSection === "BasicInfo-profile" ? "active" : ""}
                        onClick={() => handleMenuClick("BasicInfo-profile")}
                    >
                        Información básica
                    </li>
                    <li
                        className={activeSection === "AboutMe-profile" ? "active" : ""}
                        onClick={() => handleMenuClick("AboutMe-profile")}
                    >
                        Sobre mí
                    </li>
                    <li
                        className={activeSection === "Contact-profile" ? "active" : ""}
                        onClick={() => handleMenuClick("Contact-profile")}
                    >
                        Contacto
                    </li>
                    <li
                        className={activeSection === "Publications-profile" ? "active" : ""}
                        onClick={() => handleMenuClick("Publications-profile")}
                    >
                        Publicaciones
                    </li>
                </ul>
            </aside>

            <section className="container-profile">
                <main className="userInfo-profile">
                    {/* Información Básica */}
                    <section id="BasicInfo-profile">
                        <div className="userName-profile">
                            <h1 className="titleProfile">
                                ¡Hola, <span className="highlight-profile">{user || "Usuario"}!</span>
                            </h1>
                            <p>Aquí podrás ver y editar tus datos personales.</p>
                        </div>

                        <form className="form-profile">
                        <h3 className="subtitleProfile">Información básica</h3>
                        <div className="avatarAndProfile">
                            <div className="avatar-wrapper-profile">
                                <img src={previewImage} alt="Avatar" className="avatar-image-profile" />
                                <label htmlFor="avatar-upload" className="replace-link-profile">
                                    <span>Reemplazar</span>
                                </label>
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleImageChange}
                                />
                            </div>

                            <div className="input-wrapper-profile">
                                <input className="inputProfile" type="text" placeholder="Nombre de usuario" />
                                <input className="inputProfile" type="text" placeholder="Nombre y apellidos" />
                                <input className="inputProfile" type="text" placeholder="Profesión" />
                                <input className="inputProfile" type="text" placeholder="Ubicación" />
                            </div>
                            </div>
                        </form>
                    </section>

                    {/* Sobre mí */}
                    <section id="AboutMe-profile">
                        <h3 className="subtitleProfile">Sobre mí</h3>
                        <textarea className="bio" placeholder="Háblanos sobre ti..."></textarea>
                    </section>

                    {/* Contacto */}
                    <section id="Contact-profile">
                        <h3 className="subtitleProfile">Contacto</h3>
                        <div className="social-links-profile">
                            <div className="facebook"><img src="/redes-08.svg" alt="Facebook" /><input className="social-link-profile" type="text" placeholder="Usuario de Facebook" /></div>
                            <div className="Twitter"><img src="/redes-09.svg" alt="Twitter" /><input className="social-link-profile" type="text" placeholder="Usuario de X" /></div>
                            <div className="Instagram"><img src="/redes-10.svg" alt="Instagram" /><input className="social-link-profile" type="text" placeholder="Usuario de Instragram" /></div>
                            <div className="Discord"><img src="/redes-11.svg" alt="Discord" /><input className="social-link-profile" type="text" placeholder="Usuario de Discord" /></div>
                            <div className="Youtube"><img src="/redes-12.svg" alt="YouTube" /><input className="social-link-profile" type="text" placeholder="Usuario de Youtube" /></div>
                            <div className="Twitch"><img src="/redes-13.svg" alt="Twitch" /><input className="social-link-profile" type="text" placeholder="Usuario de Twitch" /></div>
                        </div>
                    </section>
                </main>
                <button type="submit" className="btn-primary-profile">
                    Guardar
                </button>
            </section>

            {/* Publicaciones */}
            <section id="Publications-profile">
                <h3 className="subtitleProfile">Publicaciones</h3>
                <p>Aquí se mostrarán las publicaciones del usuario.</p>
            </section>
        </section>
    );
};

export default UserProfile;
