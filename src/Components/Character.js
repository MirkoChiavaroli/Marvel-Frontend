const Character = ({ elem }) => {
  return (
    <div className="character">
      <h2>{elem.name}</h2>
      <span>{elem.description}</span>
      <img className="logo" src={elem.thumbnail.path} alt="picsCharacters" />
    </div>
  );
};

export default Character;
