import React from "react";
import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
const Pagination = ({ currentPage, totalPage, setCurrentPage }) => {
  return (
    <div className="pagination">
      <span>
        {currentPage}/{totalPage}
      </span>
      <div className="paginationBtn">
        <button
          disabled={currentPage == 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <img src={leftArrow} alt="" />
        </button>
        <button
          disabled={currentPage == totalPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <img src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
