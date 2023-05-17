import { Button } from "react-bootstrap";
import { styled } from "styled-components";

export const ChartButton = styled(Button).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  background-color: ${(props) => (!props.isDarkMode ? "white" : "black")};
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
