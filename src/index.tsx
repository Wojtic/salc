import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Tests from "./routes/tests";
import Notes from "./routes/notes";
import reportWebVitals from "./reportWebVitals";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="tests" element={<Tests />} />
          <Route path="notes" element={<Notes />} />
          <Route
            path="*"
            element={
              <main>
                <p className="text-center">404</p>
                <p className="text-center">Nic tu není</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
