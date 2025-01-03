import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";

const StyledShop = styled.main`
    background-color: var(--bgColor);
    color: beige;
    display: grid;
    padding: 15px;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
`

const Shop = ({ bgColor = 'transparent'}) => {
    const { items } = useOutletContext() || [];

    return (
        <>
            <StyledShop style={{
            'bgColor': bgColor
            }}>
            {items.map((item) => (
                <Card 
                    key={item.id} 
                    keyCard={item.id}
                    title={item.title}
                    image={item.image}
                    desc={item.description}
                    price={item.price}
                />
            ))}
            </StyledShop>
        </>
    )
}

Shop.propTypes = {
    bgColor: PropTypes.string,
}

export default Shop;