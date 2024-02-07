import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../loading/Loading";
import { useMediaDetailsFetch } from "../../../hooks/media/useMediaDetailsFetch";
import { addFavorite, removeFavorite } from "../../../redux/favorites/slice";
import { classNames } from "../../../utils/classNames";
import { useThemeContext } from "../../../hooks/theme/useThemeContext";
import "./Details.styles.css";

const Details = () => {
    const dispatcher = useDispatch();
    const { type, movieId } = useParams();
    const { mediaDetails, loading } = useMediaDetailsFetch(type, movieId);
    const favorites = useSelector((store) => store.favorites);
    const userDetails = useSelector((store) => store.user.userProfile);
    const { isLightMode } = useThemeContext();

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (mediaDetails) {
            setIsFavorite(
                favorites.some(
                    (favorite) => favorite.media.id === mediaDetails.id
                )
            );
        }
    }, [favorites, mediaDetails]);

    const handleClick = () => {
        if (isFavorite) {
            dispatcher(removeFavorite({ media: mediaDetails, type: type }));
            setIsFavorite(false);
        } else {
            dispatcher(addFavorite({ media: mediaDetails, type: type }));
            setIsFavorite(true);
        }
    };

    return (
        <section
            className="details-container"
            data-theme={isLightMode ? "light" : "dark"}
        >
            {loading && <Loading />}
            {mediaDetails && (
                <div className="details-content">
                    {!mediaDetails.poster_path ? (
                        <img
                            src={"/images/default-img.png"}
                            alt="default-image"
                        />
                    ) : (
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${mediaDetails.poster_path}`}
                            alt="movie-image"
                        />
                    )}

                    <div className="info">
                        <div className="release-date">
                            <p>{mediaDetails.release_date}</p>
                        </div>
                        <div className="title-vote">
                            <h3>
                                {type === "movie"
                                    ? mediaDetails.title
                                    : mediaDetails.name}
                            </h3>

                            {userDetails && (
                                <button
                                    className={classNames(
                                        "add-fav",
                                        isFavorite ? "fav" : "non-fav"
                                    )}
                                    onClick={handleClick}
                                >
                                    {isFavorite ? (
                                        <i className="pi pi-star-fill"></i>
                                    ) : (
                                        <i className="pi pi-star"></i>
                                    )}
                                </button>
                            )}
                        </div>
                        <div className="genres">
                            {mediaDetails.genres.map((genre) => (
                                <span key={genre.id} className="genre-tag">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        <div className="description">
                            {mediaDetails.vote_average != 0 && (
                                <div className="vote">
                                    <span className="label">Avg. votes</span>
                                    <span>
                                        {mediaDetails.vote_average.toFixed(1)}
                                    </span>
                                </div>
                            )}
                            <p>{mediaDetails.overview}</p>
                        </div>

                        {type === "tv" && (
                            <div className="episodes">
                                <span>
                                    {mediaDetails.number_of_seasons} seasons
                                </span>
                                <span>
                                    {mediaDetails.number_of_episodes} episodes
                                </span>
                            </div>
                        )}

                        <div className="buttons">
                            <NavLink
                                to={`/cineverse/${type}`}
                                className="go-back-btn"
                            >
                                <i className="pi pi-angle-double-left"></i>
                                Go back
                            </NavLink>
                            {mediaDetails.homepage && (
                                <a
                                    href={mediaDetails.homepage}
                                    className="homepage"
                                >
                                    <i className="pi pi-home"></i>
                                    Home page
                                </a>
                            )}
                            {mediaDetails.trailer && (
                                <a href="" className="video">
                                    <i className="pi pi-video"></i>
                                    Trailer
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Details;
