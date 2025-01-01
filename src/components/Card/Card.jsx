import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";

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

    & img {
        width: 80%;
        overflow: hidden;
        border-radius: 30px;
        background-color: white;
        padding: 15px;
    }

    & h3 {
        font-size: 16px;
        text-align: center;
    }

    & details {
        text-align: center;
        padding: 0.5rem 5rem;
        width: 100%;
    }

    & details p {
        text-align: left;
    }

    & div {
        display: flex;
        height: 1.5rem;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
`

const Card = ({ bgColor = 'transparent', title, image, desc, price}) => {
    return (
        <StyledCard style={{
            '--bgColor': bgColor,
        }}>
            <h3>{title}</h3>
            <img src={image} alt=''></img>
            <details>
                <summary>Details</summary>
                <p>{desc}</p>
            </details>
            <div>
                <p>${price}</p>
                <Button>Add to cart</Button>
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
}

export default Card;