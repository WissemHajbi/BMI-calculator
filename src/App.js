import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";
import Result from "./components/result";
import React, { useState } from "react";

function App() {
    return (
        <div className="App">
            <Calculator/>
        </div>
    );
}

export default App;
