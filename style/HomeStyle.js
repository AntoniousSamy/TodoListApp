// HomeStyle.js

import { StyleSheet, Dimensions } from "react-native";
import color from "../constants/colors";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F7",
    flex: 1,
  },
  firstView: {
    paddingLeft: 16,
    backgroundColor: "#1d7798",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  imgTxt: {
    marginTop: "12%",
    flexDirection: "row",
    marginBottom: "5%",
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    opacity: 1,
    marginRight: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: color.white,
  },
  catView: {
    marginTop: "2%",
    flexDirection: "row",
    paddingLeft: 2,
    height: 80,
  },
  categoriesAndTodos: {
    flex: 1,
  },
  todosContainer: {
    marginHorizontal: "4%",
  },
  AddBtn: {
    position: "absolute",
    bottom: 8,
    right: 8,
    marginHorizontal: screenWidth * 0.05,
    marginVertical: screenHeight * 0.02,
  },
});

export default HomeStyle;
