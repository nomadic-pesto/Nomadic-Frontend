<<<<<<< HEAD
import React, { Component } from "react";

import "./App.css";
import AllPages from "./pages";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "font-awesome/css/font-awesome.min.css";

//importing MUI
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Creating theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#3c88f180',
      main: '#3c88f1d9',
      dark: '#3c88f1',
      contrastText: '#fff',
    },
    danger: {
      light: '#DF736E',
      main: '#DF736E',
      dark: '#DF736E',
      contrastText: '#fff',
    },
    success:{
      light: '#30CC7E',
      main: '#30CC7E',
      dark: '#30CC7E',
      contrastText: '#fff',
    }
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <AllPages />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
=======
import React, { Component } from "react";

import "./App.css";
import AllPages from "./pages";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "font-awesome/css/font-awesome.min.css";

//importing MUI
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Creating theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#3c88f180',
      main: '#3c88f1d9',
      dark: '#3c88f1',
      contrastText: '#fff',
    },
    danger: {
      light: '#DF736E',
      main: '#DF736E',
      dark: '#DF736E',
      contrastText: '#fff',
    },
    success:{
      light: '#30CC7E',
      main: '#30CC7E',
      dark: '#30CC7E',
      contrastText: '#fff',
    }
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <AllPages />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
>>>>>>> 176447a (login integration done)
