import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllPublications } from "../../Services/PublicationService";


const Publications = () => {
    
    const {metodoId} = useParams()
    const [publications, setPublications] = useState([])
    useEffect(() => {
        const getPublications = async () => {
            const response = await getAllPublications(metodoId) 
            setPublications(response.data)
        }
        getPublications()
    },[metodoId])

    const displayPublications = () => {
        return publications.map((publication) => 
            <Link key={publication.id} to={""}> <div>  <h3>{publication.titulo}</h3> <p>{publication.contenido}</p> <img src={publication.imagen} /> </div></Link>)
    }

    return (
        <div>
            <h3>Digital</h3>
            <h4>Ilustración</h4>
            <hr />
            {displayPublications()}
            {/* publications[0]?.contenido */} {/* el interrogante revisa que haya algo dentro de publications */}
        </div>
    )
}

export default Publications