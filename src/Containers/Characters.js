import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Character from "../Components/Character";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-0.herokuapp.com/"
        );
        // console.log(response.data);
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
            <div>
              <Character elem={elem} />
            </div>
          );
        })}
      </div>
      <Link to="/"> CLICCA QUI PER LA HOME </Link>
    </div>
  );
};

export default Characters;
