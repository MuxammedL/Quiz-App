import { useState, useEffect } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

import Quiz from "./Quiz";
function App() {
  const [connection, setConnection] = useState();

  const joinGame = async () => {
    try {
      const newConnection = new HubConnectionBuilder()
        .withUrl(
          "https://mindmazeprojectwebapi-6nortrmkbq-ey.a.run.app/playhub"
        )
        .configureLogging(LogLevel.Information)
        .build();

      newConnection.on("GetOnlineUsers", (onlineUsers) => {
        console.log("Received online users: ", onlineUsers);
      });

      newConnection.on("RecMessage", (str1, str2) => {
        console.log(str1, str2);
      });

      setConnection(newConnection); // Set the connection state

      await newConnection.start();
      // Invoke BeOnline method and handle any response

      await newConnection.invoke("BeOnline", {
        idToken: 'LM59',
        userName: "MuxammedZi",
        point: 1502,
      });

      // Invoke GetOnlineUsers and handle the response
      // const onlineUsers = await newConnection.invoke("GetOnlineUsers");
      // const onlineFriends = await newConnection.invoke(
      //   "GetOnlineFriends",
      //   token
      // );
      // console.log("Online users:", onlineUsers);
      // console.log("Online friends:", onlineFriends);
    } catch (error) {
      console.error("Error joining game:", error);
    }
  };

  const [questions, setQuestions] = useState(null);

  const getQuestions = async () => {
    const res = await fetch("http://localhost:3000/questions");
    const data = await res.json();
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
    joinGame()
  }, []);
  console.log(questions);
  return <>{questions && <Quiz questions={questions} />}</>;
}

export default App;
