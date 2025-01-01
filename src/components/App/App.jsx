import styled from "styled-components";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
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
      <Menu />
      <Outlet />
      <footer></footer>
    </StyledApp>
  )
}

export default App
