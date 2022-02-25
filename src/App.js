import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>👱‍♂️</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
