import styled, { keyframes } from "styled-components";
import Phone from "../Phone";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 60px;
    flex-direction: column;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    padding-top: 56px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 454px;
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 32px;
  }
`;

const titleIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-150%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const TextTitle = styled.h1`
  font-weight: var(--font-weight-medium);
  font-size: ${40 / 16}rem;
  color: var(--color-very-dark-desat-violet);
  animation: 0.7s ${titleIn} ease-in-out forwards;
`;

const descIn = keyframes`
  0% {
    transform: translateY(150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const TextDesc = styled.span`
  color: var(--color-dark-gray-violet);
  font-weight: var(--font-weight-regular);
  animation: 0.7s ${descIn} ease-in-out forwards;
  animation-delay: 3.5s;
  opacity: 0;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

function MainContent() {
  return (
    <Wrapper>
      <Phone />

      <TextWrapper>
        <TextTitle>Simple booking</TextTitle>
        <TextDesc>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </TextDesc>
      </TextWrapper>
    </Wrapper>
  );
}

export default MainContent;
