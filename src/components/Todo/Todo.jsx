import { useCallback } from "react";
import { FaTrashAlt } from "react-icons/fa";
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
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChnage}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
