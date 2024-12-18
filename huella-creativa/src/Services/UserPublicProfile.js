import api from "./config";

export const getOnePublicProfile = async (id) => {
    try {
        const response = await api.get(`publicos/${id}`, {
            headers: {
                authorization: localStorage.getItem("token"), //{/* el id se sustituye al llamar a la función getAllPublications, dentro del useEffect de Publications */}
            },
        });
        /* console.log(response.data) */
        return response;
    } catch (error) {
        console.error(error.message);
    }

};