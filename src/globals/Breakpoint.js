import { css } from "styled-components";
import { breakpoints } from "./Theme";

export const BREAKPOINT = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
