import React, { useEffect, useState } from "react";
import axios from "axios";

import apiClient from "../services/apiClient";

const Games = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    axios
    .get(apiClient('/games'))
    .then((res) => setGames(res.data.results))
    .catch(err=> setError(err.message));
  }, []);

  return <div>
    
  </div>;
};

export default Games;
