"use client";

import { Todo } from "@/types/todo";
import styles from "./TodoItem.module.css";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ""}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        <span className={styles.title}>{todo.title}</span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className={styles.deleteButton}
        aria-label={`${todo.title}を削除`}
      >
        ✕
      </button>
    </li>
  );
}
