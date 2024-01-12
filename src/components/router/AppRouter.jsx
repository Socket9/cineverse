import { Route, Routes } from "react-router-dom";
import NavBar from "../aside/NavBar/NavBar";

const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={"/cineverse/user/details"} />
                <Route path={"/cineverse/movie"} />
                <Route path={"/cineverse/tv"} />
            </Routes>
        </>
    );
};

export default AppRouter;
