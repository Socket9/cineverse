import { useEffect, useState } from "react";
import { fetchMedia } from "../../services/data.service";

export const useFetchMedia = (keyword, type, page) => {
    const [media, setMedia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const mediaData = await fetchMedia(keyword, type, page);
                setMedia(mediaData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, [keyword, type, page]);

    return { media, loading };
};
