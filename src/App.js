import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Gamma normally comes third; but not here.</p>
        <a
          className="App-link"
          href="https://betabeta.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beta Page
        </a>
      </header>
    </div>
  );
}

export default App;
