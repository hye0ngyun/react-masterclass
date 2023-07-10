import styled from "styled-components";

const Container = styled.main`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor || "orange"};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
function App() {
  return (
    <Container>
      <Box />
      <Box bgColor="teal" />
      <Circle bgColor="blue" />
    </Container>
  );
}

export default App;
