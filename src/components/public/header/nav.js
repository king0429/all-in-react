import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from '../../../router'
import './nav.css';

class Nav extends Component {
  constructor () {
    super()
  }
  render () {
    return (
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
    )
  }
}

export default Nav;
