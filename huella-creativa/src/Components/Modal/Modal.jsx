import React from 'react';
import './Modal.css';

const Modal = ({ publication, closeModal }) => {
    if (!publication) return null;

    const creationDate = new Date(publication.fecha_publicacion);
    const year = creationDate.getFullYear();
    const month = String(creationDate.getMonth() + 1).padStart(2, '0');
    const day = String(creationDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="modal-header">
                    <div className="user-info">
                        <img src={publication.autor.foto || '/default-avatar.png'} alt="Autor" className="user-avatar" />
                        <div>
                            <p className="user-name">{publication.autor.nombre_usuario}</p>
                            <p className="user-role">{publication.autor.rol}</p>
                        </div>
                    </div>
                    <button className="modal-close" onClick={closeModal}>×</button>
                </div>

                {/* Modal Body */}
                <div className="modal-body">
                    <h3 className="modal-title">{publication.titulo}</h3>
                    {publication.imagen && (
                        <div className="modal-image-container">
                            <img src={publication.imagen} alt={publication.titulo} className="modal-image" />
                        </div>
                    )}
                    <p className="modal-description">{publication.contenido}</p>

                    {publication.link && (
                        <div className="modal-link">
                            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                                Ver más
                            </a>
                        </div>
                    )}

                    <p className="modal-date">Fecha de publicación: {formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
