import React, { memo, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Frame, Title, Content, toggle } from './styles'
import {Box, Flex, Heading} from 'rebass/styled-components';
import * as Icons from './icons'
import styled from 'styled-components';

const StyledSidebar = styled(Flex)`
`;

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
  })
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
  return (
    <Frame>
      <Flex mb={1}>
        <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
        <Title style={style}>{name}</Title>
      </Flex>
      <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
        <animated.div style={{ transform }} {...bind} children={children} />
      </Content>
    </Frame>
  )
})

export default () => (
  <StyledSidebar height="100%" bg="#4C6173" flexDirection="column" px={4} pt={4}>
    <Heading color="white" alignSelf="start" pb={4}>Filter results</Heading>
    <Box>
      <Tree name="Genres" defaultOpen>
        <Tree name="Techno" />
        <Tree name="House" />
        <Tree name="EDM" />
        <Tree name="Other" />
      </Tree>
      <Tree name="Topics">
        <Tree name="Music Theory" />
        <Tree name="Arrangement" />
        <Tree name="Groove Rhythm" />
      </Tree>
      <Tree name="DAW">
        <Tree name="Ableton Live" />
        <Tree name="FL Studio" />
        <Tree name="Logic Pro" />
      </Tree>
      <Tree name="Sound Design">
        <Tree name="Serum" />
        <Tree name="Massive" />
      </Tree>
      <Tree name="Mixing & Mastering">
        <Tree name="You get the idea ;)" />
      </Tree>
    </Box>
  </StyledSidebar>
);
