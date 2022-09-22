import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { userAction } from "./actions/userAction";
import AllPages from "./pages";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  };

  render() {
  
    return (
      <div className="App">
        <AllPages />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(userAction()),
});

// export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
