import { css } from "styled-components";
const sizes = {
  xl: 1200,
  lg: 992,
  md: 769,
  sm: 576
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
