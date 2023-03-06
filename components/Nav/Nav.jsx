import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {flexCenter} from "@/styles/mixins";
const StyledHeader = styled.header`
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem 0 1.6rem;
  grid-column: 1/-1;
  gap: 1.8rem;
`;
const MenuIcon = styled(Image)`
  height: 3.8rem;
  width: 3.8rem;
  padding: 0.5rem;
  transition: background-color 0.2s;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colorAccent};
  }
`;
const MenuButton = styled.button`
  width: 3.8rem;
  height: 5.6rem;
  margin: 0 auto;
  border: none;
  background-color: transparent;
  ${flexCenter};
`;
const Box = styled.div`
  ${flexCenter};
  gap: 1rem;
  flex-shrink: 0;
`;
const SearchBox = styled.div`
  ${flexCenter};  
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0px 0px 1px 1px ${(props) => props.theme.colorAccent};
  flex: 0 1 60rem;
  min-height: 70%;
  min-width: 0;
  align-items: center;
  form{
    flex: 1;
    display: flex;
  }
  input{
    padding: 0.8rem 1.8rem 0.8rem 1.8rem;
    background-color: transparent;
    border: none;
    width: 100%;
    flex-shrink: 1;
    
    &:focus{
      outline: none;
    }
  }
  button{
    align-self: stretch;
    border: none;
    ${flexCenter};
    background-color: ${(props) => props.theme.colorAccent};
    padding: 0.4rem;
    cursor: pointer;
    width: max-content;
  }
`
const YoutubeLogo = styled(Image)`
  height: 2rem;
  width: 100%;
`;
const SearchIcon= styled(Image)`
  height: 2rem;
  width: 6rem;
`
const List = styled.ul`
  ${flexCenter};
  gap: 1rem;
  li{
    cursor: pointer;
  }
`
function Nav() {
  return (
    <StyledHeader>
      <Box>
          <MenuButton
          >
              <MenuIcon
                  src="/menu-icon.svg"
                  height={200}
                  width={200}
                  alt="menu icon"
              />
          </MenuButton>
        <YoutubeLogo
          src="/youtube-logo.svg"
          height={200}
          width={200}
          alt="youtube logo"
        />
      </Box>
        <SearchBox>
            <form>
                <input placeholder="Search" type="text"/>
            </form>
            <button>
            <SearchIcon src="/search-icon.svg" height={200} width={200} alt="search icon"/>
            </button>
        </SearchBox>
      <Box>
          <List>
              <li>Contact me</li>
              <li>Hire me</li>
              <li>About me</li>
          </List>
      </Box>
    </StyledHeader>
  );
}

export default Nav;
