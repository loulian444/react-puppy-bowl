import { useEffect } from "react";
import Grid from "@mui/material/Grid";

const Players = ({ players, setPlayers }) => {
  const apiUrl =
    "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players";

  useEffect(() => {
    const fetchPuppies = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setPlayers(data.data.players);
    };

    fetchPuppies();
  }, []);


  return (
    <section id="playersSection">
        <Grid container spacing={2}>
          {players.map((player) => {
            return (
              <Grid item key={player.id} xs={3}>
                <section className="playerSection flex">
                  <section className="detailButtonSection flex">
                    <p>{player.name}</p>
                    <button>Details</button>
                  </section>
                  <img src={player.imageUrl} />
                </section>
              </Grid>
            );
          })}
        </Grid>
      </section>
  );
}

export default Players;
