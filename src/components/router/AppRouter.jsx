import { Route, Routes } from "react-router-dom";
import NavBar from "../aside/NavBar/NavBar";
import { routes } from "./routes";

const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={routes.publicas.USER} />
                <Route path={routes.publicas.MOVIES} />
                <Route path={routes.publicas.TVSHOWS} />
            </Routes>
        </>
    );
};

export default AppRouter;
