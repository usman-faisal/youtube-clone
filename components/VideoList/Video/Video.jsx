import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styled from "styled-components";
import Details from "@/components/VideoList/Video/Details";
import axios from "@/api/axios";
import Link from "next/link";

const Wrapper = styled.div`
  position: relative;
`
const StyledImage = styled(Image)`
  height: auto;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  background-color: ${props => props.theme.colorBg};
`
const StyledLink = styled(Link)`
  
`
const Video = ({title,thumbnails,channelId}) => {
    if(!thumbnails.maxres) return;
    const {url,height,width} = thumbnails.maxres;
    return (
        <Wrapper>
            <StyledLink href="/test">
            <StyledImage loading="lazy" src={url} alt={title} width={width} height={height} />
            <Details title={title}/>
            </StyledLink>
        </Wrapper>
    );
};

export default Video;