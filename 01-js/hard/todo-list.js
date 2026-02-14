/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {

  constructor() {
    this.tasks = [];
  }

  // add task
  add(task) {
    this.tasks.push(task);
  }

  // return all tasks
  getAll() {
    return this.tasks;
  }

  // get single task
  get(index) {
    if (index < 0 || index >= this.tasks.length) {
      return null;   
    }
    return this.tasks[index];
  }

  // update task
  update(index, newTask) {
    if (index < 0 || index >= this.tasks.length) {
      return;   
    }
    this.tasks[index] = newTask;
  }

  // remove task
  remove(index) {
    if (index < 0 || index >= this.tasks.length) {
      return;   
    }
    this.tasks.splice(index, 1);
  }

  // clear all tasks
  clear() {
    this.tasks = [];
  }

}

module.exports = Todo;


