import { useThemeContext } from "../../../context/theme.context";
import "./ToggleThemeButton.styles.css";

const ToggleThemeButton = () => {
    const { isLightMode, setIsLightMode } = useThemeContext();

    const handleClick = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <button onClick={handleClick} className="toggle-button">
            {isLightMode ? (
                <i className="pi pi-sun"></i>
            ) : (
                <i className="pi pi-moon"></i>
            )}
        </button>
    );
};

export default ToggleThemeButton;
