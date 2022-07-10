import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Welcome to Coding</h1>
          <Weather />
          <p>React Week 5</p>
        </header>

        <footer>
          This page is code by Pallavi G R and is open sourdec on GITHUB{" "}
          <a
            href="https://github.com/Pallavi-GR/react-week5.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            @ PALLAVI GR
          </a>
        </footer>
      </div>
    </div>
  );
}
