import { styled } from "styled-components";
import { Breadcrumb } from "react-bootstrap";

export const StyledBreadcrumb = styled(Breadcrumb).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  .breadcrumb-item {
    a {
      text-decoration: none;
      color: ${(props) =>
        !props.isDarkMode ? `#212529 !important` : `#f8f9fa !important`};

      &:hover {
        color: ${(props) =>
          !props.isDarkMode
            ? `hsl(200, 100%, 50%) !important`
            : `rgba(255, 255, 255, .6) !important`};
      }
    }
  }
`;
