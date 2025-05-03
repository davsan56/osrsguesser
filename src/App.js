import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/HomePage";
import GameManager from "./routes/GameManager";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GameManager />} />
      <Route path="/timedGame" element={<GameManager isTimedGame={true} />} />
    </Routes>
  );
}

export default App;
