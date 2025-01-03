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
        margin-bottom: 8px;
    }

    & ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-decoration: none;
        list-style: none;
        margin-top: 16px;
        overflow: scroll;
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

    & .cartCardBottom div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0px 5px;
    }

    & .incBtn {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        background-color: transparent;
        color: black;
        border: 2px solid black;
    }

    & button:focus {
        background-color: transparent;
        outline: 2px solid blue;
    }
`

const Cart = ({ cart, $visible, changeCartVisibility, removeItemFromCart, updateItemQuantity }) => {
    const [slideOut, setSlideOut] = useState(false);

    function handleButtonClick() {
        console.table(cart);
        setSlideOut(true);
        setTimeout(() => {
            changeCartVisibility()
            setSlideOut(false);
        }, 1000);
    }

    return (
        <StyledCart $visible={$visible} $slideOut={slideOut}>
            <div className="slideOverRight" onAnimationEnd={console.log('it ended')}>
                <div>
                    <Button onClick={handleButtonClick} $color={'black'}>x</Button>
                    <h3>Cart</h3>
                </div>
                <hr></hr>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <div role='img' aria-label='' style={{ backgroundImage: `url(${item.image})`}}></div>
                            <h4>{item.title}</h4>
                            <div className="cartCardBottom">
                                <div>
                                    <span>x {item.quantity}</span>
                                    <button className="incBtn" onClick={() => updateItemQuantity({ inc: 1, id: item.id})}>+</button>
                                    <button className="incBtn" onClick={() => updateItemQuantity({ inc: -1, id: item.id})}>-</button>
                                    <Button onClick={() => removeItemFromCart(item.id)} $color={'black'}>Remove</Button>
                                </div>
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
    changeCartVisibility: PropTypes.func,
    $visible: PropTypes.any,
    removeItemFromCart: PropTypes.func,
    updateItemQuantity: PropTypes.func,
}

export default Cart;