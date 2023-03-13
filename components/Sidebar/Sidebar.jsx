import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { flexCenter } from "@/styles/mixins";
import useSidebarState from "@/store/useSidebarState";
const Wrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.isOpen ? "7.2rem" : "6rem")};
  left: 0;
  height: 100vh;
  z-index: 100;
  margin-top: 0.8rem;
  background-color: ${(props) => props.theme.colorBg};
  width: ${(props) => (props.isOpen ? "20.2rem" : "7.2rem")};
`;
const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => (props.isOpen ? `1.4rem` : `1rem`)};
`;
const LineBreak = styled.hr`
  width: 100%;
  margin: 1rem 0;
  border-color: black;
`;
const ListItem = styled.ul`
  ${flexCenter};
  flex-direction: ${(props) => (props.isOpen ? "row" : "column")};
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: ${(props) => (props.isOpen ? "4rem" : "7.6rem")};
  border-radius: 10px;
  transition: ${(props) => !props.isOpen && `background-color .2s`};
  background-color: ${(props) =>
    props.isActive && props.isOpen ? props.theme.colorAccent : "inherit"};
  img {
    flex-basis: ${(props) => props.isOpen && "7.2rem"};
  }
  &:hover {
    background-color: ${(props) => props.theme.colorAccent};
  }
`;

const Logo = styled(Image)`
  width: auto;
  height: 2.4rem;
`;
const Sidebar = () => {
  const { isOpen } = useSidebarState();
  return (
    <Wrapper isOpen={isOpen}>
      <List isOpen={isOpen}>
        <ListItem isActive={true} isOpen={isOpen}>
          <Logo src="/home-icon.svg" width={200} height={200} alt="home icon" />
          <a>Home</a>
        </ListItem>
        <ListItem isOpen={isOpen}>
          <Logo
            src="/trending.svg"
            width={200}
            height={200}
            alt="trending icon"
          />
          <a>Trending</a>
        </ListItem>
        <ListItem isOpen={isOpen}>
          <Logo src="/music.svg" width={200} height={200} alt="music icon" />
          <a>Music</a>
        </ListItem>
        {isOpen && (
          <>
            <LineBreak />

            <ListItem isOpen={isOpen}>
              <Logo
                src="/trending.svg"
                width={200}
                height={200}
                alt="trending icon"
              />
              <a>Trending</a>
            </ListItem>

            <ListItem isOpen={isOpen}>
              <Logo
                src="/music.svg"
                width={200}
                height={200}
                alt="music icon"
              />
              <a>Music</a>
            </ListItem>
          </>
        )}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
