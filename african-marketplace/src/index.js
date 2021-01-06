import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import siteTheme from './components/styledComponents/SiteTheme';

ReactDOM.render(
  <ThemeProvider theme={siteTheme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
