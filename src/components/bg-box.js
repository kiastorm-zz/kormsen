
import React from 'react';
import {Box} from 'rebass/styled-components';

const BGBox = ({children, src, ...rest}) => (
  <Box
    sx={{
      px: 4,
      py: 6,
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      color: 'white',
      bg: 'gray',
      width: 176,
      height: 176
    }}
    {...rest}
  >   
    {children}
  </Box>
);

export default BGBox;