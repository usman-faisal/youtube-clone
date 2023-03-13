import React from "react";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import styled from "styled-components";
import useSidebarState from "@/store/useSidebarState";

const Wrapper = styled.div`
  margin: 10rem 0 0 ${(props) => (props.isOpen ? "21rem" : "8rem")};
`;

const HomeLayout = ({ children }) => {
  const { isOpen } = useSidebarState();
  return (
    <>
      <Nav />
      <Sidebar />
      <Wrapper isOpen={isOpen}>{children}</Wrapper>
    </>
  );
};

export default HomeLayout;
