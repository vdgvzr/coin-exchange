import { styled } from "styled-components";
import { Pagination } from "react-bootstrap";

export const CoinPaginationList = styled(Pagination).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  list-style-type: none;
  margin-top: 2rem;

  .active {
    .page-link {
      background-color: ${(props) =>
        props.isDarkMode ? `#f8f9fa` : `#212529`};
      color: ${(props) =>
        props.isDarkMode ? `#212529 !important` : `#f8f9fa !important`};
    }
  }

  .page-link {
    background: none;
    border: none;
    color: ${(props) => (!props.isDarkMode ? `#212529` : `#f8f9fa`)};

    &:focus {
      box-shadow: none;
    }
  }

  span {
    color: ${(props) => (props.isDarkMode ? `#f8f9fa` : `#212529`)};
  }
`;
