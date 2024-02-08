import Search from "./Search/Search";
import "./HeaderBar.styles.css";
import { useThemeContext } from "../../hooks/theme/useThemeContext";
import Login from "./Login/Login";
import ToggleThemeButton from "./ToggleTheme/ToggleThemeButton";

const HeaderBar = () => {
    const { isLightMode } = useThemeContext();

    return (
        <section
            className="header-container"
            data-theme={isLightMode ? "light" : "dark"}
        >
            <Search />
            <div className="login-toggle">
                <ToggleThemeButton />
                <Login />
            </div>
        </section>
    );
};

export default HeaderBar;
