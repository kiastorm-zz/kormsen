import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: 20px;
`;

export default function Box({ children, className }) {
  return (
    <StyledBox className={className}>
      {children}
    </StyledBox>
  )
}
