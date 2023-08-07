import Players from "./Players.jsx";
import SinglePlayer from "./SinglePlayer";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  const apiUrl =
    "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players";

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Players apiUrl={apiUrl} />
        }
      />
      <Route path="/player/:id" element={<SinglePlayer apiUrl={apiUrl} />} />
    </Routes>
  );
};

export default Router;
