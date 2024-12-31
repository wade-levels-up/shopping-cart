import { Link } from "react-router-dom";
import Button from "../Button/Button"
import Home from "../Home/Home";

function App() {

  function handleClick() {
    alert('You clicked a button!');
  }

  return (
    <div>
      <h1>Hello World</h1>
      <nav>
        <ul>
          <li>
            <Link to="home">Home page</Link>
          </li>
        </ul>
      </nav>
      <Button $primary>Button</Button>
      <Button></Button>
      <Button $primary onClick={handleClick}></Button>
      <Home></Home>
    </div>
  )
}

export default App
