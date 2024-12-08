import { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getAllPublications } from "../../Services/PublicationService";
import { UserContext } from "../../Context/user"; // Importa el contexto de usuario
import Modal from "../../Components/Modal/Modal";
import "./Publications.css";

const Publications = () => {
    const { metodoId } = useParams();
    console.log("metodoId recibido:", metodoId);
    const location = useLocation();
    const { category = "General", method = "General" } = location.state || {}; // Aquí recibimos el estado pasado desde HomeLogin
    console.log("State recibido:", { category, method }); // Agregar un console.log para depuración
    const [publications, setPublications] = useState([]);
    const [selectedPublication, setSelectedPublication] = useState(null); // To track the selected publication
    const [showModal, setShowModal] = useState(false); // To control the visibility of the modal
    const [sortOption, setSortOption] = useState("newest"); // Sorting option

    const { user } = useContext(UserContext);



    useEffect(() => {
        console.log("metodoId recibido:", metodoId);
        const getPublications = async () => {

            const response = await getAllPublications(metodoId) // the response is all the publications that coincide with the metodoId
            console.log(response.data) //Revisar esta linea
            setPublications(response.data)
            
        }
        getPublications()
    },[metodoId])


    // Open the modal and set the selected publication
    const openModal = (publication) => {
        setSelectedPublication(publication);
        setShowModal(true);
    };

    // Close the modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedPublication(null); // Reset the selected publication
    };

    // Handle sorting publications
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sortedPublications = [...publications].sort((a, b) => {
            switch (option) {
                case "newest":
                    return new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion);
                case "oldest":
                    return new Date(a.fecha_publicacion) - new Date(b.fecha_publicacion);
                case "mostRated":
                    return b.valoraciones - a.valoraciones;
                case "mostViewed":
                    return b.vistas - a.vistas;
                default:
                    return 0;
            }
        });

        setPublications(sortedPublications);
    };





    const getDescription = (category, method) => {
        const descriptions = {
            Ilustración: {
                Tradicional: "Explora técnicas de lápiz y papel para plasmar ideas con detalle y creatividad.",
                digital: "Descubre el poder del trazo. Aprende técnicas digitales y explora herramientas esenciales para convertir tus ideas en dibujos que cuenten historias únicas."
            },
            "diseño gráfico": {
                tradicional: "Diseña con herramientas clásicas y aprende los fundamentos del diseño gráfico.",
                digital: "Explora herramientas digitales avanzadas para llevar tus diseños al siguiente nivel."
            },
            escultura: {
                tradicional: "Modela en barro, madera u otros materiales clásicos para crear esculturas únicas.",
                digital: "Utiliza software de escultura digital para dar vida a tus modelos en 3D."
            },
            "modelado 3D": {
                tradicional: "Aprende las bases del modelado en arcilla o materiales tradicionales.",
                digital: "Descubre cómo crear modelos tridimensionales usando herramientas digitales modernas."
            },
            animación: {
                tradicional: "Explora técnicas de animación clásica cuadro por cuadro.",
                digital: "Descubre las herramientas y flujos de trabajo para la animación digital moderna."
            }
        };

        // Validar y retornar la descripción adecuada
        if (descriptions[category] && descriptions[category][method]) {
            return descriptions[category][method];
        }

        // Valor por defecto si no hay coincidencia
        return "Explora las mejores técnicas y herramientas para mejorar tus habilidades creativas.";
    };


    // Mantener el método displayPublications sin modificaciones
    const displayPublications = () => {

        // Comprueba si hay publicaciones disponibles
        if (!publications || publications.length === 0) {
            return <p>No hay publicaciones disponibles.</p>;
        }

        return publications.map((publication) => {
            console.log("Publicación procesada:", JSON.stringify(publication, null, 2));


            // Verifica que la fecha de publicación exista
            const creationDate = publication.fecha_publicacion
                ? new Date(publication.fecha_publicacion)
                : null;

            // Formatea la fecha si existe
            const formattedDate = creationDate
                ? `${creationDate.getFullYear()}-${String(creationDate.getMonth() + 1).padStart(2, "0")}-${String(creationDate.getDate()).padStart(2, "0")}`
                : "Fecha desconocida";

            return (
                <div
                    key={publication.id}
                    className="gallery-item-publication"
                    onClick={() => openModal(publication)}
                   
                >
                    <div className="image-container-publication">
                        <img
                            src={publication.imagen || "/fondo_web.png"} // Imagen por defecto si no hay una imagen
                            alt={publication.titulo || "Sin título"}
                        />
                    </div>
                    <div className="gallery-info-publication">
                        <div className="profile-publication">
                            <img
                                src="/avatarDefault.png"
                                alt="Avatar"
                                className="avatar"
                            />
                            <span className="name-publication">
                                <span className="name-publication">
                                    {publication?.publico?.nombre_usuario || publication?.publico?.privado?.nombre || "Nombre no disponible"}
                                </span>
                            </span>
                        </div>
                        <p className="description-publication">{publication.titulo || "Sin título"}</p>
                        <p className="date-publication">Fecha: {formattedDate}</p>
                        <div className="stats-publication">
                        <button
    className="btn-arrow-publication"
    onClick={() => openModal(publication)}
>
    <img 
        src="/flechas20.svg" 
        alt="Flecha verde"
    />
</button>
                    </div>
                </div>
            </div>
        );
    });
};


    return (
        <div className="publications-page">
            {/* Header Section */}
            <header className="publications-header">
                <div>
                    {/* Render dinámico de encabezado */}
                    <h1 className="section-subtitle--publication">{category}</h1>
                    <h2 className="section-title--publication">{method}</h2>
                    <p className="section-description-publication">
                        {getDescription(category, method)}
                    </p>
                </div>
                <Link to={`/publications/${metodoId}/create`}>
                    <button className="createBtn">Crear publicación</button>
                </Link>
                <div className="sort-container-publication">
                    <select
                        className="sort-dropdown-publication"
                        value={sortOption}
                        onChange={handleSort}
                    >
                        <option value="newest">Más nuevos</option>
                        <option value="oldest">Más antiguos</option>
                        <option value="mostRated">Más valorados</option>
                        <option value="mostViewed">Más vistas</option>
                    </select>
                </div>
            </header>

            {/* Publications Section */}
            <section className="gallery-publication">{displayPublications()}</section>

            {/* Advertisement Section */}
            <section className="advertisement-section">
            <div className="advertisement-header">
        <h1 className="advertisement-title">¡Hola, <span className="highlightAds"> {user.nombre || "Usuario"}!</span></h1>
        <p className="advertisement-description">Descubre las ofertas de tus marcas favoritas y todos los descuentos por ser parte de nuestra comunidad.</p>
    </div>
                <div className="ad-card" data-badge="Estudiantes" >
                    <img src="/publi2.png" alt="Adobe Illustrator" />
                    <p>
                        <strong>Adobe Illustrator</strong>
                        <br /> Herramienta esencial para crear ilustraciones vectoriales
                        escalables.
                    </p>
                </div>
                <div className="ad-card" data-badge="20% dto.">
                    <img src="/publi3.png" alt="Figma Beta" />
                    <p>
                        <strong>Figma</strong>
                        <br /> Descubre la nueva herramienta para desarrolladores de Figma.
                    </p>
                </div>
                <div className="ad-card" data-badge="Novedad">
                    <img src="/publi1.png" alt="Tablet Wacom" />
                    <p>
                        <strong>Tablet Wacom</strong>
                        <br /> Precisión y sensibilidad al trazo para artistas digitales.
                    </p>
                </div>
            </section>

            {/* Modal */}

            {showModal && (
                <Modal publication={selectedPublication} closeModal={closeModal} />
            )}
        </div>
    );
};

export default Publications;
