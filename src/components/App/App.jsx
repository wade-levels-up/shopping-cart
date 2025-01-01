import styled from "styled-components";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`


function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
            .finally(setLoading(false));
  }, []);

  function handleClick() {
    alert('You clicked a button!');
  }

  console.table(items);

  return (
    <StyledApp>      
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <Menu />
      <Outlet context={items}/>
      <footer></footer>
    </StyledApp>
  )
}

export default App
