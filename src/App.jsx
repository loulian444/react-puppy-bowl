import { useState } from "react";
import "./App.css";
import Players from "./components/Players.jsx";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Players players={players} setPlayers={setPlayers}/>
    </>
  );
}

export default App;
