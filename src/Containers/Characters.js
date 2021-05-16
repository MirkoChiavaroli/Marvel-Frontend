import axios from "axios";
import { useState, useEffect } from "react";

import Search from "../Components/Search";
import Line from "../Components/Line";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [characters, setCharacters] = useState(0);
  const [result, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=g8KZrFEfPmqoXUft&limit=${limit}&skip=${skip}`
        );

        setData(response.data);
        setCharacters(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [limit, skip]);

  const handleSearch = (event) => {
    const newResults = [];
    for (let i = 0; i < data.results.length; i++) {
      if (
        data.results[i].name.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length <= 100) {
          newResults.push(data.results[i]);
        } else {
          break; // sortir de la boucle
        }
      }
    }
    setResults(newResults);
  };

  return isLoading ? (
    <p>Characters are loading...</p>
  ) : (
    <main>
      <div className="search">
        <Search handleSearch={handleSearch} />
        {result.map((character, index) => {
          return <Line key={index} character={character} />;
        })}
        <h2> CHARACTERS </h2>
        <div className="buttonSkip">
          <button
            onClick={() => {
              skip > 0 && setSkip(skip - limit);
            }}
          >
            ◀️ PAG
          </button>
          <button
            className="charactersButtonRight"
            onClick={() => {
              setSkip(skip + limit);
            }}
          >
            PAG ▶️
          </button>
        </div>
      </div>

      <div className="charactersCard">
        {data.results.map((character) => {
          return (
            <div
              to={`/comic/${character._id}`}
              key={character._id}
              className="charactersLink"
            >
              {character.thumbnail ? (
                <div className="charactersImg">
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                </div>
              ) : null}
              <div className="charactersDetails">
                {character.name ? (
                  <span className="charactersName">{character.name}</span>
                ) : null}
                {character.description ? (
                  <p className="charactersText">{character.description}</p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Characters;
