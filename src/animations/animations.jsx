import { keyframes } from "styled-components"

export const skew = keyframes`
  from {
    transform: skewX(45deg);
    color: whitesmoke;
  }

  to {
    transform: skewX(0deg);
    color: green;
  }
`

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`