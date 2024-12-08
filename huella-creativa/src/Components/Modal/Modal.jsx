import React from 'react';
import './Modal.css';

const Modal = ({ publication, closeModal }) => {
    if (!publication) return null;
    const creationDate = new Date(publication.fecha_publicacion);

    const year = creationDate.getFullYear(); // Get the year
    const month = String(creationDate.getMonth() + 1).padStart(2, '0'); // Get the month, add 1 (months start from 0)
    const day = String(creationDate.getDate()).padStart(2, '0'); // Get the day, and ensure it's 2 digits

    const formattedDate = `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"

    return (
        <div className="modal-overlay" onClick={closeModal}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="profile">
                            <img
                                src="/avatarDefault.png"
                                alt="Avatar"
                                className="avatar"
                            />
                            <span className="name">
                                <span className="name">
                                    {publication?.publico?.nombre_usuario || publication?.publico?.privado?.nombre || "Nombre no disponible"}
                                </span>
                            </span>
                        </div>
                <h3>{publication.titulo}</h3>
                <p>{publication.contenido}</p>
                <p>Tutorial: <a href={publication.link}>{publication.link}</a></p>
                <p>{formattedDate}</p>
                {publication.imagen && <img src={publication.imagen} alt={publication.titulo} />}
                <h4>Materiales: </h4>
                {publication.materiales && publication.materiales.length > 0 ? (
                    <ul>
                        {publication.materiales.map((material, index) => (
                            <li key={index}>
                                <strong>{material.nombre}</strong>: {material.descripcion} <br></br>(Marca: {material.marca})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No materials listed for this publication.</p>
                )}


                <button onClick={closeModal}>X</button>

            </div>
        </div>
    );
};

export default Modal;
