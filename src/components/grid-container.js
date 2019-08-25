import React from 'react';
import {Flex} from 'rebass/styled-components';


const GridContainer = ({children, ...rest}) => (
    <Flex
        maxWidth={1200}
        m="0 auto"
        alignItems="center"
        justifyContent="space-between"
        width= "100%"
        {...rest}
    >
        {children}
    </Flex>
);
    
export default GridContainer;