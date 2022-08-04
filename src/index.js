import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/calculator";
import Result from "./components/result";

function Main() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="calculator" element={<App />} />
                    <Route path="result/:bmi/:weight/:healthy/:gender" element={<Result />}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Main />
);

reportWebVitals();
