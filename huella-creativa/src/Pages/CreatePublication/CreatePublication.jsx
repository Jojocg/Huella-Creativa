import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUserPublication } from "../../Services/CreatePublicationService"
import "./CreatePublication.css";
import { UserContext } from "../../Context/user";


function CreatePublication() {
    const { metodoId } = useParams()
    const {user} = useContext(UserContext)
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

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChangePublicationData = ({ target }) => {
        const { name, value } = target;
        setPublicationData((previousValue) => ({ ...previousValue, [name]: value }));
    };

    const handleChangeMaterialData = (index, { target }) => {
        const { name, value } = target;
        const newMaterials = [...publicationData.materiales];
        newMaterials[index] = { ...newMaterials[index], [name]: value };
        setPublicationData((previousValue) => ({
            ...previousValue,
            materiales: newMaterials
        }));
    };

    const handleAddMaterial = () => {
        setPublicationData((previousValue) => ({
            ...previousValue,
            materiales: [
                ...previousValue.materiales,
                { nombre: "", descripcion: "", marca: "", tutorial: "" }
            ]
        }));
    };

    const handleRemoveMaterial = (index) => {
        if (index === 0) {
            return;
        }
        const newMaterials = [...publicationData.materiales];
        newMaterials.splice(index, 1); // Remove the material at the given index
        setPublicationData((previousValue) => ({
            ...previousValue,
            materiales: newMaterials
        }));
    };

    const validateInput = () => {
        // Simple validation: check if all required fields are filled
        if (!publicationData.titulo || !publicationData.contenido || !publicationData.metodo || !publicationData.categoria_artistica) {
            setError("Please fill out all required fields.");
            return false;
        }
        return true;
    };

    const handleCreatePublication = async (e) => {
        e.preventDefault();

        if (!validateInput()) {
            return; // Stop if validation fails
        }

        try {
            await createUserPublication(user.publicoId, publicationData)


            // Here you would typically send the data to your API
            console.log("Publicación creada:", publicationData);
            // After successful submission, navigate to another page, or reset form, etc.
            navigate(`/publications/${metodoId}`); // example navigate
        } catch (error) {
            console.error("Error creating publication:", error.message);
            setError("There was an error creating your publication.");
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
                        <input
                            type="text"
                            name="titulo"
                            onChange={handleChangePublicationData}
                            required
                        />
                    </label>
                    <label>
                        Contenido:
                        <input
                            type="text"
                            name="contenido"
                            onChange={handleChangePublicationData}
                            required
                        />
                    </label>
                    <label>
                        Enlace:
                        <input
                            type="text"
                            name="link"
                            onChange={handleChangePublicationData}
                        />
                    </label>
                    <label>
                        Método:
                        <select
                            name="metodo"
                            onChange={handleChangePublicationData}
                            value={publicationData.metodo}
                            required
                        >
                            <option value="">Selecciona Método:</option>
                            <option value="tradicional">Tradicional</option>
                            <option value="digital">Digital</option>
                        </select>
                    </label>
                    <label>
                        Categoría artística:
                        <select
                            name="categoria_artistica"
                            onChange={handleChangePublicationData}
                            value={publicationData.categoria_artistica}
                            required
                        >
                            <option value="">Selecciona Categoría:</option>
                            <option value="ilustración">Ilustración</option>
                            <option value="diseño gráfico">Diseño gráfico</option>
                            <option value="escultura">Escultura</option>
                            <option value="modelado 3D">Modelado 3D</option>
                            <option value="animación">Animación</option>
                        </select>
                    </label>

                    <label>
                        Materiales usados:
                    </label>
                    {publicationData.materiales.map((material, index) => (
                        <div key={index} className="material-form">
                            <label>
                                Nombre del material:
                                <input
                                    type="text"
                                    name="nombre"
                                    value={material.nombre}
                                    onChange={(e) => handleChangeMaterialData(index, e)}
                                    required
                                />
                            </label>
                            <label>
                                Descripción:
                                <input
                                    type="text"
                                    name="descripcion"
                                    value={material.descripcion}
                                    onChange={(e) => handleChangeMaterialData(index, e)}
                                    required
                                />
                            </label>
                            <label>
                                Marca:
                                <input
                                    type="text"
                                    name="marca"
                                    value={material.marca}
                                    onChange={(e) => handleChangeMaterialData(index, e)}
                                    required
                                />
                            </label>
                            <label>
                                Tutorial:
                                <input
                                    type="text"
                                    name="tutorial"
                                    value={material.tutorial}
                                    onChange={(e) => handleChangeMaterialData(index, e)}
                                />
                            </label>
                            <button type="button" onClick={() => handleRemoveMaterial(index)}>
                                Remove Material
                            </button>
                        </div>
                    ))}

                    <button type="button" onClick={handleAddMaterial}>
                        Add Material
                    </button>
                </section>
                {error && <p>{error}</p>}
                <section>
                    <button type="submit">Crear</button>
                </section>
            </form>
        </div>
    );
}

export default CreatePublication;

