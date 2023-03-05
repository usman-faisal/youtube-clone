import Image from "next/image";
import React from "react";
import styled from "styled-components";
const StyledNav = styled.nav`
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const SearchBox = styled(Box)`
  form {
    height: 3rem;
  }
  input {
    border: none;
    background-color: transparent;
    box-shadow: 0rem 0rem 0rem 0rem rgba(255, 255, 255, 0.2);
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: rgba(255, 255, 255, 0.3);
    height: 100%;
  }
`;
const YoutubeLogo = styled(Image)`
  height: 2rem;
  width: 100%;
`;
const MenuIcon = styled(Image)`
  height: 3.4rem;
  width: 3.4rem;
  padding: 0.5rem;
`;
const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-item: center;
  justify-content: center;
  transition: background-color 0.2s;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
function Nav() {
  return (
    <StyledNav>
      <Box>
        <MenuButton>
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
          <input type="text" />
        </form>
        <button>Search</button>
      </SearchBox>
      <Box>Nav</Box>
    </StyledNav>
  );
}

export default Nav;
