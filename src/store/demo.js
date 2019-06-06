import { createStore } from "redux";

const initalState = {
  info: {
    '1': 'JavaScript',
    '2': 'Python',
    '4': 'Java',
    '5': 'Golang'
  }
}

// const action = {
//   type: 'SET3',
//   payload: { '3': 'nodejs' }
// }

const indexReducer = (state=initalState, action) => {
  const list = action.payload
  switch (action.type){
    case 'GET_LIST':
      state.list = list.map(val => ({id: val.id, phone: val.phone, pwd: val.password}))
      return state
    default:
      return state
  }
}


const indexStore = createStore(indexReducer)

// let unsubscribe = indexStore.subscribe(() => {})
    // console.log(indexStore.getState())

export default indexStore
