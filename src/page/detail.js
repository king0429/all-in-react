import React, { Component } from 'react';
import store from '../store/demo.js'

class listDetail extends Component {
  constructor () {
    super()
    this.state = this.initialState()
  }
  initialState () {
    return {
      detail: {}
    }
  }
  componentWillMount () {
    console.log(store.getState())
  }
  render () {
    return (
      <div className="show_table">
        <p>
          <span>id</span>
          <span>{this.state.detail.id}</span>
        </p>
        <p>
          <span>_id</span>
          <span>{this.state.detail._id}</span>
        </p>
        <p>
          <span>phone</span>
          <span>{this.state.detail.phone || 'unsigned'}</span>
        </p>
        <p>
          <span>email</span>
          <span>{this.state.detail.email || 'unsigned'}</span>
        </p>
      </div>
    )
  }
}
export default listDetail
