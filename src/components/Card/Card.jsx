import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const StyledCard = styled.article`
    background-color: var(--bgColor);
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    height: fit-content;
    box-shadow: 1px 1px 5px black;
    border-radius: 30px;

    & h3 {
        font-size: 16px;
        text-align: center;
        height: 4rem;
        margin-bottom: 32px;
        text-wrap: pretty;
    }

    & details {
        text-align: center;
        padding: 0.5rem 5rem;
        width: 100%;
        padding: 16px 10px;
    }

    & details p {
        text-align: left;
        width: 100%;
    }

    & div[id='priceSection'] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }

    & div[role='img'] {
        min-width: 265px;
        height: 265px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-color: white;
        border-radius: 16px;
    }

    & form {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 3px;
        height: 50px;
    }

    & input {
        width: 3rem;
        font-size: 16px;
        padding: 5px 10px;
        border-radius: 15px;
    }
`

const Card = ({ bgColor = 'transparent', keyCard, title, image, desc, price}) => {
    const [quantity, setQuantity] = useState(1);

    const { addItemToCart } = useOutletContext();

    function handleInput(e) {
        setQuantity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addItemToCart({ id: keyCard, quantity: quantity });
      }

    return (
        <StyledCard style={{
            '--bgColor': bgColor,
        }}>
            <h3>{title}</h3>
            <div role='img' aria-label='' style={{ backgroundImage: `url(${image})`}}></div>
            <details>
                <summary>Details</summary>
                <p>{desc}</p>
            </details>
            <div id='priceSection'>
                <p>${price}</p>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor='quantity'>Quantity:</label>
                        <input value={quantity} onChange={handleInput} id='quantity' type="number" min='1' max='99' step='1' inputMode="numeric"></input>
                        <Button type='submit'>Add to cart</Button>
                    </form>
                </div>
            </div>
        </StyledCard>
    )
}

Card.propTypes = {
    bgColor: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    keyCard: PropTypes.any
}

export default Card;