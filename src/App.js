import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
