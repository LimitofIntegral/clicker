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
  width: 1200px;
  height: 800px;
  margin-top: 8vh;
  background-color: #d1d3c4;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 1000px;
  margin-top: 20px;
`;

function Main() {
  return (
    <Container>
      <Wrapper>
        메인화면
        <Link to="/shop">
          <Button>상점</Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Main;
