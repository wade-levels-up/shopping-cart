import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button"

const StyledMenu = styled.nav`
    background-color: var(--bgColor);
    color: whitesmoke;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border: 1px solid black;
    border-radius: 1rem;
`

const Menu = ({ bgColor = 'transparent'}) => {
    return (
        <StyledMenu style={{
            '--bgColor': bgColor
        }}>
            <Button>Home</Button>
            <Button>Shop</Button>
        </StyledMenu>
    )
}

Menu.propTypes = {
    bgColor: PropTypes.string,
}

export default Menu;