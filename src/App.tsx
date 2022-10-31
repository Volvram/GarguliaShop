import React from "react";

import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import Loot from "./pages/Loot/Loot";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loot />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
