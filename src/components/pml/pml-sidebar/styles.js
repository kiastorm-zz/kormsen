import React from 'react'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import {Box, Flex, Heading} from 'rebass/styled-components';

const Frame = styled(props => (
  <Box 
    mb={1}
    {...props}
  />
))`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: white;
  fill: white;
`

const Title = styled(props => (
  <Heading
    fontSize={[1]}
    {...props} 
  />
))`
  vertical-align: middle;
`

const Content = styled(animated(Box))`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle'
}

export { Frame, Content, toggle, Title }
