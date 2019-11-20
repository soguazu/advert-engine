import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ width: "100%", padding: "0px 15px" }}>
          <Route path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;