import { StyleSheet } from "react-native";
import color from "../constants/colors";
const SignUpStyle = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  firstView: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: "14%",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: color.black,
  },
  firstText: {
    fontSize: 16,
    color: color.black,
  },
  inputs: {
    marginTop: "10%",
  },
  inputHeader: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  imageBtnStyle:{
    backgroundColor: color.blue,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
  },
  buttonView: {
    marginTop: "10%",
  },
  orSignUpBorder: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: color.grey,
    marginHorizontal: 10,
  },
  accounts: {
    flexDirection: "row",
    justifyContent: "center",
  },
  accountBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: color.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  image: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  lastBorder: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  lastText: {
    fontSize: 16,
    color: color.bgColor,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default SignUpStyle;
