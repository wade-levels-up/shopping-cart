import styled from "styled-components";

const StyledHome = styled.main`
    text-align: center;
    color: #000000;
    font-weight: 600;
    background-color: transparent;
    border-radius: 1rem;
    flex-grow: 1;
    background-image: url('../src/assets/tu-tu-QZGQO3NvsLo-unsplash.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    & p {
        background-color: rgba(232, 232, 232, 0.6);
        width: fit-content;
        padding: 5px 15px;
        border-radius: 15px;
    }
`;

const Home = () => {
    return (
        <StyledHome>
           <p>Welcome to ItemMart!</p>
           <p>Click shop to browse our items</p>
           <p>We keep a selection of clothing, technology and accesories</p>
        </StyledHome>
    )
}

export default Home;