/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(true);
    return (
        <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("ThemeContext debe ser utilizado dentro del provider.");
    }
    return context;
};
