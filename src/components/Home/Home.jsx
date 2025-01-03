import styled from "styled-components";
import sampleImage from '../../assets/tutubackground.jpg'

const StyledHome = styled.main`
    text-align: center;
    color: #000000;
    font-weight: 600;
    background-color: transparent;
    flex-grow: 1;
    background-image: url(${sampleImage});
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
        <StyledHome role='img' aria-label='Interior decor with leafy plant'></StyledHome>
    )
}

export default Home;