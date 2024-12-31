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
      background: blue;
      border: 2px solid blue;
    }
`;

const Button = ({onClick, $primary, children}) => {
  return (
    <StyledButton onClick={onClick} $primary={$primary}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.function,
  $primary: PropTypes.bool,
  children: PropTypes.any
}

Button.defaultProps = {
  children: 'Click me!',
}



export default Button;