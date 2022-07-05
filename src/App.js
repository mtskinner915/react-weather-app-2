import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>WEATHER</h1>
        <div className="Weather-app-wrapper">
          <div className="Weather-app">
            <Weather defaultCity="New York" />
          </div>
        </div>
        <footer className="App-link">
          <a
            className="Git-link"
            href="https://github.com/mtskinner915/react-weather-app-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <span> by Margaret Skinner</span>
        </footer>
      </div>
    </div>
  );
}
