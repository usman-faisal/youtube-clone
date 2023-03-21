import React from "react";
import styled from "styled-components";
import Video from "@/components/VideoList/Video/Video";
import LoadingVideos from "@/components/LoadingVideos/LoadingVideos";
import VideoSkeleton from "@/components/LoadingVideos/VideoSkeleton";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  max-width: 95%;
  margin: 2.2rem auto 5rem auto;
  z-index: 0;
`;
const VideoList = ({ data }) => {
  return (
    <Main>
      {data.map((item) => {
        return <Video key={item.etag} {...item.snippet} />;
      })}
      {Array(4)
        .fill(0)
        .map((_, index) => {
          return <VideoSkeleton key={index} />;
        })}
    </Main>
  );
};

export default VideoList;
