import { useEffect, useState } from "react";

export const useUserTokenFetch = () => {
    const [profile, setProfile] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: "application/json",
                    },
                }
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setProfile(data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                });
        }
    }, [user]);
    return { user, setUser, profile, setProfile };
};
