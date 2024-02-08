/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

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
