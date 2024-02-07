import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useThemeContext } from "../context/theme.context.jsx";
import { MediaContextProvider } from "../context/media.context";
import MediaGrid from "../components/main/MediaGrid";
import Aside from "../components/aside/Aside";
import HeaderBar from "../components/headerBar/HeaderBar";
import Details from "../components/main/Details/Details";
import UserDetails from "../components/user/UserDetails";
import Favorites from "../components/user/Favorites/Favorites";
import PrivateRoute from "../components/Router/PrivateRoute";
import "./MainContainer.styles.css";
import "primeicons/primeicons.css";

const MainContainer = () => {
    const { isLightMode } = useThemeContext();

    return (
        <BrowserRouter>
            <main
                className="main"
                data-theme={isLightMode ? 'light' : 'dark'}
            >
                <Aside />
                <section className="content-container">
                    <HeaderBar />
                    <MediaContextProvider>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Navigate to="/cineverse/movie" />
                                }
                            />
                            <Route
                                path="/cineverse"
                                element={
                                    <Navigate to="/cineverse/movie" />
                                }
                            />
                            <Route
                                path="/cineverse/favorites"
                                element={
                                    <PrivateRoute component={<Favorites />} />
                                }
                            />
                            <Route
                                path="/cineverse/:type"
                                element={<MediaGrid />}
                            />
                            <Route
                                path="/cineverse/user/details"
                                element={
                                    <PrivateRoute component={<UserDetails />} />
                                }
                            />
                            <Route
                                path="/cineverse/detail/:type/:movieId"
                                element={<Details />}
                            />
                        </Routes>
                    </MediaContextProvider>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default MainContainer;
