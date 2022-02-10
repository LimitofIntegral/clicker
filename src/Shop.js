import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  background-image: url("/background.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 1100px;
  height: 620px;
  margin-top: 8vh;
  background-color: #d1d3c4;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin-left: 100px;
  margin-top: 20px;
`;

function Shop() {
  return (
    <Container>
      <Wrapper>
        상점
        <Link to="/">
          <Button>←</Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Shop;
