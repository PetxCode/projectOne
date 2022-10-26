import React from "react";
import styled from "styled-components";

interface BUT {
  text: string;
  br: string;
  bg: string;
  tt: string;
}

const GlobalButton: React.FC<BUT> = ({ text, br, bg, tt }) => {
  return (
    <Container br={br} bg={bg} tt={tt}>
      {text}
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div<{ br: string; bg: string; tt: string }>`
  background-color: orange;
  padding: 15px 30px;
  border-radius: ${({ br }) => (br ? "30px" : "3px")};
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: ${({ tt }) => (tt ? "scale(1.05)" : "scale(0.95)")};
    background-color: ${({ bg }) => (bg ? "red" : "white")};
  }
`;
