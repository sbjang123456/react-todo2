import { useCallback } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChnage = useCallback(
    (e) => {
      onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
    },
    [onUpdate, todo]
  );

  const handleDelete = useCallback(() => {
    onDelete(todo);
  }, [onDelete, todo]);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChnage}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
