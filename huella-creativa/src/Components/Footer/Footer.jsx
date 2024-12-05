import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="newsletter">
                <h3 className="footer-title">Manténte inspirado</h3>
                <p className="footer-subtitle">Suscríbete a nuestra newsletter</p>
                <div className="input-wrapper">
                    <input type="email" placeholder="introduce tu mail" />
                    <button className="btn-primary">suscríbete</button>
                </div>
                <div className="terms">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                        He leído, entendido y acepto la{' '}
                        <a href="#">política de privacidad</a> y la{' '}
                        <a href="#">suscripción</a>
                    </label>
                </div>
                <div className="logo-section">
                    <img className="logo-footer" src="/logo_blanco.svg" alt="Logo de Huella Creativa" />
                </div>
            </div>
            <div className="socials">
                <h4 className="social-title">¡Conecta con nosotros!</h4>
                <div className="social-icons">
                    <img src="/redes-08.svg" alt="Facebook" />
                    <img src="/redes-09.svg" alt="Twitter" />
                    <img src="/redes-10.svg" alt="Instagram" />
                    <img src="/redes-11.svg" alt="Discord" />
                    <img src="/redes-12.svg" alt="YouTube" />
                    <img src="/redes-13.svg" alt="Twitch" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
