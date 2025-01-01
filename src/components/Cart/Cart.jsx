import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCart = styled.div`
    background-color: magenta;
    color: aliceblue;
`

const Cart = ({ children = 'Cart' }) => {
    return (
        <StyledCart>
            {children}
        </StyledCart>
    )
}

Cart.propTypes = {
    children: PropTypes.any
}

export default Cart;