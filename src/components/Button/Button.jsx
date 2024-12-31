import styled, { css } from "styled-components";

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    padding: 0.25em 1em;

    ${props => props.$primary && css`
      background: red;
      color: white;
    `};
`
export default Button;