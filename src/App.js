import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            Coded by
            <a
              href="https://mariana-birca.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Mariana Birca
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/MarianaBirca/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-app-react-mb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
