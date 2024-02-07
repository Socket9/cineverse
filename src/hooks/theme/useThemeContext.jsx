import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("ThemeContext debe ser utilizado dentro del provider.");
    }
    return context;
};
