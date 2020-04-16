import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Navbar, Search } from './components/';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
