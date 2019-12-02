import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Mirror />
    </div>
  );
}

export default App;
