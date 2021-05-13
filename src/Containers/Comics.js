import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //   `https://marvel-backend-0.herokuapp.com/characters?apiKey=g8KZrFEfPmqoXUft`
          //   `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API}`
          `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=g8KZrFEfPmqoXUft`
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
    <p>Chargement des Comics ...</p>
  ) : (
    <div className="containers">
      <h2>Comics</h2>
      <div className="comics">
        {data.results.map((comic) => {
          return (
            <div className="comicsCard">
              <div className="comicsText">
                <h4>{comic.name}</h4>
                <span>{comic.description}</span>
              </div>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.name}
              />
            </div>
          );
        })}
      </div>
      {/* <Link to="/"> CLICCA QUI PER LA HOME </Link> */}
    </div>
  );
};

export default Comics;
