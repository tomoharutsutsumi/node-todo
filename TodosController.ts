import Todo from "./Todo.js";

export const addTodo = (): void => {
    const todo = new Todo({
        title: 'Awesome Post!3',
        detail: 'Test!3'
      });
    todo.save();
}


