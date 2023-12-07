// TodoStyle.js
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const TodoStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 8,
  },
  conent: {
    flexDirection: "row",
    paddingTop: "6%",
    paddingLeft: "3%",
    alignContent: "center",
  },
  discription: {
    marginLeft: "6%",
    maxHeight: '60%',
    maxWidth:'60%',
    flexWrap: 'wrap', 
  },
  text: {
    fontSize: 21,
    flexShrink: 1,
  },
  
  doneText: {
    fontSize: 21,
    textDecorationLine: "line-through",
    color: colors.grey,
  },
  txtAndDate: {
    flexDirection: "column",
  },
  imageStyle: {
    marginLeft: "2%",
    marginBottom: "20%",
    marginTop: "-3%",
  },
});

export default TodoStyle;
