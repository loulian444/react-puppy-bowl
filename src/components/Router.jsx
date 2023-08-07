import { useEffect, useState } from "react";
import Players from "./Players.jsx";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  const apiUrl =
    "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players";

  const [changesHappened, setChangesHappened] = useState(false);

  useEffect(() => {
    setChangesHappened(false);
  }, [changesHappened]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Players
            apiUrl={apiUrl}
            changesHappened={changesHappened}
            setChangesHappened={setChangesHappened}
          />
        }
      />
      <Route
        path="/player/:id"
        element={
          <SinglePlayer
            apiUrl={apiUrl}
            setChangesHappened={setChangesHappened}
          />
        }
      />
    </Routes>
  );
};

export default Router;
