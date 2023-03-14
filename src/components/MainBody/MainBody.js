import styled, { keyframes } from "styled-components";
import MainContent from "../MainContent";
import { QUERIES } from "../constants";

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
  position: relative;
  overflow: hidden;
`;

const decorIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(90deg);
  }
`;

const decorInTabletSmaller = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
`;

const Decor = styled.div`
  position: absolute;
  left: -265px;
  top: -150px;
  height: 75vh;
  width: 60%;
  border-radius: 5000px;
  background: linear-gradient(
    -20deg,
    var(--color-light-magenta) 0%,
    var(--color-light-violet) 10%,
    var(--color-light-magenta) 100%
  );

  animation: 1s ${decorIn} ease-in-out forwards;
  opacity: 0;
  animation-delay: 0.3s;

  @media ${QUERIES.tabletAndSmaller} {
    top: -220px;
    left: -90px;
    animation: 1s ${decorInTabletSmaller} ease-in-out forwards;
  }

  @media ${QUERIES.phoneAndSmaller} {
    left: -120px;
    top: -200px;
    width: 80%;
    height: 90vh;
  }
`;

function MainBody() {
  return (
    <Wrapper role={"main"}>
      <Decor />
      <MainContent />
    </Wrapper>
  );
}

export default MainBody;
