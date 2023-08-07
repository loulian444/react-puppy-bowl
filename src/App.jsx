import Router from "./components/Router.jsx";
import "./App.css";
import Form from "./components/Form.jsx";

function App() {
  const apiUrl =
    "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players";

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Form apiUrl={apiUrl} />
      <Router apiUrl={apiUrl} />
    </>
  );
}

export default App;
