import "./style.css";

const search = ({ inputSearch, setInputSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={inputSearch}
        placeholder="Search..."
        onChange={(ev) => setInputSearch(ev.target.value)}
      />
    </div>
  );
};
export default search;
