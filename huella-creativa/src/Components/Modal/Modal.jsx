import React from 'react';
import "./Modal.css"


const Modal = ({ publication, closeModal }) => {
    if (!publication) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{publication.titulo}</h3>
                <p>{publication.contenido}</p>
                {publication.imagen && <img src={publication.imagen} alt={publication.titulo} />}
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default Modal;