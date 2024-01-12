// GET LIST OF MOVIES

export const getListOfMovies = async (page) => {
    const url = `https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3Y2JkZjYwOTg0NTFhMzIwM2ZiNWNlZGEyNTA0ZCIsInN1YiI6IjY1OTlmOTEzODliNTYxMDA5NDhiOWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSmA63EDjE2Km9S2D35YWnroBy9ySEyNhWu6_5VdWA",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

// GET LIST OF TV SHOWS

export const getListOfTVShows = async (page) => {
    const url = `https://api.themoviedb.org/3/discover/tv?page=${page}&sort_by=popularity.desc`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3Y2JkZjYwOTg0NTFhMzIwM2ZiNWNlZGEyNTA0ZCIsInN1YiI6IjY1OTlmOTEzODliNTYxMDA5NDhiOWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSmA63EDjE2Km9S2D35YWnroBy9ySEyNhWu6_5VdWA",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

// GET MOVIE BY ID

export const getMovieDetailsById = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3Y2JkZjYwOTg0NTFhMzIwM2ZiNWNlZGEyNTA0ZCIsInN1YiI6IjY1OTlmOTEzODliNTYxMDA5NDhiOWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSmA63EDjE2Km9S2D35YWnroBy9ySEyNhWu6_5VdWA",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

// GET TV SHOW BY ID

export const getTVShowDetailsByID = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3Y2JkZjYwOTg0NTFhMzIwM2ZiNWNlZGEyNTA0ZCIsInN1YiI6IjY1OTlmOTEzODliNTYxMDA5NDhiOWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSmA63EDjE2Km9S2D35YWnroBy9ySEyNhWu6_5VdWA",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

export const findMovieByKeyword = async (keyword) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3Y2JkZjYwOTg0NTFhMzIwM2ZiNWNlZGEyNTA0ZCIsInN1YiI6IjY1OTlmOTEzODliNTYxMDA5NDhiOWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSmA63EDjE2Km9S2D35YWnroBy9ySEyNhWu6_5VdWA",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

export const fetchMedia = async (searchKey, type, page) => {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const searching = searchKey ? "search" : "discover";
    const url = `${BASE_URL}/${searching}/${type}?${
        searching === "search" ? `query=${searchKey}&` : ""
    }page=${page}`;

    console.log(url);

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3Y2JkZjYwOTg0NTFhMzIwM2ZiNWNlZGEyNTA0ZCIsInN1YiI6IjY1OTlmOTEzODliNTYxMDA5NDhiOWQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sSmA63EDjE2Km9S2D35YWnroBy9ySEyNhWu6_5VdWA",
        },
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const json = await response.json();
        return json;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
};
