import { Outlet } from "react-router"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root