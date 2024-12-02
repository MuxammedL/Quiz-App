import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
