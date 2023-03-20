import React from "react";
import VideoSkeleton from "@/components/LoadingVideos/VideoSkeleton";
import styled from "styled-components";
const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  max-width: 95%;
  margin: 2.2rem auto 5rem auto;
  z-index: 0;
`;
const LoadingVideos = () => {
  return (
    <Main>
      {Array(25)
        .fill(0)
        .map((_, index) => {
          return <VideoSkeleton key={index} />;
        })}
    </Main>
  );
};

export default LoadingVideos;
