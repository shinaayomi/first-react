import logo from './logo.svg';
import './App.css';

// import { Greet } from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      
      <Greet name="Bruce" heroName="Batman">
        <p>This is a Children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" />
        <button>Action</button>
      <Greet name="Diana" heroName="Super Woman" />
      &nbsp;
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Super Woman" />
      <Hello />
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
