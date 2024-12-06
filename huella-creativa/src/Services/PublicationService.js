import api from "./config";



export const getAllPublications = async (id) => {
    try {
        console.log("Llamada a getAllPublications con metodoId:", id); // Log del ID recibido
        const response = await api.get("publicaciones/", {
            params: {
                metodoId: id
            }

        })
        console.log(response.data) //Revisar esta linea
        return response

    } catch (error) {
        console.error("Error en getAllPublications:", error.message);
    }
};



