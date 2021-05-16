const Line = ({ character }) => {
  return (
    <div>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <span>{character.name}</span>
      <span>{character.description}</span>
    </div>
  );
};

export default Line;
