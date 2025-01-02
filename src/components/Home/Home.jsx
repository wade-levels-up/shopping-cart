import styled from "styled-components";

const StyledHome = styled.main`
    text-align: center;
    color: #000000;
    font-weight: 600;
    background-color: transparent;
    border-radius: 1rem;
    flex-grow: 1;
    background-image: url('../src/assets/tu-tu-QZGQO3NvsLo-unsplash.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 10px;
    margin: 10px;

    & p, h2 {
        background-color: rgba(232, 232, 232, 0.6);
        padding: 5px 15px;
        width: fit-content;
        border-radius: 16px;
    }
`;

const Home = () => {
    return (
        <StyledHome>
           <h2>Home</h2>
           <p>Welcome to ItemMart!</p>
           <p>Click shop to browse our items</p>
           <p>We keep a selection of clothing, technology and accesories</p>
        </StyledHome>
    )
}

export default Home;