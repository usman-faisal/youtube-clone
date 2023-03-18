import React from "react";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import styled from "styled-components";
import useSidebarState from "@/store/useSidebarState";
import CategoryList from "@/components/CategoryList/CategoryList";

const Wrapper = styled.div`
  margin: 8rem 0 0 ${(props) => (props.isOpen ? "21rem" : "8rem")};
`;

const HomeLayout = ({ children }) => {
  const { isOpen } = useSidebarState();
  return (
    <>
      <Nav />
      <Sidebar />
      <Wrapper isOpen={isOpen}>
        <CategoryList />
        {children}
      </Wrapper>
    </>
  );
};

export default HomeLayout;
