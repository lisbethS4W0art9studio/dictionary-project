import logo from "./b and w dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          Coded by Lisbeth Stafferton and is open-sourced on{" "}
          <a
            href="https://github.com/lisbethS4W0art9studio/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          hosted on{" "}
          <a
            href="https://dictionary-project-2d83cp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
