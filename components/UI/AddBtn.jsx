import { Pressable, StyleSheet } from "react-native";
import React from "react";

const AddBtn = ({ onPress,iconComponent}) => {
  return (
    <Pressable style={styles.border} onPress={onPress}>
      {/* <Icon name={'plus'} size={30} color={"#ffffff"} /> */}
      {iconComponent}
    </Pressable>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  border: {
    backgroundColor: "#0094FE",
    width: 55,
    height: 55,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
