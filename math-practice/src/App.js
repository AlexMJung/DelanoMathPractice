import picture from './Cartoon_math_symbols.jpg'
import './App.css';

const divStyle = {
  height: '120px',
  border: '5px solid orange'
}

const titleBar = (
  <div id="titleBar">
    <h1>Hello. Welcome to Delano Math Practice!</h1>
</div>
);

const functionBar =(
  <div id='border' style={divStyle}>
  </div>
)


function App() {
  return (
    <div className="App">
    {titleBar}
    {functionBar}
      <header className="App-header">
      <img src={picture} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
