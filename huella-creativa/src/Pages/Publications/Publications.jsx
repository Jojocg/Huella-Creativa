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
            console.log(response.data)
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

        return publications.map((publication) => {
            // Step 1: Parse the date (without using toISOString) and format it manually
            const creationDate = new Date(publication.fecha_publicacion);

            const year = creationDate.getFullYear(); // Get the year
            const month = String(creationDate.getMonth() + 1).padStart(2, '0'); // Get the month, add 1 (months start from 0)
            const day = String(creationDate.getDate()).padStart(2, '0'); // Get the day, and ensure it's 2 digits

            const formattedDate = `${year}-${month}-${day}`; // Format as "YYYY-MM-DD"

            /* const materials = publication.metodo.materiales;

            const result = materials.map(() => {
                return;
            }) Mirar esto para poder mapear los materiales y que los enseñe*/ 

            // Step 2: Render the publication card
            return (
                <div key={publication.id} className="publication-card" onClick={() => openModal(publication)}>
                    <h3>{publication.titulo}</h3>
                    <p>{publication.publico.privado.nombre}</p>
                    <p>{publication.metodo.materiales[0].nombre}</p>
                    <p>{formattedDate}</p> {/* This will display the formatted date */}
                    <img src={publication.imagen} />
                </div>
            );
        });
           
    }

    return (
        <div>
            <h3>{publications[0]?.metodo.metodo}</h3>
            <h4>Ilustración</h4>
            <Link to={`/publications/${metodoId}/create`} ><button>Crear publicación</button></Link>
            <hr />
            {displayPublications()}
            {showModal && (
                <Modal publication={selectedPublication} closeModal={closeModal} />
            )}
        </div>
    )
}

export default Publications