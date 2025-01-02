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
    border-radius: 1rem;
    position: sticky;
    top: -2px;
    border-bottom: 2px solid whitesmoke;

    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 0.8rem;
        background-color: whitesmoke;
        color: black;
        width: 18px;
        height: 18px;
        position: absolute;
        right: -12px;
        top: -12px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;

    &:hover {
        color: black;
    }
`

const StyledIcon = styled(Icon)`
    color: whitesmoke;
    &:hover {
        color: black;
    }
`

const Menu = ({ bgColor = 'rgba(36, 36, 36, 0.7)', totalCart, changeCartVisibility}) => {

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