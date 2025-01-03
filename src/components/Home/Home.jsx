import styled from "styled-components";

const StyledHome = styled.main`
    text-align: center;
    color: #000000;
    font-weight: 600;
    background-color: transparent;
    border-radius: 1rem;
    flex-grow: 1;
    background-image: url('../src/assets/tutubackground.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 10px;
    margin: 10px;

    & p, h2 {
        background-color: rgba(232, 232, 232, 0.8);
        padding: 3px 10px;
        width: fit-content;
        border-radius: 16px;
    }
`;

const Home = () => {
    return (
        <StyledHome>
           <h2>Home</h2>
           <p>Welcome to itemMart</p>
           <p>Click shop to browse our items</p>
        </StyledHome>
    )
}

export default Home;