import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import './App.css'

const Home = styled.div`
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
  height: 100vh;
`;

const Main = styled.main`
  padding: 3rem;
  width: 100%;
`;

function App() {
  return (
    <Home>
      <Header />

      <Main></Main>
    </Home>
  );
}

export default App;
