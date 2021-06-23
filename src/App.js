import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      
      <Greet />
      <Welcome />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Shina
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
