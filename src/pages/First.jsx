import styled from "styled-components";
import MainIntro from "../components/MainIntro";
import Header from "../components/Header";

const First = () => {
  return (
    <Container>
      <MainIntroWrapper>
        <MainIntro />
      </MainIntroWrapper>
    </Container>
  );
};

export default First;

const Container = styled.div`
  background-color: #ffecdf;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const MainIntroWrapper = styled.div`
  width: 50%;
  height: 80vh;
  margin: 8px auto;
`;
