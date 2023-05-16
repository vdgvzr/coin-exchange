import { styled } from "styled-components";

export const Tr = styled.tr.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  background-color: none;

  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
    transition: background-color 0.1s ease-in-out;
  }
`;

export const Td = styled.td.attrs(() => ({}))`
  vertical-align: middle;
`;
