import styled from "styled-components";
import Phone from "../Phone";

const Wrapper = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 454px;
`;

const TextTitle = styled.h1`
  font-weight: var(--font-weight-medium);
  font-size: ${40 / 16}rem;
  color: var(--color-very-dark-desat-violet);
`;

const TextDesc = styled.span`
  color: var(--color-dark-gray-violet);
  font-weight: var(--font-weight-regular);
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
