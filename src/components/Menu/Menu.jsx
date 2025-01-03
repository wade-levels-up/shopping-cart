import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button"
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiShoppingOutline } from '@mdi/js';

const StyledMenu = styled.nav`
    background-color: var(--bgColor);
    color: whitesmoke;
    display: flex;
    justify-content: space-evenly;
    padding: 15px 20px;
    position: sticky;
    top: -2px;
    border-bottom: 2px solid whitesmoke;
    z-index: 1;

    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding: 0.5rem;
        background-color: whitesmoke;
        color: black;
        max-width: 3.5ch;
        height: 18px;
        position: absolute;
        right: -10px;
        top: -10px;
        transform: translateX(10px);
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;

`

const StyledIcon = styled(Icon)`
    color: whitesmoke;
`

const Menu = ({ bgColor = 'rgba(36, 36, 36, 0.9)', totalCart, changeCartVisibility}) => {

    return (
        <StyledMenu style={{
            '--bgColor': bgColor
        }}>
            <Button><StyledLink to='/'>Home</StyledLink></Button>
            <Button><StyledLink to='shop'>Shop</StyledLink></Button>
            <Button onClick={changeCartVisibility}><StyledIcon path={mdiShoppingOutline} size={1}/><span>{totalCart}</span></Button>
        </StyledMenu>
    )
}

Menu.propTypes = {
    bgColor: PropTypes.string,
    totalCart: PropTypes.number,
    changeCartVisibility: PropTypes.func,
}

export default Menu;