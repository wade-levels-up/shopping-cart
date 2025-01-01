import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StyledErrorPage = styled.main`
    background-color: var(--color);
    color: whitesmoke;
    padding: 10px;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const ErrorPage = ({ bgColor = 'black' }) => {
    return (
        <StyledErrorPage style={{
            '--color': bgColor,
        }}>
            <h1>Error</h1>
            <p>Oops something went wrong</p>
            <Link to='/'>Return to home</Link>
        </StyledErrorPage>
    )
}

ErrorPage.propTypes = {
    bgColor: PropTypes.string,
}

export default ErrorPage;