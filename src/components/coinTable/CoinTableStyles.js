import { Table } from "react-bootstrap";
import styled from "styled-components";
import { globalVar } from "../../assets/styles/GlobalVar";

export const StyledTable = styled(Table).attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  text-align: "center";
  color: ${(props) => (props.isDarkMode ? globalVar.colorGrey : "black")};
`;
