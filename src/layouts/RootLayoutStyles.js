import styled from "styled-components";
import { globalVar } from "../assets/styles/GlobalVar";

export const Root = styled.div.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  background-color: ${(props) => (props.isDarkMode ? `#121212` : `white`)};
  color: ${(props) => (props.isDarkMode ? globalVar.colorGrey : `black`)};
  padding-bottom: "3rem";
  position: "relative";
  min-height: "100vh";
`;
