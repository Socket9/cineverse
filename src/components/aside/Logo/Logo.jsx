import "./Logo.styles.css";
import { useThemeContext } from "../../../context/theme.context.jsx";

const Logo = () => {
    const { isLightMode } = useThemeContext();

    const logoPath = isLightMode
        ? "/cineverse/images/logo-light.png"
        : "/cineverse/images/logo-dark.png";

    return (
        <div className="logo-container">
            <img src={logoPath} alt="" />
        </div>
    );
};

export default Logo;
