import React from 'react';
import "./Pagination.css"
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button className='button' onClick={() => handlePageClick(1)}>First</button>
      )}
      {currentPage < totalPages && (
        <button className='button' onClick={() => handlePageClick(currentPage + 1)}>Next</button>
      )}
      {currentPage < totalPages && (
        <button className='button' onClick={() => handlePageClick(totalPages)}>Last</button>
      )}
    </div>
  );
};

export default Pagination;
