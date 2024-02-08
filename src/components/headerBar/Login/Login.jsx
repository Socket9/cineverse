import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useUserTokenFetch } from "../../../hooks/user/useUserTokenFetch";
import { useUserLogin } from "../../../hooks/user/useUserLogin";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { useThemeContext } from "../../../hooks/theme/useThemeContext";
import "./Login.styles.css";

const Login = () => {
    const { isLightMode } = useThemeContext();
    const { user, setUser, profile, setProfile } = useUserTokenFetch();
    const [showModal, setShowModal] = useState(false);
    const toast = useRef(null);

    useUserLogin(profile);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            toast.current.show({
                severity: "success",
                summary: `Welcome back!`,
            });
        },
        onError: (err) => console.log("Login Failed:", err),
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
        setShowModal(false);
    };

    const handleClick = () => {
        setShowModal(!showModal);
    };

    return (
        <div
            className="auth-container"
            data-theme={isLightMode ? "light" : "dark"}
        >
            {profile && user?.access_token ? (
                <div className="user">
                    <button className="avatar" onClick={handleClick}>
                        <img src={profile.picture} alt="user image" />
                    </button>
                    {showModal && (
                        <div className="modal">
                            <span>{profile.email}</span>
                            <img src={profile.picture} alt="user image" />
                            <p>Hi, {profile.name.split(" ", 1)}!</p>
                            <button onClick={logOut}>Log out</button>
                        </div>
                    )}
                </div>
            ) : (
                <button className="log-in-btn" onClick={() => login()}>
                    Sing in with Google
                </button>
            )}
            <Toast
                className="toast-login"
                ref={toast}
                position="bottom-right"
                autohideduration={3000}
            />
        </div>
    );
};

export default Login;
