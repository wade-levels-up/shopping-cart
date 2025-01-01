import styled from "styled-components";
import PropTypes from "prop-types";

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
`

const Card = ({ bgColor = 'transparent', title, image, desc, price}) => {
    return (
        <StyledCard style={{
            '--bgColor': bgColor,
        }}>
            <h3>{title}</h3>
            <img src={image} alt=''></img>
            <p>{desc}</p>
            <p>${price}</p>
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