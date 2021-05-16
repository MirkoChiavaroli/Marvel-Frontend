import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Search from "../Components/Search";
import LineComics from "../Components/LineComics";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(100);
  const [result, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=g8KZrFEfPmqoXUft&limit=${limit}&skip=${skip}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
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
          break;
        }
      }
    }
    setResults(newResults);
  };

  return isLoading ? (
    <p>Comics are loading ...</p>
  ) : (
    <div className="containers">
      <div className="search">
        <Search handleSearch={handleSearch} />
        {result.map((comics, index) => {
          return <LineComics key={index} comics={comics} />;
        })}
        <h2> COMICS </h2>
        <div className="buttonSkip">
          <button
            onClick={() => {
              skip > 0 && setSkip(skip - limit);
            }}
          >
            ◀️ PAG
          </button>
          <button
            onClick={() => {
              setSkip(skip + limit);
            }}
          >
            PAG ▶️
          </button>
        </div>
      </div>

      <div className="comics">
        {data.results.map((comic) => {
          return (
            <div className="comicsCard">
              <img
                className="comicsImg"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.name}
              />
              <div>
                <p className="comicsName">{comic.name}</p>
                <p className="comicsText">{comic.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Link to="/"> CLICCA QUI PER LA HOME </Link> */}
    </div>
  );
};

export default Comics;
