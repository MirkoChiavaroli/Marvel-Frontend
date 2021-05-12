import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-0.herokuapp.com/"
          //   `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API}`
          //   `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=g8KZrFEfPmqoXUft`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Character is loading ...</p>
  ) : (
    <div className="character">
      <h2>Personagges</h2>
      <div className="characterCard">
        {data.results.map((elem) => {
          return (
            <div className="character">
              <h2>{elem.name}</h2>
              <span>{elem.description}</span>
              <img
                className="logo"
                src={elem.thumbnail.path}
                alt="picsCharacters"
              />
            </div>
          );
        })}
      </div>
      <Link to="/"> CLICCA QUI PER LA HOME </Link>
    </div>
  );
};

export default Characters;
