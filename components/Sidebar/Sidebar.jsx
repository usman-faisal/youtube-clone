import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {flexCenter} from "@/styles/mixins";
const Wrapper = styled.div`
  grid-column: 1/2;
  margin-top: 2rem;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  li{
    ${flexCenter};
    flex-direction: ${props => props.open ? 'row' : 'column'};
    cursor: pointer;
    text-align: center;
    width: 100%;
    height: 6.6rem;
    border-radius: 10px;
    transition: all .2s;
    &:hover{
      background-color: ${props => props.theme.colorAccent};
    }
  }
`

const Logo = styled(Image)`
  width: 2.2rem;
  height: 2.2rem;
`
const Sidebar = () => {
    return (

            <Wrapper>
                <List>
                    <li>
                        <Logo src="/home-icon.svg" width={200} height={200} alt="home icon"/>
                        <a>Home</a>
                    </li>
                    <li>
                        <Logo src="/trending.svg" width={200} height={200} alt="trending icon" />
                        <a>Trending</a>
                    </li>
                    <li>
                        <Logo src="/music.svg" width={200} height={200} alt="music icon"/>
                        <a>Music</a>
                    </li>
                </List>
            </Wrapper>
    );
};

export default Sidebar;