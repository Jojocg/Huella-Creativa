import api from "./config";

export const createUserPublication = async (id, body) => {
  try {
    const response = await api.post(`publicaciones/publicos/${id}`, body, {
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

