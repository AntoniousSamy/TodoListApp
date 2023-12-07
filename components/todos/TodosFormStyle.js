import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TodosFrom = StyleSheet.create({
  container: {
    width: screenWidth,
    backgroundColor: colors.white,
    height: screenHeight * 0.20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    
  },
  txtView: {
    padding: "8%",
  },
  txtInput: {
    fontSize: 20,
  },
  filter: {
    flexDirection: "row",
    marginLeft: '4%',
    alignItems: "center",
  },
  btn: {
    flex: 1, 
    alignItems: "flex-end", 
    marginRight: '4%', 
  },
});

export default TodosFrom;
