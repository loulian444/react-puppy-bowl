import { useState } from "react";
import "./App.css";
import Players from "./components/Players.jsx";
import SinglePlayer from "./components/SinglePlayer";
import { Routes, Route } from "react-router-dom";

function App() {
  const apiUrl =
    "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players";

  const [players, setPlayers] = useState([]);
  const [id, setId] = useState(null);

  const clickDetailHandler = (event) => {
    setId(event.target.parentNode.id);
  };

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Players
              apiUrl={apiUrl}
              players={players}
              setPlayers={setPlayers}
              clickDetailHandler={clickDetailHandler}
            />
          }
        />
        <Route path="/player/:id" element={<SinglePlayer apiUrl={apiUrl} />} />
      </Routes>
      {/* {!id ? (
        <Players
          apiUrl={apiUrl}
          players={players}
          setPlayers={setPlayers}
          clickDetailHandler={clickDetailHandler}
        />
      ) : (
        <SinglePlayer apiUrl={apiUrl} id={id} />
      )} */}
    </>
  );
}

export default App;
