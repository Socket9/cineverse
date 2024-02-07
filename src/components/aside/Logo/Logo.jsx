import "./Logo.styles.css";
import { useThemeContext } from "../../../hooks/theme/useThemeContext";

const Logo = () => {
    const { isLightMode } = useThemeContext();

    const logoPath = isLightMode
        ? "/images/logo-light.png"
        : "/images/logo-dark.png";

    return (
        <div className="logo-container">
            <img src={import.meta.env.BASE_URL + logoPath} alt="" />
        </div>
    );
};

export default Logo;
