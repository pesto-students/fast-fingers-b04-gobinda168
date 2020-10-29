import React from "react";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { Game } from "./components/pages/game/game";
function App() {
  return (
    <AppProvider>
      <div className="bg">
        {/* <div className="App"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
        {/* </div> */}
      </div>
    </AppProvider>
  );
}

export default App;
