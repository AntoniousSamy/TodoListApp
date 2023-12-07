import { Text, View, TouchableOpacity, Image, Pressable, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import the auth object from your firebaseConfig.js file
import { routes, color } from "../constants";
import LogInStyle from "../style/LogInStyle";
import Input from "../components/UI/Input";
import FlatButton from "../components/UI/FlatButton";
import { useDispatch } from "react-redux";
import { setName, setImage } from "../redux/actions";
import FaceBookImage from "../assets/facebook.png";
import GoogleImage from "../assets/google.png";

const LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = () => {
    if (!userEmail || !password) {
      Alert.alert("Invalid input", "Please check your entered credentials.", [
        { text: "Okay", style: "cancel" },
      ]);
    } else {
      logIn(userEmail, password);
    }
  };

  const logIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, userEmail, password);
      const user = response.user;
      dispatch(setName(user.displayName));
      dispatch(setImage(user.photoURL));
      navigation.navigate(routes.HOME);
    } catch (error) {
      console.log(error);
      Alert.alert("Invalid input", "Invalid Email Or Password", [
        { text: "Okay", style: "cancel" },
      ]);
    }
  };

  return (
    <SafeAreaView style={LogInStyle.container}>
      <View style={LogInStyle.firstView}>
        <Text style={LogInStyle.header}>Hi Welcome Back! 👋</Text>
        <Text style={LogInStyle.firstText}>
          Hello again you have been missed!
        </Text>
        <View style={LogInStyle.inputs}>
          <Text style={LogInStyle.inputHeader}>Email address</Text>
          <Input
            name="Enter your email address"
            icon="envelope"
            color={color.grey}
            onChangeText={(e)=>setUserEmail(e)}
          />
          <Text style={LogInStyle.inputHeader}>Password</Text>
          <Input
            name="Enter your Password"
            icon="lock"
            pass={true}
            color={color.grey}
            onChangeText={(e)=>setPassword(e)}
          />
        </View>
        <View style={LogInStyle.buttonView}>
          <FlatButton
            text="LogIn"
            color={color.white}
            backgroundColor={color.blue}
            onPress={() => isValid()}
          />
        </View>
        <View style={LogInStyle.orSignUpBorder}>
          <View style={LogInStyle.line} />
          <Text style={{ fontSize: 14 }}>Or Login with</Text>
          <View style={LogInStyle.line} />
        </View>
        <View style={LogInStyle.accounts}>
          <TouchableOpacity style={LogInStyle.accountBtn}>
            <Image
              source={FaceBookImage}
              style={LogInStyle.image}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={LogInStyle.accountBtn}>
            <Image
              source={GoogleImage}
              style={LogInStyle.image}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={LogInStyle.lastBorder}>
          <Text style={{ fontSize: 16, color: color.black }}>
            Don't have an account ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate(routes.SIGNUP)}>
            <Text style={LogInStyle.lastText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
