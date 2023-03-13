import styled from "styled-components";

const Wrapper = styled.div`
  width: 260px;
  height: 484px;
  border-radius: 36px;
  background-color: var(--color-white);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
`;

const TopBox = styled.div`
  padding: 12px;
  padding-top: 48px;
  background: linear-gradient(
    60deg,
    var(--color-light-violet) 0%,
    var(--color-light-magenta) 40%,
    var(--color-light-violet) 100%
  );
  border-radius: 28px 28px 8px 8px;
  display: flex;
  gap: 8px;
`;

const BackTick = styled.span`
  font-weight: var(--font-weight-bold);
  font-size: ${14 / 16}rem;
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
  gap: 8px;
  border-radius: 0px 0px 28px 28px;
`;

function Phone() {
  return (
    <Wrapper>
      <TopBox>
        <BackTick>&#60;</BackTick>
        <Avatar src={"/frontendmentor_10/avatar.jpg"} alt={"avatar icon"} />
        <DetailsWrapper>
          <Name>Samuel Green</Name>
          <Status>Available to Walk</Status>
        </DetailsWrapper>
      </TopBox>
      <Rest></Rest>
    </Wrapper>
  );
}

export default Phone;
