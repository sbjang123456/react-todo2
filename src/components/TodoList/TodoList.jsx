import { useCallback, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAdd = useCallback((todo) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  const handleUpdate = useCallback((updated) => {
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }, []);

  const handleDelete = useCallback((deleted) => {
    setTodos((prev) => prev.filter((t) => t.id !== deleted.id));
  }, []);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section>
      <ul>
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
