import styled from "styled-components";
import SecondContent from "../components/SecondContent";
import ScreenShot1 from "../assets/secondpage/screenshot1.png";
import ScreenShot2 from "../assets/secondpage/screenshot2.png";
import ScreenShot3 from "../assets/secondpage/screenshot3.png";
import circle from "../assets/secondpage/circle.png";
import { useState, useEffect } from "react";

const Second = () => {
  const [currentContent, setCurrentContent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => {
        if (prevContent === 3) {
          return 1;
        }
        return prevContent + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fontSize = {
    smallFont: "16px",
    bigFont: "72px",
  };

  return (
    <Container>
      <SlideContent
        style={{
          transform: `translateX(${-(currentContent - 1) * 100}%)`,
        }}
      >
        <Slide key={1} $active={currentContent === 1 ? 'true' : 'false'}>
          <SecondContent
            image={ScreenShot1}
            textImage={circle}
            fontSize={fontSize}
            textMarginTop={"-20px"}
            textMarginLeft={""}
            textMarginRight={""}
            firstLine={"내가 먹고 싶은 전통주를"}
            secondStartLine={""}
            secondImgText={"근처"}
            secondLastLine={"에서"}
            thirdLine={"찾아보세요."}
            fourLine={"이제는 생각날 때 바로 전통주점을"}
            fiveLine={"찾아볼 수 있어요."}
            circleMargin={"-0.5rem"}
            circleWidth={"8rem"}
          />
        </Slide>
        <Slide key={2} $active={currentContent === 2 ? 'true' : 'false'}>
          <SecondContent
            image={ScreenShot2}
            textImage={circle}
            fontSize={fontSize}
            textMarginTop={"-20px"}
            textMarginLeft={"0"}
            textMarginRight={"20px"}
            firstLine={"전통주의 종류가 궁금해!"}
            secondStartLine={"어떤"}
            secondImgText={"전통주"}
            secondLastLine={"가"}
            thirdLine={"있을까?"}
            fourLine={"전통주의 종류를 한 눈에 볼 수 있어요."}
            fiveLine={""}
            circleMargin={"9.5rem"}
            circleWidth={"10rem"}
          />
        </Slide>
        <Slide key={3} $active={currentContent === 3 ? 'true' : 'false'}>
          <SecondContent
            image={ScreenShot3}
            textImage={circle}
            fontSize={fontSize}
            textMarginTop={"-20px"}
            textMarginLeft={"20px"}
            textMarginRight={""}
            firstLine={"내 주변 주막을 찾고 싶다면!"}
            secondStartLine={""}
            secondImgText={"근처"}
            secondLastLine={"전통주점"}
            thirdLine={"어디있지?"}
            fourLine={"내 주변 전통주점을 찾고 싶을 때도"}
            fiveLine={"바로 확인할 수 있어요."}
            circleMargin={"-0.5rem"}
            circleWidth={"8rem"}
          />
        </Slide>
      </SlideContent>
    </Container>
  );
};

export default Second;

const Container = styled.div`
  background-color: #ff8224;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SlideContent = styled.div`
  width: 100%;
  display: flex;
  transition: transform 2s ease-in-out;
  
  @media (max-width: 680px) {
    width: 200%;
  }
  @media (max-width: 400px) {
    width: 230%;
  }
  @media (max-width: 350px) {
    width: 250%;
  }
`;

const Slide = styled.div`
  flex: 0 0 100%;
  transition: opacity 3s ease-in-out;
  opacity: ${({ $active }) => ($active === 'true' ? 1 : 0)};
  visibility: ${({ $active }) => ($active === 'true' ? 'visible' : 'hidden')};
  pointer-events: ${({ $active }) => ($active === 'true' ? 'auto' : 'none')};
  transition: opacity 1s ease-in-out, visibility 0s 1s;
`;