import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
          
  
            <h1 className="not-found-404">404</h1>
            <div className="content">
    
                <img
                    className="not-found-image"
                    src="/fondo_web.png"
                    alt="Página no encontrada"
                />


                <h1 className="title">
                    Ups... <br /> <span className="highlight">Página no encontrada</span>
                </h1>

      
                <p className="description">
                    Parece que te has perdido. Pero no te preocupes, ¡te ayudaremos a encontrar el camino!
                </p>

          
                <Link to="/">
                    <button className="btn-primary">Volver al inicio</button>
                </Link>
            </div>

            {/* Decoración adicional */}
            <div className="dots">
                <img src="/puntos.png" alt="Decoración de puntos" />
            </div>
        </div>
    );
};

export default NotFound;
