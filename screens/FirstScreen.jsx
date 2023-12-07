import { View, Text, Image } from "react-native";
import FirstScreenStyle from "../style/FirstScreenStyle";
import todoPerson from "../assets/todoPerson.png";
import FlatButton from "../components/UI/FlatButton";
import {routes,color} from '../constants';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={FirstScreenStyle.container}>
      <View style={FirstScreenStyle.textView}>
        <Text style={FirstScreenStyle.header}>Todo List</Text>
      </View>
      <View style={FirstScreenStyle.FirstImage}>
        <Image source={(require = todoPerson)} />
      </View>
      <View>
        <Text style={FirstScreenStyle.welText}>Welcome to todo </Text>
      </View>
      <View>
        <Text style={FirstScreenStyle.desctiption}>
          {"   "}Todo app will help you to stay{"\n"}
          {"      "}organized and perform your{"\n"}
          {"             "}task much faster.
        </Text>
      </View>
      <View style={FirstScreenStyle.buttons}>
        <View style={FirstScreenStyle.button}>
        <FlatButton text="Sign Up" onPress={()=>{navigation.navigate(routes.SIGNUP)}}  color={color.white} backgroundColor={color.primary} />
        </View>
        <View style={FirstScreenStyle.button}>
        <FlatButton text="LogIn" onPress={() => navigation.navigate(routes.LOGIN)} color={color.white} backgroundColor={color.secondary} />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;
