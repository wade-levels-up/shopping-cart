import styled from "styled-components";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  height: 100vh;

  & h1 {
    text-align: center;
  }

  & footer {
    text-align: center;
    padding: 0.2rem;
  }
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

  function handleClick() {
    alert('You clicked a button!');
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <StyledApp>      
      <header>
        <h1>ItemMart</h1>
      </header>
      <Menu />
      <Outlet context={items}/>
      <footer>Created by Wade</footer>
    </StyledApp>
  )
}

export default App
