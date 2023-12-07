import React, { useState } from "react";
import { View, TextInput, Alert, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setToggleFilter, setTodo, setTodoImage } from "../../redux/actions";
import { MaterialIcons } from "@expo/vector-icons";
import TodosFormStyle from "./TodosFormStyle";
import Categories from "../categories/Categories";
import CatModal from "../UI/CatModal";
import AddBtn from "../UI/AddBtn";
import CameraModal from "../UI/CameraModal";
import ImageLightbox from "../UI/ImageLightbox";
import colors from "../../constants/colors";

const TodosForm = () => {
  const dispatch = useDispatch();
  const { visible, todo, todoImage } = useSelector(
    (state) => state.userReducer
  );
  const [selectedCategory, setSelectedCategory] = useState({
    name: "No Category",
  });
  const [TodoText, setTodoText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setIsVisible(false);
  };

  const toggleTodoForm = () => {
    if (!TodoText.trim()) {
      Alert.alert("Sorry", "Please Add Todo...");
      return;
    }

    const newTodo = {
      id: new Date().getTime().toString(),
      title: TodoText,
      category: selectedCategory.name,
      image: todoImage,
    };

    dispatch(setTodo([...todo, newTodo]));
    setTodoText("");

    dispatch(setTodoImage(null));

    dispatch(setToggleFilter(!visible, selectedCategory));

    setIsVisible(false);
  };

  if (!visible) {
    return null;
  }
  return (
    <View style={TodosFormStyle.container}>
      <CameraModal
        isVisible={isCameraModalVisible}
        onClose={() => setCameraModalVisible(false)}
      />

      <View style={TodosFormStyle.txtView}>
        <TextInput
          style={TodosFormStyle.txtInput}
          placeholder="Input new task here"
          placeholderTextColor={"#D3DBDF"}
          onChangeText={(text) => setTodoText(text)}
        />
      </View>
      <View style={TodosFormStyle.filter}>
        <CatModal
          visible={isVisible}
          closeModal={() => setIsVisible(false)}
          onSelectCategory={handleCategoryPress}
        />
        <Categories
          name={selectedCategory.name}
          onPress={() => setIsVisible(true)}
          colorText={selectedCategory.name !== "ALL"}
        />
        <View style={{ flexDirection: "row", marginLeft: "2%" }}>
          <TouchableOpacity
            style={{ justifyContent: "center", alignContent: "center" }}
            onPress={() => setCameraModalVisible(true)}
          >
            <MaterialIcons name="photo-camera" size={25} color={colors.grey} />
          </TouchableOpacity>
          <View style={{ marginLeft: "40%" }}>
            {todoImage ? <ImageLightbox image={todoImage} /> : null}
          </View>
        </View>
        <View style={TodosFormStyle.btn}>
          <AddBtn
            onPress={toggleTodoForm}
            iconComponent={
              <MaterialIcons name="done" size={30} color={colors.white} />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default TodosForm;