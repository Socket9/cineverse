import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId="223565928132-5mld0of9p4c7h6o5q2seduhl4e2r1fdn.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);
