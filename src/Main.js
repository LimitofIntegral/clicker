import styled from "styled-components";
//import background from "./image/background.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  opacity: 0.9;
  background-image: url("/background.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  background-color: #8c8c8c;
`;

function main() {
  return (
    <Container>
      <Wrapper>메인화면</Wrapper>
    </Container>
  );
}

export default main;
