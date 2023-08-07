import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePlayer = ({ apiUrl }) => {
  const [playerInfo, setPlayerInfo] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchSinglePlayer = async () => {
        const response = await fetch(`${apiUrl}/${id}`)
        const data = await response.json();
        setPlayerInfo(data.data.player)
      };

      fetchSinglePlayer();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {
      playerInfo ? (
        <>
          <p id="playerHeader"><b>{playerInfo.name}</b> ({playerInfo.id})</p>
      <img src={playerInfo.imageUrl} />
      <p><b>Breed</b>: {playerInfo.breed}</p>
      <p><b>Status</b>: {playerInfo.status}</p>
      <p><b>Team</b>: {playerInfo.team ? playerInfo.team.name : "Not on a team"}</p>
        </>
      ) : "Loading..."
      }

      <button>
        <Link to={"/"}>Home</Link>
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <button>Delete</button>
    </>
  );
}

export default SinglePlayer;
