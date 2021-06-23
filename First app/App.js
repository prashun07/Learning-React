import logo from './logo.svg';
import './App.css';
import covid from './check.js';
function App() {
  return (
    <div className="App">
      {/* <div>covid()</div> */}
      {covid()}
      {covid()}
      {covid()}
      {covid()}
      {covid()}
      {covid()}
      {covid()}
      {covid()}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Hello world
        </a>
      </header>
    </div>
  );
}

export default App;
