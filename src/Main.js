import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import lv1 from "./lv1.png";
import lv2 from "./lv2.png";
import lv3 from "./lv3.png";
import lv1_d from "./lv1_d.png";
import lv2_d from "./lv2_d.png";
import lv3_d from "./lv3_d.png";
import shopBt from "./shopbt.png";
import upgradeBt from "./upgradebt.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  background-image: url("/background.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  justify-content: center;
  width: 1100px;
  height: 620px;
  margin-top: 8vh;
  background-color: #d1d3c4;
`;

const Top = styled.div`
  display: flex;
  justify-content: right;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const SButton = styled.button`
  margin-top: 20px;
  margin-right: 50px;
  width: 120px;
  border: none;
  background-color: #d1d3c4;
  cursor: pointer;
`;

const SImage = styled.img`
  width: 120px;
  height: 80px;
  &:hover {
    width: 130px;
    height: 90px;
    margin-top: -10px;
  }
`;

const UButton = styled.button`
  justify-content: center;
  margin-top: -30px;
  border: none;
  background-color: #d1d3c4;
  cursor: pointer;
`;

const UImage = styled.img`
  width: 170px;
  height: 120px;
  &:hover {
    width: 180px;
    height: 130px;
    margin-top: -10px;
  }
`;

const Cat = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: 100px;
  width: 800px;
`;

const CatImg = styled.img`
  width: 320px;
  &:hover {
    cursor: pointer;
    width: 330px;
    margin-top: -11px;
    margin-left: -10px;
  }
`;

const DesImg = styled.img`
  width: 350px;
  margin-left: 50px;
  margin-bottom: 100px;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
  font-size: 25px;
`;

function Main() {
  const [imgSrc, setImgSrc] = useState(lv1);
  const [desSrc, setDesSrc] = useState(lv1_d);
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(30);
  const [click, setClick] = useState(0);

  const upgrade = () => {
    if (exp == click) {
      if (level == 1) {
        setImgSrc(lv2);
        setDesSrc(lv2_d);
      }
      if (level == 2) {
        setImgSrc(lv3);
        setDesSrc(lv3_d);
      }
      setClick(0);
      setLevel(level + 1);
      setExp(exp * level * 2);
    } else {
      window.alert("아직 강화할 수 없어요!");
    }
  };

  const clickCount = () => {
    if (click < exp) {
      setClick(click + 1);
    } else {
      window.alert("고양이를 강화할 수 있습니다.");
    }
    console.log(level);
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <SButton>
            <Link to="/shop">
              <SImage src={shopBt}></SImage>
            </Link>
          </SButton>
        </Top>
        <Count>
          [Level {level}] exp {click} / {exp}
        </Count>

        <Cat>
          <CatImg src={imgSrc} onClick={clickCount} />
          <DesImg src={desSrc} />
        </Cat>
        <Bottom>
          <UButton onClick={upgrade}>
            <UImage src={upgradeBt}></UImage>
          </UButton>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Main;
