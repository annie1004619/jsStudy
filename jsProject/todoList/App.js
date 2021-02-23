function App($target, initialState) {
  this.state = initialState;
  this.todoInput = new TodoInput({
    $app,
    onAddTodo: (text) => {
      this.state = [
        ...this.state,
        {
          text,
          isCompleted: false,
        },
      ];

      this.todoList.setState(this.state);
    },
  });
  this.todoList = new TodoList($target, this.state);
}
