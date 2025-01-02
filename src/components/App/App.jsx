import styled from "styled-components";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from '@mdi/react';
import { mdiLeaf } from '@mdi/js';
import githubLogo from '../../assets/github.svg';
import reactLogo from '../../assets/react.svg';
import { spin, skew, gradientShift } from "../../animations/animations";
import dummyData from "../../dummyData";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-height: 100vh;
  max-height: fit-content;
  position: relative;

  & h1 {
    padding-left: 40px;
    text-align: center;
    animation: ${gradientShift} 30s ease-in-out infinite;
    background: linear-gradient(90deg, rgba(25, 25, 25, 0.5) 49.5%, #00ff1e 50%, rgba(25, 25, 25, 0.5) 50.5%);
    background-size: 200% 200%;
    margin: 10px;
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
    filter: drop-shadow(0px 0px 1px blue);
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
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // // Use the dummy data instead of fetching from the API
    // setItems(dummyData);
    // setLoading(false);

    // Use real data from an API
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
            .then((res) => {
              if (res.status >= 400) {
                throw new Error("Server error")
              }
              return res.json()
            })
            .then(data => setItems(data))
            .catch((error) => {
              alert`Experienced an error: ${error} retrieving server data. Loading dummy data in place of items from API`;
                setItems(dummyData);
                setLoading(false);
            })
            .finally(setLoading(false));
  }, []);

  function addItemToCart(item) {
    // Check if the item is already in the cart
    const itemExists = cart.some((entry) => entry.id === item.id);

    if (totalCart >= 900) {
      alert('Whoa, hold up big spender!');
      return;
    }

    if (itemExists) {
      let newCart = cart.map((entry) => {
        if (entry.id === item.id) {
          return { id: entry.id, quantity: (+entry.quantity + +item.quantity) }
        } else {
          return entry;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { id: item.id, quantity: +item.quantity }]);
    }
  }

  let totalCart = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);


  if (error) return <p style={{ display: 'flex', width: '100vw', justifyContent: 'center', padding: '30px'}}>A network error was encountered</p>;
  if (loading) return <p style={{ display: 'flex', width: '100vw', justifyContent: 'center', padding: '30px'}}>Loading...</p>;

  return (
    <StyledApp>      
      <header>
        <h1>itemMart<StyledIcon path={mdiLeaf} size={1.3} /></h1>
      </header>
      <Menu cart={cart} totalCart={totalCart}/>
      <Outlet context={{items, loading, error, addItemToCart, totalCart}}/>
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
