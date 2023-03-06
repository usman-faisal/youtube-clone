import React from 'react';
import styled from "styled-components";

const DetailsBox = styled.div`
`
const Title = styled.h3`
  font-weight: 500;
`
const Details = ({title}) => {
    return (
        <DetailsBox>
            <Title>{title}</Title>
        </DetailsBox>
    );
};

export default Details;
