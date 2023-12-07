// Todo.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import ImageLightbox from "../UI/ImageLightbox";
import TodoStyle from "./TodoStyle";
import colors from "../../constants/colors";

const Todo = ({ text, image }) => {
  const [isCompleted, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!isCompleted);
  };

  return (
    <View style={TodoStyle.container}>
      <View style={TodoStyle.conent}>
        <TouchableOpacity onPress={toggleCompletion}>
          {isCompleted ? (
            <Ionicons name="checkmark-circle-sharp" size={28} color="#4ef59d" />
          ) : (
            <Feather name="circle" size={26} color={colors.grey} />
          )}
        </TouchableOpacity>
        <ScrollView style={TodoStyle.discription} showsVerticalScrollIndicator={false} >
          <Text style={isCompleted ? TodoStyle.doneText : TodoStyle.text}>
            {text}
          </Text>
        </ScrollView>
        <View style={TodoStyle.imageStyle}>
          {image && <ImageLightbox image={image} />}
        </View>
      </View>
    </View>
  );
};

export default Todo;
