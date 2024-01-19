import { useState, useEffect } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

import Quiz from "./Quiz";
function App() {



  const [questions, setQuestions] = useState(null);

  const getQuestions = async () => {
    const res = await fetch("https://questions-vksc.onrender.com/unit1");
    const data = await res.json();
    setQuestions(data.slice(0,3));
  };

  useEffect(() => {
    getQuestions();

  }, []);
  console.log(questions);
  return <>{questions && <Quiz questions={questions} />}</>;
}

export default App;
