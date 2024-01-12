import { useSelector } from "react-redux";
import "./UserDetails.styles.css";

const UserDetails = () => {
    const userDetails = useSelector((store) => store.user.userProfile);

    return (
        <>
            {userDetails && (
                <section className="user-details-section">
                    <img src={userDetails.picture} alt="" />
                    <div className="info">
                        <h3 className="name">{userDetails.name}</h3>
                        <p className="email">{userDetails.email}</p>
                    </div>
                </section>
            )}
        </>
    );
};

export default UserDetails;
