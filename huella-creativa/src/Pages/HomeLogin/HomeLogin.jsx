
import './HomeLogin.css';
import { Link } from 'react-router-dom';

const HomeLogin = () => {
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

        <h1>
          ¡Tu viaje creativo <br /> <span className="highlight">comienza aquí!</span>
        </h1>
        <p>
          Conecta con artistas, domina nuevas herramientas y transforma tu
          creatividad en talento. Este es el lugar donde aprender y fomentar tu
          creatividad desde cualquier rama.
        </p>


      </section>

      {/* Categories Section */}
      <div className="categories">
  <div className="category-box">
    <div className="content-container">
      <span className="category-title">ilustración</span>
      <div className="options">
        <Link to={`/publications/1`} state={{ category: "ilustración", method: "tradicional" }}>
          <button className="btn-traditional">tradicional</button>
        </Link>
        <Link to={`/publications/6`} state={{ category: "ilustración", method: "digital" }}>
          <button className="btn-digital">digital</button>
        </Link>
      </div>
    </div>
    <img src="/Creaciones/creaciones-16.png" alt="Ilustración" />
  </div>

  <div className="category-box">
    <div className="content-container">
      <span className="category-title">diseño gráfico</span>
      <div className="options">
        <Link to={`/publications/3`} state={{ category: "diseño gráfico", method: "tradicional" }}>
          <button className="btn-traditional">tradicional</button>
        </Link>
        <Link to={`/publications/8`} state={{ category: "diseño grafico", method: "digital" }}>
          <button className="btn-digital">digital</button>
        </Link>
      </div>
    </div>
    <img src="/Creaciones/creaciones-16.png" alt="Ilustración" />
  </div>

  <div className="category-box">
    <div className="content-container">
      <span className="category-title">escultura</span>
      <div className="options">
        <Link to={`/publications/2`} state={{ category: "escultura", method: "tradicional" }}>
          <button className="btn-traditional">tradicional</button>
        </Link>
        <Link to={`/publications/7`} state={{ category: "escultura", method: "digital" }}>
          <button className="btn-digital">digital</button>
        </Link>
      </div>
    </div>
    <img src="/Creaciones/creaciones-16.png" alt="Ilustración" />
  </div>

  <div className="category-box">
    <div className="content-container">
      <span className="category-title">modelado 3D</span>
      <div className="options">
        <Link to={`/publications/5`} state={{ category: "modelado 3D", method: "tradicional" }}>
          <button className="btn-traditional">tradicional</button>
        </Link>
        <Link to={`/publications/10`} state={{ category: "modelado 3D", method: "digital" }}>
          <button className="btn-digital">digital</button>
        </Link>
      </div>
    </div>
    <img src="/Creaciones/creaciones-16.png" alt="Ilustración" />
  </div>

  <div className="category-box">
    <div className="content-container">
      <span className="category-title">animación</span>
      <div className="options">
        <Link to={`/publications/4`} state={{ category: "animación", method: "tradicional" }}>
          <button className="btn-traditional">tradicional</button>
        </Link>
        <Link to={`/publications/9`} state={{ category: "animación", method: "digital" }}>
          <button className="btn-digital">digital</button>
        </Link>
      </div>
    </div>
    <img src="/Creaciones/creaciones-16.png" alt="Ilustración" />
  </div>

</div>

{/* Separator */}
<div className="separator">
  <img src="/puntos.png" alt="Puntos decorativos" />
</div>


    </>
  );
};

export default HomeLogin;
