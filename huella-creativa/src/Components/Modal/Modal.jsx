import React from 'react';
import { useState } from "react";
import './Modal.css';

const Modal = ({ publication, closeModal }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 100)); // Número inicial aleatorio
    if (!publication) return null;
    const creationDate = new Date(publication.fecha_publicacion);

    const year = creationDate.getFullYear(); // Get the year
    const month = String(creationDate.getMonth() + 1).padStart(2, '0'); // Get the month, add 1 (months start from 0)
    const day = String(creationDate.getDate()).padStart(2, '0'); // Get the day, and ensure it's 2 digits

    const formattedDate = `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"

    const toggleLike = () => {
        if (!liked) {
            setLikesCount(likesCount + 1); // Incrementa el contador si no estaba "liked"
        } else {
            setLikesCount(likesCount - 1); // Decrementa si se deshace el "like"
        }
        setLiked(!liked); // Cambia el estado de "liked"
    };


    return (
        <div className="modal-overlay" onClick={closeModal}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="profileModal">
                            <div className='AvatarNameModal'>
                                <img 
                                src="/avatarDefault.png"
                                alt="Avatar"
                                className="avatarModal"
                            />
                                <span className="nameModal">
                                    {publication?.publico?.nombre_usuario || publication?.publico?.privado?.nombre || "Nombre no disponible"}
                                </span>
                                </div>
                            
                                <span className="date">
        {formattedDate}
    </span>
                        </div>
                <h3 className='h3Modal'>{publication.titulo}</h3>
                {/* Sección de likes */}
                <div className="statsModal">
                    <div className="likesModal" onClick={toggleLike}>
                        <img
                            src={liked ? "/corazon.svg" : "/corazon_vacio.svg"}
                            
                            alt="Corazón"
                            className="iconModal"
                        />
                        <span className="likesCountModal">{likesCount}</span>
                        <span className='spanModal'>{liked ? "Liked!" : "Like"}</span>
                    </div>
                </div>

                {publication.imagen && <img src={publication.imagen || "/fondo_web.png"} alt={publication.titulo} />}
                <p className='pModal'>{publication.contenido}</p>

                <h2 className='h2Modal'>Tutorial: <a href={publication.link}>{publication.link}</a></h2>
                <h2 className='h2Modal'>Materiales: </h2>

                {publication.materiales && publication.materiales.length > 0 ? (
                    <ul>
                        {publication.materiales.map((material, index) => (
                            <li key={index}>
                                <strong>{material.nombre}</strong>: {material.descripcion} <br></br>(Marca: {material.marca})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay materiales disponibles.</p>
                )}


                <button className= "closeModal" onClick={closeModal}>X</button>

            </div>
        </div>
    );
};

export default Modal;
