
import { useContext } from "react";
import { UserContext } from "../../Context/user";
import "./UserProfile.css";

const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <section className="user-profile">
            <h1>Bienvenido, {user || "Usuario"}</h1>
            <p>Aquí podrás ver y editar tus datos personales.</p>
            {/* Agrega más contenido según sea necesario */}
        </section>
    );
};

export default UserProfile;
