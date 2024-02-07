import Logo from "./Logo/Logo";
import AppRouter from "../router/AppRouter.jsx";
import "./Aside.styles.css";

const Aside = () => {
    return (
        <section className="aside">
            <Logo />
            <AppRouter />
        </section>
    );
};

export default Aside;
