import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SinglePlayer = ({ apiUrl, id }) => {
  const [playerInfo, setPlayerInfo] = useState(0);

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

  console.log(playerInfo)

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

      <Link to={"/"}>Home</Link>
    </>
  );
}

export default SinglePlayer;
