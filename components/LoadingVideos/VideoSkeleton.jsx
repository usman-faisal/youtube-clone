import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 25.2rem;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
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
const VideoSkeleton = () => {
  return (
    <Container>
      <ImageBox />
      <TitleBox />
      <Viewsbox />
    </Container>
  );
};

export default VideoSkeleton;
