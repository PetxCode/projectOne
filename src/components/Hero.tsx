import React from "react";
import styled from "styled-components";
// import vid from "./asset/video.mp4";
import pix from "./asset/pix.jpeg";
import pix2 from "./asset/server.jpg";
import GlobalButton from "./GlobalButton";
// import vid2 from "./asset/video.mp4";

const Hero = () => {
  const myVideo = require("./asset/video.mp4");
  return (
    <div>
      <Container>
        <Wrapper>
          <Dark />
          <Video src={myVideo} autoPlay={true} muted playsInline loop={true} />
          {/* <Image src={pix} /> */}

          <Content>
            <Title>Where heros meet</Title>
            <SubTitle>
              state-of-the-art digital experiences that upgrades life &
              business. Focus on your business, while we focus on your
              technology.
            </SubTitle>

            <GlobalButton br="jk" bg="hh" tt="b" text="Get Started" />
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Button = styled.div``;

const SubTitle = styled.div`
  margin: 10px 0;
  font-size: 20px;
  padding: 0;
  font-weight: 100;
  width: 80%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 37px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Dark = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  /* background-color: black; */
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  color: white;
  object-fit: cover;
  position: absolute;
  top: 0;
  /* z-index: -1; */
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  color: white;
  object-fit: cover;
  position: absolute;
  top: 0;
  /* z-index: -1; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: black; */
  /* color: white; */
  color: black;
`;
