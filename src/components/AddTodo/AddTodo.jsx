import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!text.trim().length) {
        return;
      }
      onAdd({ id: uuidv4(), text, status: "active" });
      setText("");
    },
    [text, onAdd]
  );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
      className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
