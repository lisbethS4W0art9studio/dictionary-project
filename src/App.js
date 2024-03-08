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
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://github.com/lisbethS4W0art9studio/" target="_blank">
            Lisbeth Stafferton
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/lisbethS4W0art9studio/dictionary-project"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-project-2d83cp.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
