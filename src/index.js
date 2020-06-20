import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "src/components/Home";

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
