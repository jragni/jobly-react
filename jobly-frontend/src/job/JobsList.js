import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import JobCard from "./JobCard";

/** JobsList
 * List of job cards
 *
 * Props:
 *      jobs {Array.object}: List of jobs
 *      apply: function to submit apply
 *
 * State:
 *       -currentPage: page for pagination
 *
 * {Jobs, CompanyDetails} -> JobList -> JobCard
 */

function JobsList({ jobs}) {
  const [currentPage, setCurrentPage] = useState(0);

  /* PAGINATION for job cards */
  const cardsPerPage = 10;
  const pageCount = Math.ceil(jobs.length / cardsPerPage);
  // current index of the jobs array
  const offset = currentPage * cardsPerPage;
  const currentPageCards = jobs.slice(offset, offset + cardsPerPage);

  /** Function that handles page change for pagination use */
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 0);
  }
  /*END pagination */

  return (
    <div className="JobsList">
      {currentPageCards.map((job) => (
        <JobCard key={job.id} job={job} />
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
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
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

export default JobsList;
