import React from "react";
import styled from "styled-components";

const CardPros = () => {
  return (
    <div>
      <Container bg="">
        <Wrapper fd="">
          <Content>Content</Content>
          <Image />
        </Wrapper>
      </Container>
    </div>
  );
};

export default CardPros;

const Image = styled.div`
  width: 300px;
  height: 400px;
  background-color: orange;

  margin-left: 0px 20px;
`;

const Content = styled.div`
  width: 300px;
  height: 400px;
  background-color: red;
  margin: 0px 20px;
`;

const Wrapper = styled.div<{ fd: string }>`
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ fd }) => (fd ? "row" : "row-reverse")};
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => (bg ? "black" : "white")};
  align-items: center;
`;
