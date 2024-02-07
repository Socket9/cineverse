import { useThemeContext } from "../../hooks/theme/useThemeContext";
import "./Loading.styles.css";

const Loading = () => {
    const { isLightMode } = useThemeContext();

    return (
        <div className="spinner-container" data-theme={isLightMode ? "light" : "dark"}>
            <div className="spinner"></div>;
        </div>
    );
};

export default Loading;
