import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bonus.css"; // import CSS file

const Bonus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || {}
  );

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://registry.npmjs.org/-/v1/search?text=${searchTerm}&size=10`
    );
    setSearchResults(response.data.objects);
  };

  const handleFavorite = (packageName, description) => {
    setFavorites({ ...favorites, [packageName]: description });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="search-results">
        {searchResults.map((result) => (
          <li key={result.package.name}>
            <h3>{result.package.name}</h3>
            <p>{result.package.description}</p>
            <button onClick={() => handleFavorite(result.package.name, "")}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
      <h2>Favorite Packages</h2>
      <ul className="favorites">
        {Object.keys(favorites).map((packageName) => (
          <li key={packageName}>
            <h3>{packageName}</h3>
            <p>{favorites[packageName]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bonus;
