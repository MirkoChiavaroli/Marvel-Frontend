import axios from "axios";
import { useState, useEffect } from "react";

const Favorites = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/character`
      );
      setData(response.data);
      //console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Chargement des Personnages ...</p>
  ) : (
    <div>
      <p className="favorites">COME BACK IN 3 WEEKS ...</p>
    </div>
  );
};

export default Favorites;
