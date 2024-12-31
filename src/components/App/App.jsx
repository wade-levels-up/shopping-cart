import Button from "../Button/Button"

function App() {

  function handleClick() {
    alert('You clicked a button!');
  }

  return (
    <div>
      <h1>Hello World</h1>
      <Button $primary>Button</Button>
      <Button></Button>
      <Button $primary onClick={handleClick}></Button>
    </div>
  )
}

export default App
