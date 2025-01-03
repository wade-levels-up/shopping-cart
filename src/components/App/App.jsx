import styled from "styled-components";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from '@mdi/react';
import { mdiLeaf } from '@mdi/js';
import githubLogo from '../../assets/github.svg';
import reactLogo from '../../assets/react.svg';
import { spin, skew } from "../../animations/animations";
import dummyData from "../../dummyData";
import Cart from "../Cart/Cart";

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
    margin: 10px;
  }

  & footer {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    border-top: 1px dotted whitesmoke;
    text-align: center;
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
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%) drop-shadow(0px 0px 1px rgb(160, 252, 0));
  }

  & footer img[alt="react logo"] {
    animation: ${spin} 6s linear infinite;
    filter: saturate(0%) contrast(120%) drop-shadow(0px 0px 1px rgb(160, 252, 0));
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
  const [cartVisible, setCartVisible] = useState(false);

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
          return { id: entry.id, quantity: (+entry.quantity + +item.quantity), image: entry.image, price: entry.price, title: entry.title }
        } else {
          return entry;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { id: item.id, quantity: +item.quantity, image: item.image, price: item.price, title: item.title}]);
    }
  }

  function removeItemFromCart(id) {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function updateItemQuantity(item) {
    setCart(cart.map((entry) => {
      if (entry.id === item.id) {
        if (entry.quantity + item.inc < 1 || entry.quantity + item.inc > 99) return entry;
        return {...entry, quantity: entry.quantity + item.inc }
      }
      return entry;
    }))
  }

  function changeCartVisibility() {
    if (cartVisible === false) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
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
      <Menu cart={cart} totalCart={totalCart} changeCartVisibility={changeCartVisibility}/>
      <Outlet context={{items, loading, error, addItemToCart, totalCart, changeCartVisibility}}/>
      <Cart cart={cart} items={items} $visible={cartVisible} changeCartVisibility={changeCartVisibility} removeItemFromCart={removeItemFromCart} updateItemQuantity={updateItemQuantity}/>
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
