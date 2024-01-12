import { useEffect, useState } from "react";
import {
    getMovieDetailsById,
    getTVShowDetailsByID,
} from "../../services/data.service";

export const useMediaDetailsFetch = (type, id) => {
    const [mediaDetails, setMediaDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let mediaData;
                if (type === "movie") {
                    mediaData = await getMovieDetailsById(id);
                } else if (type === "tv") {
                    mediaData = await getTVShowDetailsByID(id);
                }
                setMediaDetails(mediaData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, type]);

    return { mediaDetails, loading };
};
