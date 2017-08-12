import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Confirm from './components/Confirm';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Confirm />
        {/* <h2>HelloWorld</h2> */}
      </MuiThemeProvider>
      // <h2></h2>
    );
  }
}

export default App;
