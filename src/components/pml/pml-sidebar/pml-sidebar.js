import React, { memo, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Frame, Title, Content, toggle } from './styles'
import {Box, Flex} from 'rebass/styled-components';
import * as Icons from './icons'
import styled from 'styled-components';

const StyledSidebar = styled.div`
	background-color: #4C6173;
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
  <StyledSidebar>
    <Tree name="Music Production Courses" defaultOpen>
			<Tree name="Techno Courses" />
			<Tree name="Sound Design Courses" />
			<Tree name="Arrangement Courses" />
    </Tree>
		<Tree name="DAW Files">

		</Tree>
		<Tree name="DAW Files">

		</Tree>
		<Tree name="Bundle Packs">

		</Tree>
		<Tree name="!Freebies!">

		</Tree>
  </StyledSidebar>
);
