import { Routes, Route } from "react-router-dom";

import { LocalStorageHelperProvider } from "./context/LocalStorageHelperContext";
import HomePage from "./routes/HomePage";
import GameManager from "./routes/GameManager";

function App() {
  return (
    <LocalStorageHelperProvider>
      {
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GameManager />} />
          <Route
            path="/timedGame"
            element={<GameManager isTimedGame={true} />}
          />
        </Routes>
      }
    </LocalStorageHelperProvider>
  );
}

export default App;
