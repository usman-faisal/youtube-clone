import React from 'react';
import styled from "styled-components";
import Video from "@/components/VideoList/Video/Video";

const Main = styled.main`

  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(30rem,1fr));
  column-gap: 2rem;
  row-gap: 3rem;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
`
const VideoList = ({data}) => {
    console.log(data)
    return (
        <Main>
            {data.map(item => {
                return <Video key={item.etag} {...item.snippet}/>;
            })}
        </Main>
    );
};

export default VideoList;