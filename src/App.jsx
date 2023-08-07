import Router from "./components/Router.jsx";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link id="bigHeader" to={"/"}>Puppy Bowl</Link>
      <br />
      <br />
      <Router />
    </>
  );
}

export default App;
