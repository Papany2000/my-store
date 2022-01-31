import { useState } from "react";

const usePagination  = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);
  
  const lastContentIndex = page * contentPerPage;
 
  const firstContentIndex = lastContentIndex - contentPerPage;


  const changePage = (direction) => {
    setPage(() => {
      if (direction) {
        if ( page=== pageCount) {
          return page;
        }
        return page + 1;
      } else {
        if (page === 1) {
          return page;
        }
        return page - 1;
      }
    });
  };

  const setPageSAFE = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

export default usePagination