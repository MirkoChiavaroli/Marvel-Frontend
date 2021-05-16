const LineComics = ({ comics }) => {
  return (
    <div>
      <img
        src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
        alt={comics.name}
      />
      <span>{comics.name}</span>
    </div>
  );
};

export default LineComics;
