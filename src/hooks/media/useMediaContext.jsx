import { useContext } from "react";
import { MediaContext } from "../../context/media.context";

export const useMediaContext = () => {
    const context = useContext(MediaContext);

    if (context === undefined) {
        throw new Error("MediaContext debe ser utilizado dentro del provider.");
    }
    return context;
};
