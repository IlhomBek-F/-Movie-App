import React, { useState } from "react";

function NavbarCategories() {
  const [value, setValue] = useState();

  const handleSearch = () => {
    return console.log("hello");
  };
  return (
    <div className="categories">
      <div className="container">
        <div className="content">
          <h1>Categories</h1>
          <ul>
            <li id="rated">Top Rated</li>
            <li id="action">Action</li>

            <li id="trending">Trending</li>

            <li id="horror">Horror</li>

            <li id="romance">Romance</li>

            <li id="documentary">Documentary</li>
          </ul>
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="search movie"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarCategories;
