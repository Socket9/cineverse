/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const MediaContext = createContext();

export const MediaContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <MediaContext.Provider
            value={{
                currentPage,
                setCurrentPage,
            }}
        >
            {children}
        </MediaContext.Provider>
    );
};

export const useMediaContext = () => {
    const context = useContext(MediaContext);

    if (context === undefined) {
        throw new Error("MediaContext debe ser utilizado dentro del provider.");
    }
    return context;
};
