import { NavLink } from "react-router-dom";
import "./MediaCard.styles.css";
import { getYearFromDate } from "../../../utils/getYearFromDate";

/* eslint-disable react/prop-types */
const MediaCard = ({ media, type }) => {
    return (
        <NavLink to={`/cineverse/detail/${type}/${media.id}`} className="media-card">
            {type === "movie" && (
                <article>
                    <div className="img-container">
                        {!media.poster_path ? (
                            <img
                                src={"images/default-img.png"}
                                alt="movie-image"
                            />
                        ) : (
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                                alt="movie-image"
                            />
                        )}
                        <span className="year">
                            {getYearFromDate(media.release_date)}
                        </span>
                    </div>
                    <h3>{media.original_title}</h3>
                </article>
            )}

            {type === "tv" && (
                <article>
                    <div className="img-container">
                        {!media.poster_path ? (
                            <img
                                src={"images/default-img.png"}
                                alt="movie-image"
                            />
                        ) : (
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${media.poster_path}`}
                                alt="movie-image"
                            />
                        )}

                        <span className="year">
                            {getYearFromDate(media.first_air_date)}
                        </span>
                    </div>
                    <h3>{media.name}</h3>
                </article>
            )}
        </NavLink>
    );
};

export default MediaCard;
