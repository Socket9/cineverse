import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useThemeContext } from "../../../hooks/theme/useThemeContext";
import "./NavBar.styles.css";

const NavBar = () => {
    const { isLightMode } = useThemeContext();
    const userDetails = useSelector((store) => store.user.userProfile);

    return (
        <div
            className="nav-container"
            data-theme={isLightMode ? "light" : "dark"}
        >
            {userDetails && (
                <div className="nav-section">
                    <div className="title-section">
                        <span>User</span>
                        <hr />
                    </div>
                    <div className="links">
                        <NavLink
                            to={"/cineverse/user/details"}
                            className="nav-link"
                        >
                            <i className="pi pi-sign-in" />
                            <p>Details</p>
                        </NavLink>
                        <NavLink
                            to={"/cineverse/favorites"}
                            className="nav-link"
                        >
                            <i className="pi pi-clone" />
                            <p>My favorites</p>
                        </NavLink>
                    </div>
                </div>
            )}

            <div className="nav-section">
                <div className="title-section">
                    <span>Menu</span>
                    <hr />
                </div>
                <div className="links">
                    <NavLink
                        to={"/cineverse/movie"}
                        className="nav-link"
                    >
                        <i className="pi pi-clone" />
                        <p>Movies</p>
                    </NavLink>
                    <NavLink
                        to={"/cineverse/tv"}
                        className="nav-link"
                    >
                        <i className="pi pi-desktop" />
                        <p>TV Shows</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
