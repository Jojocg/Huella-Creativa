import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUserPublication } from "../../Services/CreatePublicationService";

import ModalConfirm from "../../Components/ModalConfirm/ModalConfirm"; // Import the Modal component

import "./CreatePublication.css";
import { UserContext } from "../../Context/user";

function CreatePublication() {
    const { metodoId } = useParams();
    const { user } = useContext(UserContext);
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
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false); // State for remove material modal
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false); // State for submit publication modal
    const [materialToRemove, setMaterialToRemove] = useState(null); // State to keep track of material being removed
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
            return; // Prevent removing the first material
        }
        // Open the modal to confirm removal
        setIsRemoveModalOpen(true);
        setMaterialToRemove(index); // Set the material index to remove
    };

    const confirmRemoveMaterial = () => {
        const newMaterials = [...publicationData.materiales];
        newMaterials.splice(materialToRemove, 1); // Remove the material
        setPublicationData((previousValue) => ({
            ...previousValue,
            materiales: newMaterials
        }));

        // Close the modal
        setIsRemoveModalOpen(false);
        setMaterialToRemove(null);
    };

    const cancelRemoveMaterial = () => {
        // Close the modal without removing the material
        setIsRemoveModalOpen(false);
        setMaterialToRemove(null);
    };

    const validateInput = () => {
        // Validate required fields
        if (!publicationData.titulo || !publicationData.contenido || !publicationData.metodo || !publicationData.categoria_artistica) {
            setError("Por favor rellena todos los campos requeridos.");
            return false;
        }
        return true;
    };

    const handleSubmitModalOpen = (e) => {
        e.preventDefault(); // Prevent form submission until the modal is confirmed
        if (!validateInput()) {
            return; // Stop if validation fails
        }
        // Open the confirmation modal for submission
        setIsSubmitModalOpen(true);
    };


    const confirmSubmitPublication = async () => {
        try {
            await createUserPublication(user.publicoId, publicationData);
            console.log("Publicación creada:", publicationData);
            navigate(`/publications/${metodoId}`); // Navigate to another page after creation
            setIsSubmitModalOpen(false); // Close modal after submission
        } catch (error) {
            console.error("Error creando publicación:", error.message);
            setError("Ha habido un error creando tu publicación.");
            setIsSubmitModalOpen(false); // Close modal if there's an error
        }
    };

    const cancelSubmitPublication = () => {
        setIsSubmitModalOpen(false); // Just close the modal if cancelled
    };

    return (
        <div>
            <form onSubmit={handleSubmitModalOpen}>
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
                        Título <span>*</span>:
                        <input
                            type="text"
                            name="titulo"
                            onChange={handleChangePublicationData}
                            required
                        />
                    </label>
                    <label>
                        Contenido <span>*</span>:
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
                        Método <span>*</span>:
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
                        Categoría artística <span>*</span>:
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
                                Nombre del material <span>*</span>:
                                <input
                                    type="text"
                                    name="nombre"
                                    value={material.nombre}
                                    onChange={(e) => handleChangeMaterialData(index, e)}
                                    required
                                />
                            </label>
                            <label>
                                Descripción <span>*</span>:
                                <input
                                    type="text"
                                    name="descripcion"
                                    value={material.descripcion}
                                    onChange={(e) => handleChangeMaterialData(index, e)}
                                    required
                                />
                            </label>
                            <label>
                                Marca <span>*</span>:
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
                            {/* Remove button for all but the first material */}
                            {index !== 0 && (
                                <button type="button" onClick={() => handleRemoveMaterial(index)}>
                                    Borrar Material
                                </button>
                            )}
                        </div>
                    ))}

                    <button type="button" onClick={handleAddMaterial}>
                        Añadir Material
                    </button>
                </section>
                {error && <p>{error}</p>}
                <section>
                    <button type="submit">Crear</button>
                </section>
            </form>

            {/* Modal for confirmation on removing material */}
            <ModalConfirm
                isOpen={isRemoveModalOpen}
                onConfirm={confirmRemoveMaterial}
                onCancel={cancelRemoveMaterial}
                message="¿Estás seguro/a de que quieres borrar este material?"
            />

            {/* Modal for confirmation on submitting the publication */}
            <ModalConfirm
                isOpen={isSubmitModalOpen}
                onConfirm={confirmSubmitPublication}
                onCancel={cancelSubmitPublication}
                message="¿Estás seguro/a de que quieres crear tu publicación?"
            />
        </div>
    );
}
export default CreatePublication;


