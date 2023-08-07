import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePlayer = ({ apiUrl, setChangesHappened }) => {
  const [playerInfo, setPlayerInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchSinglePlayer = async () => {
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();
        setPlayerInfo(data.data.player);
      };

      fetchSinglePlayer();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteHandler = () => {
    const deletePuppy = async () => {
      try {
        const response = await fetch(`${apiUrl}/${playerInfo.id}`, {
          method: "DELETE",
        });
        const data = await response.json();

        console.log(data);

        setChangesHappened(true);
      } catch (error) {
        alert(error);
      }
    };

    deletePuppy();
  };

  return (
    <>
      {playerInfo ? (
        <>
          <p id="playerHeader">
            <b>{playerInfo.name}</b> ({playerInfo.id})
          </p>
          <img src={playerInfo.imageUrl} />
          <p>
            <b>Breed</b>: {playerInfo.breed}
          </p>
          <p>
            <b>Status</b>: {playerInfo.status}
          </p>
          <p>
            <b>Team</b>:{" "}
            {playerInfo.team ? playerInfo.team.name : "Not on a team"}
          </p>
        </>
      ) : (
        "Loading..."
      )}

      <button>
        <Link to={"/"}>Home</Link>
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Button variant="contained" color="error" onClick={deleteHandler}>
        <Link to={"/"}>Delete</Link>
      </Button>
    </>
  );
};

export default SinglePlayer;
