import axios from "axios";
import { useState, useEffect } from "react";

import Comics from "../Containers/Comics";

const Favorites = ({ comicsId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=g8KZrFEfPmqoXUft`
      );
      setData(response.data);
      //console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [comicsId]);
  return isLoading ? (
    <p>Chargement des Personnages ...</p>
  ) : (
    <div>
      <h4>{comic.name}</h4>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.name}
      />
    </div>
  );
};

export default Favorites;
