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

export const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const slideInRight = keyframes`
  from {
    transform: translateX(150%);
  }

  to {
    transform: translateX(25%);
  }
`

export const slideOutRight = keyframes`
  from {
    transform: translateX(25%);
  }

  to {
    transform: translateX(150%);
  }
`