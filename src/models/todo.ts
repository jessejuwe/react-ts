class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = (Math.random() * 200000).toFixed(5);
  }
}

export default Todo;
