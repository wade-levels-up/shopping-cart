import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
    padding: 0.25em 1em;

    ${props => props.$primary && css`
      background: red;
      color: white;
    `};

    &:hover {
      background: red;
      color: white
    }
`;

const Button = ({onClick, $primary, children = 'Click me!'}) => {
  return (
    <StyledButton onClick={onClick} $primary={$primary}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  $primary: PropTypes.bool,
  children: PropTypes.any
}


export default Button;