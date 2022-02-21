import Header from "../Header/Header.js";
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";
import css from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
            <div className={css.container}>
                <main className={css.main}>
                   <Header />
                   { children }
                </main>
            </div>
        <Footer />
        </>
    )
}

export default Layout