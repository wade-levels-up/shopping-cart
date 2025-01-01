import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {

  function handleClick() {
    alert('You clicked a button!');
  }

  return (
    <StyledApp>      
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <nav></nav>
      <Outlet />
      <footer></footer>
    </StyledApp>
  )
}

export default App
