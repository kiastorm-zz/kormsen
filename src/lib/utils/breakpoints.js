import { css } from 'styled-components';

const size = {
  p: 600,
  tp: 900,
  tl: 1200,
  lg: 1800,
};

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${size[label] + 1}px) {
        ${css(...args)}
      }
    `

  return acc;
}, {});

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (min-width: ${size[label]}px) {
        ${css(...args)}
      }
    `

  return acc;
}, {});

export default below;
