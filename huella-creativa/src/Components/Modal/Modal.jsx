import React from 'react';
import './Modal.css';

const Modal = ({ publication, closeModal }) => {
    if (!publication) return null;
    const creationDate = new Date(publication.fecha_publicacion);

    const year = creationDate.getFullYear(); // Get the year
    const month = String(creationDate.getMonth() + 1).padStart(2, '0'); // Get the month, add 1 (months start from 0)
    const day = String(creationDate.getDate()).padStart(2, '0'); // Get the day, and ensure it's 2 digits

    const formattedDate = `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"

    const creationDate = new Date(publication.fecha_publicacion);
    const year = creationDate.getFullYear();
    const month = String(creationDate.getMonth() + 1).padStart(2, '0');
    const day = String(creationDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return (
        <div className="modal-overlay" onClick={closeModal}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{publication.titulo}</h3>
                <p>{publication.contenido}</p>
                <p><a href={publication.link}>{publication.link}</a></p>
                <p>{formattedDate}</p>
                {publication.imagen && <img src={publication.imagen} alt={publication.titulo} />}
                <button onClick={closeModal}>Close</button>

            </div>
        </div>
    );
};

export default Modal;
