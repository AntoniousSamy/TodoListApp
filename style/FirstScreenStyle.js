import { StyleSheet } from "react-native";
import color from "../constants/colors";


const FirstScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    alignItems: "center",
  },
  textView: {
    marginTop: "15%",
  },
  header: {
    fontSize: 50,
    fontWeight: "600",
    color: color.water,
  },
  welText: {
    color: color.black,
    fontSize: 25,
    fontWeight: "500",
    justifyContent: "center",
  },
  desctiption: {
    color: color.grey,
    fontSize: 20,
    fontWeight: "600",
  },
  buttons: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"10%"
  },
  button: {
    width: "70%",
    paddingBottom: "6%",
  },
});
export default FirstScreenStyle;
