import React, { Component } from "react";

import "./App.css";
import AllPages from "./pages";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllPages />
      </div>
    );
  }
}

export default App;
