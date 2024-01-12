import "./Aside.styles.css";
import Logo from "./Logo/Logo";
import AppRouter from "../router/AppRouter.jsx";

const Aside = () => {
    return (
        <section className="aside">
            <Logo />
            <AppRouter />
        </section>
    );
};

export default Aside;
