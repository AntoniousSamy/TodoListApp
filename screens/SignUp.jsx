import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import the auth object from your firebaseConfig.js file
import * as ImagePicker from "expo-image-picker";
import FlatButton from "../components/UI/FlatButton";
import Input from "../components/UI/Input";
import SignUpStyle from "../style/SignUpStyle";
import { routes, color } from "../constants";
import FaceBookImage from "../assets/facebook.png";
import GoogleImage from "../assets/google.png";

const SignUp = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length > 6;

  const signUp = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      await updateUser();
      console.log("First", user);
      navigation.navigate(routes.LOGIN);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle the error
    }
  };

  const updateUser = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: image,
      });
      console.log("Profile updated successfully");
    } catch (error) {
      console.log("Error updating profile", error);
    }
  };

  const isValid = () => {
    if (!email || !password || !displayName) {
      Alert.alert("Invalid input", "Please check your entered credentials.", [
        { text: "Okay", style: "cancel" },
      ]);
    } else if (!emailIsValid) {
      Alert.alert("Invalid input", "Invalid Email", [
        { text: "Okay", style: "cancel" },
      ]);
    } else if (!passwordIsValid) {
      Alert.alert("Invalid input", "Min Password Length 6", [
        { text: "Okay", style: "cancel" },
      ]);
    } else {
      signUp(email, password);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <KeyboardAwareScrollView style={SignUpStyle.container}>
      <View style={SignUpStyle.firstView}>
        <Text style={SignUpStyle.header}>Create Account</Text>
        <View style={SignUpStyle.inputs}>
          <Text style={SignUpStyle.inputHeader}>Email address</Text>
          <Input
            name="Enter your email address"
            icon="envelope"
            color={color.grey}
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
          <Text style={SignUpStyle.inputHeader}>UserName</Text>
          <Input
            name="Enter your name"
            icon="user"
            color={color.grey}
            onChangeText={(e) => {
              setDisplayName(e);
            }}
          />
          <Text style={SignUpStyle.inputHeader}>Password</Text>
          <Input
            name="Enter your Password"
            icon="lock"
            pass={true}
            color={color.grey}
            onChangeText={(e) => {
              setPassword(e);
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={SignUpStyle.textHeader}>Profile Image</Text>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100 }}
            />
          )}
          <Pressable style={SignUpStyle.imageBtnStyle} onPress={pickImage}>
            <Text style={{ color: color.white }}>Pick Image</Text>
          </Pressable>
        </View>
        <View style={SignUpStyle.buttonView}>
          <FlatButton
            text="SignUp"
            color={color.white}
            backgroundColor={color.blue}
            onPress={() => isValid()}
          />
        </View>

        <View style={SignUpStyle.orSignUpBorder}>
          <View style={SignUpStyle.line} />
          <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
          <View style={SignUpStyle.line} />
        </View>
        <View style={SignUpStyle.accounts}>
          <TouchableOpacity style={SignUpStyle.accountBtn}>
            <Image
              source={FaceBookImage}
              style={SignUpStyle.image}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={SignUpStyle.accountBtn}>
            <Image
              source={GoogleImage}
              style={SignUpStyle.image}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={SignUpStyle.lastBorder}>
          <Text style={{ fontSize: 16, color: color.black }}>
            Already have an account ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate(routes.LOGIN)}>
            <Text style={SignUpStyle.lastText}>LogIn</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
