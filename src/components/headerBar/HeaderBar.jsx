import Search from "./Search/Search";
import "./HeaderBar.styles.css";
import { useThemeContext } from "../../context/theme.context.jsx";
import { classNames } from "../../utils/classNames";
import Login from "./Login/Login";

const HeaderBar = () => {
    const { isLightMode } = useThemeContext();

    return (
        <section
            className={classNames(
                "header-container",
                isLightMode === true ? "light" : "dark"
            )}
        >
            <Search />
            <Login />
        </section>
    );
};

export default HeaderBar;
