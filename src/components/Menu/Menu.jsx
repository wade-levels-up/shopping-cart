import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button"
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
    background-color: var(--bgColor);
    color: whitesmoke;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    border: 1px solid black;
    border-radius: 1rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
`

const Menu = ({ bgColor = 'transparent'}) => {
    return (
        <StyledMenu style={{
            '--bgColor': bgColor
        }}>
            <Button><StyledLink to='/'>Home</StyledLink></Button>
            <Button><StyledLink to='shop'>Shop</StyledLink></Button>
        </StyledMenu>
    )
}

Menu.propTypes = {
    bgColor: PropTypes.string,
}

export default Menu;