import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../hooks/theme/useThemeContext";
import "./Page404.styles.css";

const Page404 = () => {
    const { isLightMode } = useThemeContext();
    return (
        <section
            className="media-section"
            data-theme={isLightMode ? "light" : "dark"}
        >
            <h2>Page not found</h2>
            <NavLink to={"/"}>Go back</NavLink>
        </section>
    );
};
export default Page404;
