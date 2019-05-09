const key = "todo-list";
export default {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(item => !item.complated);
  },
  complated(todos) {
    return todos.filter(item => item.complated);
  },
  getTodos() {
    return JSON.parse(localStorage.getItem(key) || "");
  },
  save(todos) {
    localStorage.setItem(key, JSON.stringify(todos));
  }
};
