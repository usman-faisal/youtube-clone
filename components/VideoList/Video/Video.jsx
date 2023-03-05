import React from 'react';
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const StyledImage = styled(Image)`
  height: auto;
  max-height: 30rem;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  background-color: ${props => props.theme.colorBg};
`
const Video = ({title,thumbnails: {high: {url,width,height}}}) => {
    return (
        <Wrapper>
            <a>
            <StyledImage src={url} blurDataURL={url} placeholder="blur" alt={title} width={width} height={height} />
            <h3>{title}</h3>
            </a>
        </Wrapper>
    );
};

export default Video;