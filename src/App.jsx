import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as H from './pages';
import Test from './test/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<H.Home />} />
        <Route path="/hotelsList" element={<H.HotelsList />} />
        <Route path="/hotelsList/:id" element={<H.HotelItem />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
