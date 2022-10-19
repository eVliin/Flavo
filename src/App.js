import Header from "./components/header.js";
import Main_ from "./components/main.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
    }
    *::-webkit-scrollbar-button {
    display: none;
    }
    *::-webkit-scrollbar-track {
      display: none;
    }
    *::-webkit-scrollbar-track-piece {
      display: none;
    }
    *::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    }
    *::-webkit-scrollbar-corner {
      display: none;
    }
`;

const Div = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: #f1b641;
  height: 100vh;
  padding-top: 5vw;
  overflow: scroll;
`;

export default function App() {
  return (
    <Div>
      <Header />
      <Main_ />
      <GlobalStyle />
    </Div>
  );
}
