"use client";

import { useState, FormEvent } from "react";
import { useTodos } from "@/hooks/useTodos";
import { TodoItem } from "./TodoItem";
import styles from "./TodoApp.module.css";

export function TodoApp() {
  const { todos, loaded, remaining, addTodo, toggleTodo, deleteTodo } =
    useTodos();
  const [input, setInput] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addTodo(input);
    setInput("");
  }

  if (!loaded) {
    return <div className={styles.container}>読み込み中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TODO</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="新しいタスクを入力..."
          className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
          追加
        </button>
      </form>

      {todos.length === 0 ? (
        <p className={styles.empty}>タスクはありません</p>
      ) : (
        <>
          <ul className={styles.list}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
          <p className={styles.count}>残り {remaining} 件</p>
        </>
      )}
    </div>
  );
}
