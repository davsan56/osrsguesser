import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import GameManager from "./routes/GameManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<GameManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
