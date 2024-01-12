import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MediaCard from "./Movie/MediaCard";
import Loading from "../loading/Loading";
import Pagination from "../pagination/Pagination";
import { classNames } from "../../utils/classNames";
import { useThemeContext } from "../../context/theme.context";
import { useMediaContext } from "../../context/media.context";
import { useFetchMedia } from "../../hooks/media/useFetchMedia";
import "./MediaGrid.styles.css";

const MediaGrid = () => {
    const searchKey = useSelector((store) => store.search.searchKeyword);
    const { isLightMode } = useThemeContext();
    const { type } = useParams();
    const { currentPage, setCurrentPage } = useMediaContext();

    const { media, loading } = useFetchMedia(searchKey, type, currentPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [type, searchKey]);

    return (
        <section
            className={classNames(
                "media-section",
                isLightMode ? "light" : "dark"
            )}
        >
            {loading && <Loading />}
            <div className="media-container">
                {media &&
                    !loading &&
                    type === "movie" &&
                    media.results.map((mediaItem) => (
                        <MediaCard
                            key={mediaItem.id}
                            media={mediaItem}
                            type={type}
                        />
                    ))}
                {media &&
                    !loading &&
                    type === "tv" &&
                    media.results.map((mediaItem) => (
                        <MediaCard
                            key={mediaItem.id}
                            media={mediaItem}
                            type={type}
                        />
                    ))}
            </div>
            {!loading && currentPage <= media.total_pages && (
                <Pagination maxPage={media.total_pages} />
            )}
        </section>
    );
};

export default MediaGrid;
