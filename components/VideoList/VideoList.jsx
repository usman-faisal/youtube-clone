import React from "react";
import styled from "styled-components";
import Video from "@/components/VideoList/Video/Video";
import Loading from "@/components/Loading/Loading";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  max-width: 95%;
  margin: 5rem auto 5rem auto;
  z-index: 0;
`;
const VideoList = ({ data }) => {
  if (data.length === 0) {
    return (
      <Main>
        {Array(20)
          .fill(0)
          .map((_, index) => {
            return <Loading key={index} />;
          })}
        )
      </Main>
    );
  }
  return (
    <Main>
      {data.map((item, index) => {
        return <Video key={item.etag} {...item.snippet} />;
      })}
      {Array(3)
        .fill(0)
        .map((_, index) => {
          return <Loading key={index} />;
        })}
    </Main>
  );
};

export default VideoList;
