import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import TodoStore from './store/TodoStore'
import { configure } from 'mobx'

configure({
  enforceActions: true
})

class App extends Component {
  render() {
    return (
      <div>
        {TodoStore.todos.map(todo => 
          <div>
            {todo.name} | {todo.completed ? "Completo" : "Pendente"}
            <button onClick={() => TodoStore.completar(todo)}>Completar</button>
          </div>
        )}
        <div><a href="#" onClick={this.onClickAddTodo}>Adicionaaar</a></div>
        <div>Numero de todos: {TodoStore.length}</div>
      </div>
    );
  }

  onClickAddTodo() {
    TodoStore.addTodo('todo' + (TodoStore.length + 1))
  }
}

App = observer(App)

export default App;
