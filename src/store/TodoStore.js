import { observable, computed, decorate, action } from 'mobx'

class TodoStore {
    todos = []

    constructor() {
        this.addTodo('todo1')
        this.addTodo('todo2')
    }

    addTodo(name) {
        this.todos.push({
            name,
            completed: false
        })
    }

    completar(todo) {
        todo.completed = true;
    }

    get length() {
        return this.todos.length
    }
}

decorate(TodoStore, {
    todos: observable,
    addTodo: action,
    length: computed,
    completar: action
})

export default new TodoStore()