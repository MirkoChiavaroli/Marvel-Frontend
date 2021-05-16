const Search = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="search your..." />
      {/* img en absolute */}
    </div>
  );
};

export default Search;
