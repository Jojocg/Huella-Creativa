import api from "./config";

export const getAllPublications = async (id) => {
    try {
        const response = await api.get("publicaciones/", {
            params: {
                metodoId: id //{/* el id se sustituye al llamar a la función getAllPublications, dentro del useEffect de Publications */}
            }
        })
        console.log(response.data)
        return response
    } catch (error) {
        console.error(error.message)
    }
    
}