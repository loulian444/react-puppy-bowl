import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Form from "./Form.jsx";

const Players = ({ apiUrl, changesHappened, setChangesHappened }) => {
  const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    try {
      const fetchPuppies = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setPlayers(data.data.players);
      };

      fetchPuppies();
      setShowForm(false);
    } catch (error) {
      alert(error);
    }
  }, [changesHappened]);


  const clickHandler = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  return (
    <>
      <button onClick={clickHandler}>Add New Puppy</button>
      {showForm ? (
        <Form apiUrl={apiUrl} setChangesHappened={setChangesHappened} />
      ) : null}

      <section id="playersSection">
        <Grid container spacing={2}>
          {players.map((player) => {
            return (
              <Grid item key={player.id} xs={3}>
                <section className="playerSection flex">
                  <section id={player.id} className="detailButtonSection flex">
                    <p>{player.name}</p>
                    <button onClick={() => navigate(`/player/${player.id}`)}>
                      Details
                    </button>
                  </section>
                  <img className="thumbnail" src={player.imageUrl} />
                </section>
              </Grid>
            );
          })}
        </Grid>
      </section>
    </>
  );
};

export default Players;
