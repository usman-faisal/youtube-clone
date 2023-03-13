import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { flexCenter } from "@/styles/mixins";
import useSidebarState from "@/store/useSidebarState";
const StyledHeader = styled.header`
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem 0 1.6rem;
  grid-column: 1/-1;
  gap: 1.8rem;
  background-color: ${(props) => props.theme.colorBg};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const MenuIcon = styled(Image)`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  cursor: pointer;
`;
const MenuButton = styled.button`
  min-width: 4rem;
  height: 4rem;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.2s;
  ${flexCenter};

  &:hover {
    background-color: ${(props) => props.theme.colorAccent};
  }
`;
const Box = styled.div`
  ${flexCenter};
  gap: 1rem;
  flex-shrink: 0;
`;
const LogoBox = styled(Box)`
  gap: 0;
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
  form {
    flex: 1;
    display: flex;
  }
  input {
    padding: 0.8rem 1.8rem 0.8rem 1.8rem;
    background-color: transparent;
    border: none;
    width: 100%;
    flex-shrink: 1;

    &:focus {
      outline: none;
    }
  }
  button {
    align-self: stretch;
    border: none;
    ${flexCenter};
    background-color: ${(props) => props.theme.colorAccent};
    padding: 0.4rem;
    cursor: pointer;
    width: max-content;
  }
`;
const YoutubeLogo = styled(Image)`
  height: 2rem;
  width: 100%;
  padding: 0 1.6rem;
`;
const SearchIcon = styled(Image)`
  height: 2rem;
  width: 6rem;
`;
const List = styled.ul`
  ${flexCenter};
  gap: 1rem;
  li {
    cursor: pointer;
  }
`;
const Icon = styled(MenuIcon)`
  width: 3.4rem;
  height: 3.4rem;
`;
function Nav() {
  const sidebarState = useSidebarState();
  return (
    <StyledHeader>
      <LogoBox>
        <MenuButton onClick={sidebarState.toggle}>
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
      </LogoBox>
      <SearchBox>
        <form>
          <input placeholder="Search" type="text" />
        </form>
        <button>
          <SearchIcon
            src="/search-icon.svg"
            height={200}
            width={200}
            alt="search icon"
          />
        </button>
      </SearchBox>
      <Box>
        <List>
          <li>
            <Icon
              src="/upload.svg"
              height={200}
              width={200}
              alt="Upload icon"
            />
          </li>
          <li>
            <Icon src="/bell.svg" height={200} width={200} alt="bell icon" />{" "}
          </li>
        </List>
      </Box>
    </StyledHeader>
  );
}

export default Nav;
