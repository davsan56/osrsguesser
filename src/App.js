import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./routes/HomePage";
import GameManager from "./routes/GameManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Game" element={<GameManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
