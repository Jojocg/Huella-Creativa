
import './Home.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}   
            <section className="hero">
    {/* Contenedor de imágenes de fondo */}
    <div className="hero-images">
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

    {/* Contenido del Hero */}
    <h1>
        ¡Tu viaje creativo <br /> <span className="highlight">comienza aquí!</span>
    </h1>
    <p>
        Conecta con artistas, domina nuevas herramientas y transforma tu
        creatividad en talento. Este es el lugar donde aprender y fomentar tu
        creatividad desde cualquier rama.
    </p>
    <div className="hero-buttons">
        <button className="btn-outline">Inicia sesión</button>
        <button className="btn-primary">Regístrate</button>
    </div>
</section>

            {/* Gallery Section */}
            <section className="gallery">
                {[
                    { id: 1, img: '/creaciones-16.png', name: 'CeliPainter', description: 'Acuarela en movimiento', likes: 56 },
                    { id: 2, img: '/creaciones-17.png', name: 'JojoGC', description: 'Nike digital', likes: 56 },
                    { id: 3, img: '/creaciones-18.png', name: 'juliThePainter', description: 'Blade Runner Illustration', likes: 56 },
                    { id: 4, img: '/creaciones-19.png', name: 'VicenTico', description: 'El Principito', likes: 56 },
                    { id: 5, img: '/creaciones-22.png', name: 'SashaNeitor', description: 'Ilustración realista', likes: 56 },
                    { id: 6, img: '/creaciones-23.png', name: 'Ofeyunku', description: 'Acuarela Digital', likes: 56 },
                ].map(item => (
                    <div key={item.id} className="gallery-item">
                        <div className="image-container">
                            <img src={item.img} alt="Arte" />
                        </div>
                        <div className="gallery-info">
                            <div className="profile">
                                <img src="AVATAR.png" alt="Avatar" className="avatar" />
                                <span className="name">{item.name}</span>
                            </div>
                            <p className="description">{item.description}</p>
                            <div className="stats">
                                <div className="likes">
                                    <img src="/corazon.svg" alt="Corazón" className="icon" />
                                    <span>{item.likes}</span>
                                </div>
                                <a href="https://elpais.com/" target="_blank" rel="noopener noreferrer" className="btn-arrow">
                                    <img src="/flechas-20.svg" alt="Flecha verde" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Separator */}
            <div className="separator">
                <img src="/puntos.png" alt="Puntos decorativos" />
            </div>

            {/* Call to Action */}
            <section className="cta">
                <h2>Si quieres seguir viendo, regístrate</h2>
                <div className="cta-buttons">
                    <button className="btn-outline">Inicia sesión</button>
                    <button className="btn-primary">Regístrate</button>
                </div>
            </section>
        </>
    );
};

export default Home;
