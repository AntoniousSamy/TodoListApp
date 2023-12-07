import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";
const screenWith = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const CatModal = ({ visible, closeModal, onSelectCategory }) => {
  const { categories } = useSelector((state) => state.userReducer);

  if (!visible) {
    return null;
  }

  return (
    <Modal transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.overlay} onPress={closeModal} />
        <View style={styles.modalContent}>
          <View style={{ flexDirection: "column" }}>
            {categories.map(
              (category) =>
              category.id !== 1 && (
                  <TouchableOpacity
                    key={category.id}
                    style={{ flexDirection: "row" }}
                  >
                    <MaterialIcons
                      name={category.icon}
                      size={25}
                      color={category.color} 
                    />
                    <Text
                      style={styles.categoryText}
                      onPress={() => onSelectCategory(category)}
                    >
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                )
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CatModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    width: "35%",
    height: "25%",
    marginBottom: screenHeight * 0.15,
    marginLeft: "4%",
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 14,
    fontWeight: "300",
    marginLeft:'2%'
  },
});
