import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllPublications } from "../../Services/PublicationService";
import Modal from "../../Components/Modal/Modal";
import "./Publications.css"

const Publications = () => {
    
    const {metodoId} = useParams()
    const [publications, setPublications] = useState([])

    const [selectedPublication, setSelectedPublication] = useState(null); // To track the selected publication
    const [showModal, setShowModal] = useState(false); // To control the visibility of the modal

    useEffect(() => {
        const getPublications = async () => {
            const response = await getAllPublications(metodoId) 
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

    const displayPublications = () => {
        return publications.map((publication) => (
            <div key={publication.id} className="publication-card" onClick={() => openModal(publication)} /* Trigger the modal on clicking anywhere in the publication*/>  
                <h3>{publication.titulo}</h3> <p>{publication.contenido}</p> <img src={publication.imagen} /> </div>))
    }

    return (
        <div>
            <h3>{publications[0]?.metodo.metodo}</h3>
            <h4>Ilustración</h4>
            <button>Crear publicación</button>
            <hr />
            {displayPublications()}
            {showModal && (
                <Modal publication={selectedPublication} closeModal={closeModal} />
            )}
        </div>
    )
}

export default Publications