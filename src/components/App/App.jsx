import styled from "styled-components";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from '@mdi/react';
import { mdiLeaf } from '@mdi/js';
import githubLogo from '../../assets/github.svg';
import reactLogo from '../../assets/react.svg';
import { spin, skew } from "../../animations/animations";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-height: 100vh;
  max-height: fit-content;
  position: relative;

  & h1 {
    text-align: center;
  }

  & footer {
    border-top: 1px dotted whitesmoke;
    text-align: center;
    padding: 0.2rem;
  }

  & footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: whitesmoke;
    text-decoration: underline;
  }

  & footer img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
  }

  & footer img[alt="react logo"] {
    animation: ${spin} 6s linear infinite;
    filter: drop-shadow(0px 0px 1px cyan);
  }
`

const StyledIcon = styled(Icon)`
  animation: ${skew} 3s ease 1;
  animation-fill-mode: forwards;
  will-change: transform, color;
`




function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then((res) => {
              if (res.status >= 400) {
                throw new Error("Server error")
              }
              return res.json()
            })
            .then(data => setItems(data))
            .catch(error => setError(error))
            .finally(setLoading(false));
  }, []);

  // function handleClick() {
  //   alert('You clicked a button!');
  // }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <StyledApp>      
      <header>
        <h1>itemMart<StyledIcon path={mdiLeaf} size={1.3} /></h1>
      </header>
      <Menu />
      <Outlet context={{items, loading, error}}/>
      <footer>
        <a href="https://github.com/wade-levels-up" target="_blank">
          <img src={githubLogo} alt="github logo" width="24" height="24"/>
          <p>Made <em>by</em> Wade!</p>
          <img src={reactLogo} alt="react logo" width="24" height="24"/>
        </a>
        </footer>
    </StyledApp>
  )
}

export default App
