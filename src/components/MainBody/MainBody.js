import styled from "styled-components";
import MainContent from "../MainContent";

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
  position: relative;
  overflow: hidden;
`;

const Decor = styled.div`
  position: absolute;
  left: -256px;
  top: -60px;
  height: 75vh;
  width: 866px;
  border-radius: 5000px;
  background: linear-gradient(
    45deg,
    var(--color-light-magenta) 0%,
    var(--color-light-violet) 40%,
    var(--color-light-magenta) 100%
  );
  transform: rotate(90deg);
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
