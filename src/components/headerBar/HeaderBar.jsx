import Search from "./Search/Search";
import "./HeaderBar.styles.css";
import { useThemeContext } from "../../hooks/theme/useThemeContext";
import Login from "./Login/Login";

const HeaderBar = () => {
    const { isLightMode } = useThemeContext();

    return (
        <section
            className="header-container"
            data-theme={isLightMode ? "light" : "dark"}
        >
            <Search />
            <Login />
        </section>
    );
};

export default HeaderBar;
