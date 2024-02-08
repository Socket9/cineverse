/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
    const userDetails = useSelector((store) => store.user.userProfile);

    if (!userDetails) {
        return <Navigate to="/cineverse/movie" />;
    }

    return component;
};

export default PrivateRoute;
