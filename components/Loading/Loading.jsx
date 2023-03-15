import React from "react";
import styled from "styled-components";
import { IM_Fell_Double_Pica } from "next/dist/compiled/@next/font/dist/google";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 21.1rem;
`;
const ImageBox = styled.div`
  width: 100%;
  flex: 1;
  height: 100%;
  background-color: ${(props) => props.theme.colorAccent};
  object-fit: cover;
  border-radius: 10px;
`;
const TitleBox = styled.div`
  width: 80%;
  height: 1.6rem;
  background-color: ${(props) => props.theme.colorAccent};
  border-radius: 2px;
`;
const Viewsbox = styled.div`
  width: 20%;
  height: 0.8rem;
  background-color: ${(props) => props.theme.colorAccent};
  border-radius: 2px;
`;
const Loading = () => {
  return (
    <Container>
      <ImageBox />
      <TitleBox />
      <Viewsbox />
    </Container>
  );
};

export default Loading;
