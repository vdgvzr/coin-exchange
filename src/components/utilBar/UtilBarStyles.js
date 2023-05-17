import { styled } from "styled-components";

export const GlobalValue = styled.div.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  font-size: small;

  .globalvalue_name {
    font-weight: 300;
  }

  .globalvalue_value {
    color: ${(props) =>
      props.isDarkMode ? `lightgrey` : `hsl(200, 100%, 50%)`};

    .globalvalue_change {
      &-red {
        color: red;
      }

      &-green {
        color: green;
      }
    }
  }
`;
