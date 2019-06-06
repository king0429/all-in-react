import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Table from './page/table.js';
import Detail from './page/detail.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">
                <span>Index</span>
              </Link>
            </li>
            <li>
              <Link to="/document">
                <span>Document</span>
              </Link>
            </li>
            <li>
              <span>Libary</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
            <li>
              <span>Others</span>
            </li>
          </ul>
          <Route exact path="/" key="1" component={Table}></Route>
          <Route exact path="/document" key="2" component={Detail}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
