import { Image, Row } from "react-bootstrap";
import { styled } from "styled-components";

export const StyledHomePage = styled(Row).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  margin-top: 25%;
  z-index: 999;
`;

export const CoinImageContainer = styled.div.attrs(() => ({}))`
  position: absolute;
  top: 35%;
  left: 35%;
  height: 30%;
  width: 30%;
`;

export const CoinImage = styled(Image).attrs((props) => ({
  isDarkMode: props.isDarkMode,
  width: props.width,
  top: props.top,
  left: props.left,
  absolute: props.absolute,
}))`
  background: ${(props) => (props.isDarkMode ? `#f8f9fa` : `white`)};
  width: auto;
  max-height: ${(props) => props.width}px;
  padding: 0.2rem;
  border: 4px solid #eee;
  box-shadow: ${(props) =>
    props.absolute && "10px 10px 15px 0px rgba(0, 0, 0, 0.75)"};
  position: ${(props) => props.absolute && "absolute"};
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
`;
