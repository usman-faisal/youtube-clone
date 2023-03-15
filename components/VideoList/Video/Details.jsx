import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import axios from "@/api/axios";

const DetailsBox = styled.div`
  display: flex;
  gap: 1rem;
`;
const TextBox = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;

  h3 {
    font-weight: 500;
    font-size: 1.6rem;
  }

  span {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.65);
  }
`;

const ChannelLogo = styled(Image)`
  border-radius: 50%;
  height: 2.8rem;
  width: 2.8rem;
`;
const ChannelLogoDiv = styled(ChannelLogo)`
  background-color: ${(props) => props.theme.colorAccent};
`;
const Details = ({ title, channelId, channelTitle }) => {
  const [channelUrl, setChannelUrl] = useState("");
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyBl6XVFxHVUlmmojo_drPqC67XBc4NoRSI`
      );
      setChannelUrl(response.data.items[0].snippet.thumbnails.high.url);
    })();
  }, [channelId]);
  return (
    <DetailsBox>
      {channelUrl ? (
        <ChannelLogo
          alt={channelTitle}
          src={channelUrl}
          width={80}
          height={80}
          placeholder="blur"
          blurDataURL="/img-placeholder.svg"
        />
      ) : (
        <ChannelLogoDiv as="div" />
      )}
      <TextBox>
        <h3>{title.length > 50 ? `${title.substring(0, 70)}...` : title}</h3>
        <span>{channelTitle}</span>
      </TextBox>
    </DetailsBox>
  );
};

export default Details;
