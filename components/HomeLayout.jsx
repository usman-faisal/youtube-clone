import React from 'react';
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:6.7rem  1fr;
    grid-template-rows: max-content 1fr;
`
const HomeLayout = ({children}) => {
    return (
        <Wrapper>
            <Nav />
            <Sidebar />
            {children}
        </Wrapper>
    );
};

export default HomeLayout;