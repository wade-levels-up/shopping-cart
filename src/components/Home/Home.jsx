import styled from "styled-components";

const StyledHome = styled.main`
    text-align: center;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 1rem;
    flex-grow: 1;
`;

const Home = () => {
    return (
        <StyledHome>
           <p>Welcome to ItemMart!</p><br></br>
           <p>Click shop to browse our items</p><br></br>
           <p>We keep a selection of clothing, technology and accesories</p>
        </StyledHome>
    )
}

export default Home;