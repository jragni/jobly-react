import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CompanyCard from "./CompanyCard";

/** CompanyList
 * The list of companies containing company cards
 *
 * Props:
 *      -companies --- List of objects containing Company information
 *                     {name, description, handle,...}
 * State:
 *      - currentPage {Number} : Number of the current page for pagination
 *
 * Companies -> CompanyList -> CompanyCard
 */

function CompanyList({ companies }) {
  const [currentPage, setCurrentPage] = useState(0);

  /* Pagination for company cards */
  const cardsPerPage = 10;
  const pageCount = Math.ceil(companies.length / cardsPerPage);
  // current index of the companies array
  const offset = currentPage * cardsPerPage;
  const currentPageCards = companies.slice(offset, offset + cardsPerPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }
  /* END Pagination */

  return (
    <div className="CompanyList">
      {currentPageCards.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
      <div className="d-flex justify-content-center">
        <ReactPaginate
          className="mx-auto"
          forcePage={currentPage}
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          onPageChange={handlePageClick}
          containerClassName={"pagination pagination-md"}
          activeClassName={"page-item active"}
          activeLinkClassName={"page-link"}
          disabledClassName={"page-item disabled"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
        />
      </div>
    </div>
  );
}

export default CompanyList;
