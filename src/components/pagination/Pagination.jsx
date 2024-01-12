/* eslint-disable react/prop-types */
import "./Pagination.styles.css";
import { useMediaContext } from "../../context/media.context";

const Pagination = ({ maxPage }) => {
    const { currentPage, setCurrentPage } = useMediaContext();

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
            <div className="pagination">
                {currentPage > MIN_PAGE && (
                    <button onClick={handleClickPrevPage}>Anterior</button>
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
                    <button onClick={handleClickNextPage}>Siguiente</button>
                )}
            </div>
        </>
    );
};

export default Pagination;
