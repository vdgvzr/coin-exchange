import styled from "styled-components";
import { globalVar } from "../assets/styles/GlobalVar";

export const Root = styled.div.attrs((props) => ({
  isDarkMode: props.isDarkMode,
}))`
  background-color: ${(props) => (props.isDarkMode ? `#121212` : `white`)};
  color: ${(props) => (props.isDarkMode ? globalVar.colorGrey : `black`)};
  padding-bottom: 3rem;
  position: relative;
  min-height: 100vh;

  input,
  select {
    background-color: ${(props) => (props.isDarkMode ? `#121212` : `white`)};
    color: ${(props) => (props.isDarkMode ? globalVar.colorGrey : `black`)};

    &:focus {
      background-color: ${(props) => (props.isDarkMode ? `#121212` : `white`)};
      color: ${(props) => (props.isDarkMode ? globalVar.colorGrey : `black`)};
    }
  }

  a {
    color: ${(props) => (props.isDarkMode ? globalVar.colorGrey : `black`)};
  }

  .loading {
    filter: blur(5px);
    pointer-events: none;
  }

  .loading-spinner::after {
    content: "";
    z-index: 999;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    border: 20px solid transparent;
    border-bottom-color: hsl(200, 100%, 50%);
    animation: spin infinite 1.25s ease-in;
    mix-blend-mode: multiply;
  }

  .loading-spinner::before {
    content: "";
    z-index: 999;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    border: 20px solid transparent;
    border-top-color: hsl(200, 100%, 50%);
    animation: spin infinite 2s ease-in-out;
    mix-blend-mode: multiply;
  }

  @keyframes spin {
    to {
      rotate: 360deg;
    }
  }
`;
