import { CoinPaginationList } from "./CoinPaginationStyles";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { RootContext } from "../../layouts/RootLayout";

export default function CoinPagination({ range, setPage, page }) {
  const { isDarkMode } = useContext(RootContext);

  const pageNumber = page;
  const totalPages = range.length;
  const outerPagesLimit = 4;
  const innerPagesLimit = 1;

  return (
    <CoinPaginationList
      size="sm"
      className="justify-content-center"
      $isDarkMode={isDarkMode}
    >
      <Pagination.First onClick={() => setPage(1)} />
      <Pagination.Prev
        disabled={pageNumber === 1}
        onClick={() => setPage(pageNumber - 1)}
      />

      {pageNumber > 0 && [
        range.slice(0, innerPagesLimit).map((item, index) => {
          return (
            item < pageNumber - outerPagesLimit && (
              <Pagination.Item
                key={index}
                onClick={() => setPage(item)}
                active={item === page}
              >
                {item}
              </Pagination.Item>
            )
          );
        }),
        innerPagesLimit + 1 < pageNumber - outerPagesLimit && (
          <Pagination.Item disabled>...</Pagination.Item>
        ),
        range
          .slice(pageNumber - outerPagesLimit, pageNumber - 1)
          .map((item, index) => {
            return (
              item > 0 && (
                <Pagination.Item
                  key={index}
                  onClick={() => setPage(item)}
                  active={item === page}
                >
                  {item}
                </Pagination.Item>
              )
            );
          }),
      ]}

      <Pagination.Item active>{page}</Pagination.Item>

      {pageNumber < totalPages + 1 && [
        range
          .slice(pageNumber, pageNumber + outerPagesLimit)
          .map((item, index) => {
            return (
              item <= totalPages && (
                <Pagination.Item
                  key={index}
                  onClick={() => setPage(item)}
                  active={item === page}
                >
                  {item}
                </Pagination.Item>
              )
            );
          }),
        totalPages - innerPagesLimit > pageNumber + outerPagesLimit && (
          <Pagination.Item disabled>...</Pagination.Item>
        ),
        range
          .slice(totalPages - innerPagesLimit, totalPages + 1)
          .map((item, index) => {
            return (
              item > pageNumber + outerPagesLimit && (
                <Pagination.Item
                  key={index}
                  onClick={() => setPage(item)}
                  active={item === page}
                >
                  {item}
                </Pagination.Item>
              )
            );
          }),
      ]}

      <Pagination.Next
        disabled={pageNumber === totalPages}
        onClick={() => setPage(pageNumber + 1)}
      />
      <Pagination.Last onClick={() => setPage(totalPages)} />
    </CoinPaginationList>
  );
}

CoinPagination.propTypes = {
  range: PropTypes.array,
  setPage: PropTypes.func,
  page: PropTypes.number,
};
