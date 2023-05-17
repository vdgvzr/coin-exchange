import { ListGroup, Row } from "react-bootstrap";
import { styled } from "styled-components";

const StyledCoinPage = styled(Row).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  .coinpage {
    &_rank {
    }

    &_name {
      padding: 1rem 0;

      img {
        height: 40px;
        margin-right: 1rem;
      }

      &_name {
        text-transform: uppercase;
        font-weight: bold;
        color: ${(props) => (props.isDarkMode ? "white" : "black")};
      }

      &_ticker {
        font-weight: lighter;
      }
    }

    &_price {
      &_price {
        font-size: 2rem;
        color: ${(props) => (props.isDarkMode ? "white" : "black")};
      }

      &_change {
        &_green {
          color: green;
        }

        &_red {
          color: red;
        }
      }
    }

    &_coininfo {
      &_value {
        color: ${(props) => (props.isDarkMode ? "white" : "black")};
      }
    }
  }
`;

const StyledListGroup = styled(ListGroup).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  .list-group-item {
    background: none;
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
  }
`;

export { StyledCoinPage, StyledListGroup };
