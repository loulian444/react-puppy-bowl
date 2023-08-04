import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const apiUrl =
    "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players";

  useEffect(() => {
    const fetchPuppies = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      setPlayers(data.data.players);
    }

    fetchPuppies()
  }, []);

  console.log(players)

  return (
    <>
      <h1>Puppy Bowl</h1>
    </>
  );
}

export default App;
