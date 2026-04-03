function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="brand">zomato</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Search restaurants or cuisine..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
