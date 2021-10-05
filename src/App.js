import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Banner from "./component/banner";
import NovieCard from "./component/movieCategorie";
import NavbarInfo from "./component/NavbarInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [movieCategory, setMovieCategorie] = useState([]);

  const [categoryTitle, setCategoryTitle] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar />
            <Banner
              setMovieCategorie={setMovieCategorie}
              movieCategory={movieCategory}
              setCategoryTitle={setCategoryTitle}
            />
          </Route>
          <Route path="/card:card">
            <NavbarInfo
              movieCategory={movieCategory}
              setMovieCategorie={setMovieCategorie}
              setCategoryTitle={setCategoryTitle}
            />
            <NovieCard
              movieCategory={movieCategory}
              categoryTitle={categoryTitle}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
