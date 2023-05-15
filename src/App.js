import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Fotter from "./Components/Fotter";
import Storefront from "./Components/Storefront";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="Apps">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/storefront" element={<Storefront />}></Route>
        </Routes>
      </BrowserRouter>
      <Fotter />
    </div>
  );
}

export default App;
