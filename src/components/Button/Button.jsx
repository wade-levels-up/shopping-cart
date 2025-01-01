import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
    background: transparent;
    border-radius: 12px;
    border: 2px solid #c1de96;;
    color: #c1de96;
    padding: 0.25em 1em;

    ${props => props.$primary && css`
      background-color: #c1de96;
      color: #000000;
    `};

    &:hover {
      background-color: #c1de96;
      color: black;
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