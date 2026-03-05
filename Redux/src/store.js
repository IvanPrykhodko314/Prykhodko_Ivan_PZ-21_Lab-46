import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { saveToLocalStorage } from "./middleware";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const preloadedState = {
  todos: savedTodos
};

export const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(saveToLocalStorage)
);