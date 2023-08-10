import { useCallback, useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  const handleAdd = useCallback((todo) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  const handleUpdate = useCallback((updated) => {
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }, []);

  const handleDelete = useCallback((deleted) => {
    setTodos((prev) => prev.filter((t) => t.id !== deleted.id));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }

  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
