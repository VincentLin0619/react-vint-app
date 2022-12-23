import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as H from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<H.Home />} />
        <Route path="/HotelsList" element={<H.HotelsList />} />
        <Route path="/Test" element={<H.Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
