import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePublication.css";
import { UserContext } from "../../../Context/user";

function CreatePublication () {
    const [publicationData, setPublicationData] = useState({
        imagen: "",
        titulo: "",
        contenido: "",
        link: "",
        metodo: "",
        categoria_artistica: "",
        materiales: [
            {
                nombre: "",
                descripcion: "",
                marca: "",
                tutorial: ""
            }
        ],

    });

 /*    setPublicationData((previousValue) => ({ ...previousValue, materiales: previousValue.materiales.push({
        nombre: "",
        descripcion: "",
        marca: "",
        tutorial: ""
    }) }))
 */
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChangePublicationData = ({ target }) => {
        const { name, value } = target;
        setPublicationData((previousValue) => ({ ...previousValue, [name]: value }));
    };

    const validateInput = 

    const handleCreatePublication = async (e) => {
        try {
            e.preventDefault();

            
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleCreatePublication}>
                <section>
                    <label>
                        Imagen:
                        <input
                            type="text"
                            name="imagen"
                            onChange={handleChangePublicationData}
                        />
                    </label>
                    <label>
                        Título:
                        <input type="text" 
                        name="titulo" 
                        onChange={handleChangePublicationData} 
                        required/>
                    </label>
                    <label>
                        Contenido:
                        <input
                            type="text"
                            name="contenido"
                            onChange={handleChangePublicationData}
                        />
                    </label>
                    <label>
                        Enlace:
                        <input
                            type="text"
                            name="link"
                            onChange={handleChangePublicationData}
                            required
                        />
                    </label>
                    <label>
                        Método:
                        <input
                            type="text"
                            name="metodo"
                            onChange={handleChangePublicationData}
                            required
                        />
                    </label>
                    <label>
                        Categoría artística:
                        <input
                            type="text"
                            name="categoria_artistica"
                            onChange={handleChangePublicationData}
                            required
                        />
                    </label>
                    <label>
                        Materiales usados:
                    </label>
                        <label>
                            Nombre del material
                            <input
                                type="text"
                                name="categoria_artistica"
                                onChange={handleChangePublicationData}
                                required
                            />
                        </label>
                </section>
                {error && <p>{error}</p>}
                <section>
                    <button type="submit">Crear</button>
                </section>
            </form>
        </div>
    );
};


export default CreatePublication;