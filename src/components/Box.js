import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  position: relative;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 20px;
  flex-basis: 75%;
`;

const BoxButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: 0px;
  right: 0px;
  background-color: #7c4c64;
  border-radius: 100%;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function Box({ buttonTo, buttonText, children, className }) {
  return (
    <StyledBox className={className}>
      <BoxContent>
        {children}
      </BoxContent>
      <BoxButton>
        <Link as="h5" to={buttonTo}>{buttonText}</Link>
      </BoxButton>
    </StyledBox>
  )
}
