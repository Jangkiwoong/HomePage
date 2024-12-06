import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import First from "./pages/First";
import Second from "./pages/Second";

function App() {
  return (
    <MainContainer>
      <Header />
      <First />
      <Second />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  font-family: 'jua';
`
