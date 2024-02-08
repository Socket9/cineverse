import Logo from "./Logo/Logo";
import "./Aside.styles.css";
import NavBar from "./NavBar/NavBar.jsx";

const Aside = () => {
    return (
        <section className="aside">
            <Logo />
            <NavBar />
        </section>
    );
};

export default Aside;
