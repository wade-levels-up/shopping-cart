import styled from "styled-components";
import PropTypes from "prop-types";

const StyledShop = styled.main`
    background-color: green;
    color: beige;
`

const Shop = ({ children = 'I am the shop component' }) => {
    return (
        <StyledShop>
            {children}
        </StyledShop>
    )
}

Shop.propTypes = {
    children: PropTypes.any
}

export default Shop;