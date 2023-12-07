import React, { useState, useEffect } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setToggleFilter } from "../redux/actions";
import HomeStyle from "../style/HomeStyle";
import Categories from "../components/categories/Categories";
import TodosForm from "../components/todos/TodosForm";
import AddBtn from "../components/UI/AddBtn";
import Todos from "../components/todos/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const dispatch = useDispatch();
  const { name, image, categories, visible } = useSelector(
    (state) => state.userReducer
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryPress = (categoryName) => {
    setSelectedCategory(categoryName.name || "All");
  };

  const toggleTodoForm = () => {
    dispatch(setToggleFilter(!visible));
  };
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.firstView}>
        <View style={HomeStyle.imgTxt}>
          <Image
            source={image ? { uri: image } : require("../assets/OIP.png")}
            style={HomeStyle.imageStyle}
          />
          <Text style={HomeStyle.header}>Hello {name} </Text>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={HomeStyle.catView}
        >
          {categories.map((category) => (
            <Categories
              key={category.id}
              name={category.name}
              onPress={() => handleCategoryPress(category)}
              isSelected={selectedCategory === category.name}
              colorText={selectedCategory === category.name}
            />
          ))}
        </ScrollView>
      </View>

      <View style={HomeStyle.categoriesAndTodos}>
        <View>
          <ScrollView
            style={HomeStyle.todosContainer}
            showsVerticalScrollIndicator={false}
          >
            <Todos
              style={{ marginBottom: 12 }}
              selectedCategory={selectedCategory}
            />
          </ScrollView>
        </View>

        {!visible && (
          <View style={HomeStyle.AddBtn}>
            <AddBtn
              onPress={() => toggleTodoForm()}
              iconComponent={
                <FontAwesomeIcon name="plus" size={30} color="#ffffff" />
              }
            />
          </View>
        )}
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <TodosForm visible={visible} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
