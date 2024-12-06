import api from "./config";



export const getAllPublications = async (id) => {
    try {
        console.log("Llamada a getAllPublications con metodoId:", id); // Log del ID recibido
        const response = await api.get("publicaciones/", {
            params: {
                metodoId: id
            }
        });
        console.log("Respuesta del backend:", response.data); // Log de la respuesta
        return response;
    } catch (error) {
        console.error("Error en getAllPublications:", error.message);
    }
};




// export const getAllPublications = async (id) => {
//     try {
//         const response = await api.get("publicaciones/", {
//             params: {
//                 metodoId: id //{/* el id se sustituye al llamar a la función getAllPublications, dentro del useEffect de Publications */}
//             }
//         })
//         console.log(response.data)
//         return response
//     } catch (error) {
//         console.error(error.message)
//     }

// }

