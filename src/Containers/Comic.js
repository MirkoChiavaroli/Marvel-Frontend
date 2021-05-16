import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Comic = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/characters/?apiKey=g8KZrFEfPmqoXUft`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="characters">
      <h2>Personnages</h2>
      <div className="characterCard">
        {data.comics.map((comic) => {
          return (
            <div className="characterLink">
              {comic.thumbnail ? (
                <div className="comicPics">
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comic;
