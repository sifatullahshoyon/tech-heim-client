import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 3;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        className="text-gray-500 hover:text-black"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        <span className="text-2xl">{"<"}</span>
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`text-2xl px-4 ${
            currentPage === index + 1
              ? "text-blue-500 underline"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <span className="text-gray-500"> ... </span>

      <button
        className="text-gray-500 hover:text-black"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        <span className="text-2xl">{">"}</span>
      </button>
    </div>
  );
};

export default Pagination;
