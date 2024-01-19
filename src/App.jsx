import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Entrance from "./entrance";
import Quiz from "./Quiz";
function App() {
  const [questions, setQuestions] = useState(null);

  

  
  return (
    <>
      <Routes>
        <Route index element={<Entrance setQuestions={setQuestions}/>} />
        <Route path="quiz" element={questions &&<Quiz questions={questions}/>} />
      </Routes>
    </>
  );
}

export default App;
