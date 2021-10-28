import Login from "./pages/Login/Login";
 import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Stream from "./pages/Stream/Stream";
function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/stream">
            <Stream />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
