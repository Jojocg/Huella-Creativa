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
    return (
        <div>
            <h3>Digital</h3>
            <h4>Ilustración</h4>
            <hr />
            {publications[0]?.contenido} {/* el interrogante revisa que haya algo dentro de publications */}
            <section id="publication1"> {/* el link llevaría a un card component */}
                <Link to=""> 
                    <div><h5></h5></div>
                </Link>
            </section>
            <section id="publication2">
                <div></div>
            </section>
            <section id="publication3">
                <div></div>
            </section>
            <section id="publication4">
                <div></div>
            </section>
        </div>
    )
}

export default Publications