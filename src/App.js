import React, { Component } from 'react'
import TodoListUsingClass from './todo/todoListUsingClass'
import Counter from './todo/counter'

export default class App extends Component {


  render() {
    return (
      <>
        <Counter display="this is my counter" />
        {/* <TodoListUsingClass /> */}
      </>
    )
  }
}
