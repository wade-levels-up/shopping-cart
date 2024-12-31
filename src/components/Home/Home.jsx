import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHome = styled.main`
    text-align: center;
    background-color: black;
`;

const Home = ({ children = 'I am the home component' }) => {
    return (
        <StyledHome>
            {children}
        </StyledHome>
    )
}

Home.propTypes = {
    children: PropTypes.any,
}

export default Home;