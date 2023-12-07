import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = ({ selectedCategory }) => {
  const { todo } = useSelector((state) => state.userReducer);

  const filteredTodos =
    selectedCategory && selectedCategory !== "All"
      ? todo.filter((todoItem) => todoItem.category === selectedCategory)
      : todo;

  return (
    <View>
      {filteredTodos.map((todoItem) => (
        <Todo key={todoItem.id} text={todoItem.title} image={todoItem.image} />
      ))}
    </View>
  );
};

export default Todos;
