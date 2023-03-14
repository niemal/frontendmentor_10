import styled, { keyframes } from "styled-components";

const init = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 260px;
  min-height: 554px;
  border-radius: 36px;
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 30px var(--color-dark-gray-violet);
  padding: 10px;
  animation: 0.3s ${init} ease-in-out forwards;
`;

const TopBox = styled.div`
  padding: 20px;
  padding-top: 32px;
  padding-bottom: 16px;
  background: linear-gradient(
    60deg,
    var(--color-light-violet) 60%,
    var(--color-light-magenta) 100%
  );
  border-radius: 28px 28px 8px 8px;
  display: flex;
  gap: 8px;
  position: relative;
`;

const TopBoxDecor = styled.div`
  width: 140px;
  height: 30px;
  position: absolute;
  left: 48px;
  top: -10px;
  background-color: var(--color-white);
  border-radius: 24px;
`;

const BackTick = styled.span`
  font-weight: var(--font-weight-bold);
  font-size: ${14 / 16}rem;
  color: var(--color-white);
  margin-top: 4px;
`;

const DotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: auto;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 2px;
  height: 2px;
  background-color: var(--color-white);
`;

const Avatar = styled.img`
  border: 2px solid var(--color-white);
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  font-size: ${12 / 16}rem;
`;

const Status = styled.span`
  font-weight: var(--font-weight-regular);
  font-size: ${10 / 16}rem;
  color: var(--color-white);
`;

const Rest = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-light-gray-violet);
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  border-radius: 0px 0px 28px 28px;
  overflow: hidden;
`;

const leftAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const LeftBox = styled.div`
  background-color: var(--color-dark-gray-violet);
  align-self: start;
  padding: 10px;
  line-height: ${16 / 16}rem;
  font-size: ${10 / 16}rem;
  font-weight: var(--font-weight-regular);
  width: 155px;
  border-radius: 16px 16px 16px 8px;
  transition: all 0.3s ease-in-out;

  animation: 0.4s ${leftAppear} ease-in-out forwards;
  animation-delay: ${(p) => p.delay}s;
  opacity: 0;
`;

const RightBox = styled(LeftBox)`
  background-color: var(--color-white);
  box-shadow: 0px 2px 7px var(--color-dark-gray-violet);
  align-self: end;
  border-radius: 16px 16px 8px 16px;
  width: max-content;
  max-width: 155px;
`;

const appearDogs = keyframes`
  0% {
    width: 0px;
    opacity: 0;
    transform: scale(0);
  }
  99% {
    width: 180px;
  }
  100% {
    width: auto;
    opacity: 1;
    transform: scale(1);
  }
`;

const DogRow = styled.div`
  align-self: end;
  display: flex;
  gap: 8px;
  margin-top: 8px;

  animation: 0.3s ${appearDogs} ease-in-out forwards;
  animation-delay: ${(p) => p.delay}s;
  opacity: 0;
`;

const DogImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 16px;
`;

const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(
    60deg,
    var(--color-light-magenta) 5%,
    var(--color-light-violet) 100%
  );
  padding: 10px 10px;
  border-radius: 16px 16px 16px 8px;
  width: 170px;
  opacity: 0;
  animation: 0.3s ${leftAppear} ease-in-out forwards;
  animation-delay: ${(p) => p.delay}s;
`;

const TickBox = styled.div`
  width: 14px;
  height: 14px;
  border: 1px solid var(--color-white);
  border-radius: 50%;
  opacity: 0.5;
`;

const EntryDesc = styled.span`
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  font-size: ${10 / 16}rem;
`;

const EntryPrice = styled.span`
  font-weight: var(--font-weight-bold);
  font-size: ${14 / 16}rem;
  color: var(--color-white);
  margin-left: auto;
  margin-right: 8px;
`;

const InputWrapper = styled.div`
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const InputPlaceholder = styled.span`
  color: var(--color-gray-blue);
  font-size: ${12 / 16}rem;
  margin-left: 12px;
`;

const RadioButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 8px;
  display: grid;
  place-content: center;
  background-color: var(--color-very-dark-desat-violet);
  margin-left: auto;
`;

const RadioButtonText = styled.span`
  color: var(--color-white);
  font-size: ${16 / 16}rem;
  font-weight: var(--font-weight-medium);
`;

function Phone() {
  return (
    <Wrapper>
      <TopBox>
        <TopBoxDecor />
        <BackTick>&#60;</BackTick>
        <Avatar src={"/frontendmentor_10/avatar.jpg"} alt={"avatar icon"} />
        <DetailsWrapper>
          <Name>Samuel Green</Name>
          <Status>Available to Walk</Status>
        </DetailsWrapper>
        <DotsWrapper>
          <Dot />
          <Dot />
          <Dot />
        </DotsWrapper>
      </TopBox>
      <Rest>
        <LeftBox delay={0.7}>
          That sounds great. I'd be happy with that.
        </LeftBox>
        <DogRow delay={1.7}>
          <DogImage
            src={"/frontendmentor_10/dog-image-1.jpg"}
            alt={"dog image 1"}
          />
          <DogImage
            src={"/frontendmentor_10/dog-image-2.jpg"}
            alt={"dog image 2"}
          />
          <DogImage
            src={"/frontendmentor_10/dog-image-3.jpg"}
            alt={"dog image 3"}
          />
        </DogRow>
        <RightBox delay={2}>
          Here are a few pictures. She's a happy girl!
        </RightBox>
        <RightBox delay={2.4}>Can you make it?</RightBox>
        <LeftBox delay={2.8}>
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </LeftBox>
        <OptionBox delay={3.3}>
          <TickBox />
          <EntryDesc>10 minute walk</EntryDesc>
          <EntryPrice>$29</EntryPrice>
        </OptionBox>
        <OptionBox delay={3.5}>
          <TickBox />
          <EntryDesc>1 hour walk</EntryDesc>
          <EntryPrice>$49</EntryPrice>
        </OptionBox>

        <InputWrapper>
          <InputPlaceholder>Type a message...</InputPlaceholder>
          <RadioButton>
            <RadioButtonText>&#62;</RadioButtonText>
          </RadioButton>
        </InputWrapper>
      </Rest>
    </Wrapper>
  );
}

export default Phone;
