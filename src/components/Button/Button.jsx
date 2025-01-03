import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
    background: transparent;
    border-radius: 12px;
    border: 2px solid #c1de96;
    color: #c1de96;
    padding: 0.25em 1em;
    position: relative;
    font-size: 16px;
    
    ${props => props.$color && css`
      background-color: transparent;
      border: 2px solid black;
      color: #000000;
    `};

    &:hover {
      background-color: #c1de96;
      color: black;
      cursor: pointer;
    }

    &:focus {
      background-color: #c1de96;
      color: black;
      cursor: pointer;
    }
`;

const Button = ({onClick, $color, children = 'Click me!'}) => {
  return (
    <StyledButton onClick={onClick} $color={$color}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  $color: PropTypes.string,
  children: PropTypes.any
}


export default Button;