import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl5N3W11Rd9hxA-WsYj9UjcdZWUSKXjKk",
  authDomain: "todoapp-c2753.firebaseapp.com",
  projectId: "todoapp-c2753",
  storageBucket: "todoapp-c2753.appspot.com",
  messagingSenderId: "772696074992",
  appId: "1:772696074992:web:3e71f5d000af3bc9133035",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
