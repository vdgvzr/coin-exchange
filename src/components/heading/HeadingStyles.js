import { styled } from "styled-components";
import { globalVar } from "../../assets/styles/GlobalVar";

export const H1 = styled.h1.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  color: ${(props) => (props.isDarkMode ? globalVar.colorWhite : "black")};
  margin-bottom: 2rem;
`;

export const H2 = styled.h2.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  color: ${(props) => (props.isDarkMode ? globalVar.colorWhite : "black")};
  margin-bottom: 2rem;
`;

export const H3 = styled.h3.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  color: ${(props) => (props.isDarkMode ? globalVar.colorWhite : "black")};
  margin-bottom: 2rem;
`;

export const H4 = styled.h4.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  color: ${(props) => (props.isDarkMode ? globalVar.colorWhite : "black")};
  margin-bottom: 2rem;
`;

export const H5 = styled.h5.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  color: ${(props) => (props.isDarkMode ? globalVar.colorWhite : "black")};
  margin-bottom: 2rem;
`;

export const H6 = styled.h6.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  color: ${(props) => (props.isDarkMode ? globalVar.colorWhite : "black")};
  margin-bottom: 2rem;
`;
