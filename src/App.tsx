import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "views/HomeView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
};

export default App;
