import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { slideInRight, slideOutRight } from "../../animations/animations";
import { useState } from "react";

const StyledCart = styled.aside`
    background-color: rgba(0, 0, 0, 0.5);
    color: black;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 2;
    display: none;

    ${props => props.$visible && css`
        display: block;
    `};
    
    & .slideOverRight {
        background-color: rgba(234, 234, 234, 0.95);
        display: flex;
        flex-direction: column;
        padding: 16px;
        width: 80%;
        height: 100%;
        animation: ${props => props.$slideOut ? css`${slideOutRight} 1s ease-out forwards` : css`${slideInRight} 1s ease-out forwards`};
    }

    & .slideOverRight div {
        display: flex;
        width: 100%;
        height: fit-content;
        justify-content: flex-start;
        gap: 16px;
    }

    & ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-decoration: none;
        list-style: none;
        margin-top: 16px;
    }

    & h4 {
        font-size: 12px;
        text-wrap: pretty;
    }

    & li {
        border: 1px solid black;
        border-radius: 16px;
        padding: 8px;
        display: grid;
        grid-template-columns: 20% 80%; 
        grid-template-rows: 60px 30px;
        gap: 5px;
    }

    & li div[role='img'] {
        width: 50px;
        height: 50px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: white;
    }

    & .cartCardBottom {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }
`

const Cart = ({ cart, items, $visible, changeCartVisibility, removeItemFromCart }) => {
    const [slideOut, setSlideOut] = useState(false);

    function handleButtonClick() {
        setSlideOut(true);
        setTimeout(() => {
            changeCartVisibility()
            setSlideOut(false);
        }, 1000);
    }

    let itemCart = items.filter((item) => {
        return cart.some((entry) => entry.id === item.id);
    });

    return (
        <StyledCart $visible={$visible} $slideOut={slideOut}>
            <div className="slideOverRight" onAnimationEnd={console.log('it ended')}>
                <div>
                    <Button onClick={handleButtonClick} $color={'black'}>x</Button>
                    <h3>Cart</h3>
                </div>
                <ul>
                    {itemCart.map((item) => (
                        <li key={item.id}>
                            <div role='img' aria-label='' style={{ backgroundImage: `url(${item.image})`}}></div>
                            <h4>{item.title}</h4>
                            <div className="cartCardBottom">
                                <Button onClick={() => removeItemFromCart(item.id)} $color={'red'}>Remove</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledCart>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    items: PropTypes.array,
    changeCartVisibility: PropTypes.func,
    $visible: PropTypes.any,
    removeItemFromCart: PropTypes.func,
}

export default Cart;