import { useSelector } from "react-redux";
import MediaCard from "../../main/Movie/MediaCard";
import "./Favorites.styles.css";

const Favorites = () => {
    const favorites = useSelector((store) => store.favorites);

    const moviesList = favorites.filter((favItem) => favItem.type === "movie");
    const tvList = favorites.filter((favItem) => favItem.type === "tv");

    return (
        <section className="favorites-section">
            <div className="fav-container">
                <h4 className="fav-title">Your favorite movies</h4>
                {moviesList.length === 0 ? (
                    <p>No favorites yet...</p>
                ) : (
                    <div className="content">
                        {moviesList.map((favItem) => (
                            <MediaCard
                                key={favItem.media.id}
                                media={favItem.media}
                                type={favItem.type}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="fav-container">
                <h4 className="fav-title">Your favorite TV Shows</h4>
                {tvList.length === 0 ? (
                    <p>No favorites yet...</p>
                ) : (
                    <div className="content">
                        {tvList.map((favItem) => (
                            <MediaCard
                                key={favItem.media.id}
                                media={favItem.media}
                                type={favItem.type}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Favorites;
