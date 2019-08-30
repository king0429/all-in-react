import React, { Component } from 'react';
import axios from 'axios';
import store from '../store/demo.js'
import { Table } from 'antd'

class innerTable extends Component {
  constructor () {
    super()
    this.state = this.initialState()
  }
  initialState () {
    return {
      list: [],
      title: 'hello'
    }
  }
  componentWillMount () {
    const that = this
    axios.get('/table').then(res => {
      console.log(res)
      if (res.status === 200) {
        function GET_LIST(payload) {
          return {
            type: 'GET_LIST',
            payload
          }
        }
        store.dispatch(GET_LIST(res.data.a));
        that.setState({list: store.getState().list})
        // that.setState({title: str.replace('koa2', 'react')})
      }
    })
  }
  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: 'password',
        dataIndex: 'pwd',
        key: 'pwd'
      },
    ]
    return (
      <div className="show_table">
        <p>{this.state.title}</p>
        <Table dataSource={this.state.list} columns={columns} center={true}></Table>
      </div>
    )
  }
}
export default innerTable
