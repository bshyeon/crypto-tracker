import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  background-color: teal;
  color: white;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: teal;
`;

function App() {
  return (
    <Father>
      <Btn>button</Btn>
      <Btn as="a" herf="/">
        anchor
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
