import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Home from "../views/home/Home";
import Player from "../views/player/Player";
import style from "./app.css";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root" class={style.root}>
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <Route path="/player/:movie" component={Player} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
