import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import router from './router'
import './theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ul>
            {
              router.map((val, index) => {
                if (val.meta.nav) {
                  return (
                    <li key={index}>
                      <Link to={val.path}>
                        <span>{val.meta.title}</span>
                      </Link>
                    </li>
                  )
                }
                return false
              })
            }
          </ul>
          {
            router.map((val, index) => {
              return (<Route exact path={val.path} key={index} component={val.component}></Route>)
            })
          }
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
