import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Characters.scss";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://dragon-ball-super-api.herokuapp.com/api/characters");
      console.log(res);
      setCharacters(res.data);
    };

    getCharacters();
  }, []);
  return (
    <div className="characters--billboard">
      {characters &&
        characters.map((character, index) => {
            
          
          return (
            <div key={character.id} className="card">
              <h3>{character.name}</h3>
              <div className="img--container">
                <img src={character.imageUrl} alt={character.imageUrl} />
              </div>
              <p>{character.role}</p>
              <span>Universo:{character.universe === "0" ? "Por encima de todos" : character.universe}</span>
              <p>Especie: {character.specie}</p>
              <Link to={`/characters/${character.name}`}>ver mas</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Characters;