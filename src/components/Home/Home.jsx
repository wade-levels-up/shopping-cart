import styled from "styled-components";

const StyledHome = styled.main`
    text-align: center;
    color: #000000;
    font-weight: 600;
    background-color: transparent;
    flex-grow: 1;
    background-image: url('../src/assets/tutubackground.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    return (
        <StyledHome></StyledHome>
    )
}

export default Home;