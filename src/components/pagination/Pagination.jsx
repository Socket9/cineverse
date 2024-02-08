/* eslint-disable react/prop-types */
import "./Pagination.styles.css";
import { useMediaContext } from "../../hooks/media/useMediaContext";
import { useThemeContext } from "../../hooks/theme/useThemeContext";

const Pagination = ({ maxPage }) => {
    const { currentPage, setCurrentPage } = useMediaContext();
    const { isLightMode } = useThemeContext();

    const MIN_PAGE = 1;

    const handleClickPrevPage = () => {
        if (currentPage <= MIN_PAGE) return;
        setCurrentPage(currentPage - 1);
    };

    const handleClickNextPage = () => {
        if (currentPage >= maxPage) return;
        setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <div className="pagination" data-theme={isLightMode ? 'light' : 'dark'}>
                {currentPage > MIN_PAGE && (
                    <button onClick={handleClickPrevPage}>Prev</button>
                )}
                <div className="pages">
                    {currentPage > MIN_PAGE && (
                        <span className="prev">{currentPage - 1}</span>
                    )}
                    <span className="current">{currentPage}</span>
                    {currentPage < maxPage && (
                        <span className="next">{currentPage + 1}</span>
                    )}
                </div>
                {currentPage < maxPage && (
                    <button onClick={handleClickNextPage}>Next</button>
                )}
            </div>
        </>
    );
};

export default Pagination;
