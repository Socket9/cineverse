import { useThemeContext } from "../../../hooks/theme/useThemeContext";
import "./ToggleThemeButton.styles.css";

const ToggleThemeButton = () => {
    const { isLightMode, setIsLightMode } = useThemeContext();

    const handleClick = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <button
            onClick={handleClick}
            className="toggle-button"
            data-theme={isLightMode ? "light" : "dark"}
        >
            {isLightMode ? (
                <i className="pi pi-sun"></i>
            ) : (
                <i className="pi pi-moon"></i>
            )}
        </button>
    );
};

export default ToggleThemeButton;
