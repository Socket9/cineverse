/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(true);
    return (
        <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
