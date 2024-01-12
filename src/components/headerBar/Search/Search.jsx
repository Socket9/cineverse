import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchKeyword } from "../../../redux/search/slice";
import "./Search.styles.css";

const Search = () => {
    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    useEffect(() => {
        dispatch(addSearchKeyword(keyword));
    }, [keyword]);

    return (
        <div className="search-container">
            <i className="pi pi-search" />
            <form
                action="POST"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    autoComplete="off"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default Search;
