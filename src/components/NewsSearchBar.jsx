const NewsSearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search news..."
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default NewsSearchBar;
