import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Form from "./Form.jsx";

const Players = ({ apiUrl, changesHappened, setChangesHappened }) => {
  const [players, setPlayers] = useState([]);

  console.log(changesHappened);

  console.log(players);
  useEffect(() => {
    try {
      const fetchPuppies = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setPlayers(data.data.players);
      };

      fetchPuppies();
    } catch (error) {
      alert(error);
    }
  }, [changesHappened]);

  return (
    <>
      <Form apiUrl={apiUrl} setChangesHappened={setChangesHappened} />

      <section id="playersSection">
        <Grid container spacing={2}>
          {players.map((player) => {
            return (
              <Grid item key={player.id} xs={3}>
                <section className="playerSection flex">
                  <section id={player.id} className="detailButtonSection flex">
                    <p>{player.name}</p>
                    <button>
                      <Link to={`/player/${player.id}`}>Details</Link>
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
