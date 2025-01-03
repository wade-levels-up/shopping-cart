import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { slideInRight, slideOutRight } from "../../animations/animations";
import { useState } from "react";
import Icon from '@mdi/react';
import { mdiShoppingOutline } from '@mdi/js';
import amex from '../../assets/amex.svg';
import visa from '../../assets/visa.svg';
import paypal from '../../assets/paypal.svg';
import mcard from '../../assets/mcard.svg';

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
        padding: 10px;
        width: 80%;
        height: 100%;
        animation: ${props => props.$slideOut ? css`${slideOutRight} 1s ease-out forwards` : css`${slideInRight} 1s ease-out forwards`};
    }

    & .slideOverRight div {
        display: flex;
        width: 100%;
        height: fit-content;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
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
        flex-grow: 1;
    }

    & h4 {
        font-size: 10px;
        text-wrap: pretty;
    }

    & li {
        border-bottom: 1px dotted black;
        padding: 8px;
        display: grid;
        grid-template-columns: 65px 70%; 
        grid-template-rows: 65px 30px;
        gap: 8px;
    }

    & li div[role='img'] {
        width: 65px;
        height: 65px;
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
        gap: 6px;
        align-items: center;
    }

    & .cartCardBottom span {
        font-size: 14px;
    }

    & .incBtn, .decBtn {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 16px;
        background-color: transparent;
        color: black;
        border: 2px solid black;
    }

    & button:focus {
        background-color: transparent;
        outline: 2px solid blue;
    }

    & .checkout {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }

    & .checkout span {
        display: flex;
        gap: 28px;
        filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }

    & a {
        text-decoration: none;
        color: black;
    }
`

const Cart = ({ cart, $visible, changeCartVisibility, removeItemFromCart, updateItemQuantity }) => {
    const [slideOut, setSlideOut] = useState(false);

    const totalValue = cart.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
    }, 0).toFixed(2);

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
            <div className="slideOverRight">
                <div>
                    <Button onClick={handleButtonClick} $color={'black'}>x</Button>
                    <Icon path={mdiShoppingOutline} size={1} />
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
                                    <div>
                                        <span>x{item.quantity}</span>
                                        <span>${item.price}</span>
                                    </div>
                                    <div>
                                        <button className="incBtn" onClick={() => updateItemQuantity({ inc: 1, id: item.id})}>+</button>
                                        <button className="decBtn" onClick={() => updateItemQuantity({ inc: -1, id: item.id})}>-</button>
                                        <Button onClick={() => removeItemFromCart(item.id)} $color={'black'}>Remove</Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="checkout">
                    <div>
                        <div>Total: ${totalValue}</div>
                        <Button $color={'black'}><a target='_blank' href="https://www.youtube.com/watch?v=h_D3VFfhvs4">Checkout</a></Button>
                    </div>
                    <span><img src={visa} width='36px' alt="" /><img src={mcard} width='36px' alt="" /><img src={amex} width='36px' alt="" /><img src={paypal} width='36px' alt="" /></span>
                </div>
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