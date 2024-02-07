import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile, logOutUser } from "@/redux/users/slice";

export const useUserLogin = (profile) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (profile) {
            dispatch(setUserProfile(profile));
        }
        if (!profile) {
            dispatch(logOutUser());
        }
    }, [profile]);
};
