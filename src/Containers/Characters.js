import axios from "axios";
import { useState, useEffect, useHistory } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //   `https://marvel-backend-0.herokuapp.com/characters?apiKey=g8KZrFEfPmqoXUft`
          //   `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API}`
          "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=g8KZrFEfPmqoXUft"
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
    <p>Chargement des Personnages ...</p>
  ) : (
    <div className="containers">
      <h2>Personnages</h2>
      <div className="character">
        {data.results.map((character) => {
          return (
            <div>
              <div className="characterText">
                {character.comics.map((comicsId) => {
                  return (
                    <Link to={`/favorites/${comicsId}`}>
                      <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt="picsCharacters"
                      />
                      <h3>{character.name}</h3>
                      <span>{character.description}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* <Link to="/"> CLICCA QUI PER LA HOME </Link> */}
    </div>
  );
};

export default Characters;
