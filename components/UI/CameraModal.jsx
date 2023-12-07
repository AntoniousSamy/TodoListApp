import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import {  useDispatch } from "react-redux";
import { setTodoImage } from "../../redux/actions";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const CameraModal = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    };

    requestCameraPermission();
  }, []);

  const handleCameraTypeToggle = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleFlashToggle = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  const handleCapture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log("Captured Photo:", photo);
        dispatch(setTodoImage(photo.uri));
      } catch (err) {
        console.log("error", err);
      }
      onClose();
    }
  };

  const handlePickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      const selectedImage = result.assets[0]; // Use the first asset from the "assets" array
      console.log("Selected Image from Gallery:", selectedImage.uri);
      dispatch(setTodoImage(selectedImage.uri)); // Dispatch the selected image URI
      onClose();
    }
  };
  
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity
            style={styles.flashButton}
            onPress={handleFlashToggle}
          >
            <Ionicons name="md-flash-outline" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={handleCameraTypeToggle}
          >
            <Ionicons name="camera-reverse-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.bottomButtonsContainer}>
            <TouchableOpacity
              style={styles.galleryButton}
              onPress={handlePickFromGallery}
            >
              <Text style={styles.galleryButtonText}>Gallery</Text>
            </TouchableOpacity>

            <View style={{ marginLeft: screenWidth * 0.18 }}>
              <TouchableOpacity
                style={styles.captureButton}
                onPress={handleCapture}
              >
                <Text style={styles.captureButtonText}>Capture</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: screenWidth * 0.18 }}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}
              >
                <Ionicons name="close-sharp" size={30} color="#ffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    marginTop: 120,
    position: "absolute",
    width: "100%",
    height: "70%",
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: screenHeight * 0.04,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: screenHeight * 0.01,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
  },
  galleryButton: {
    padding: 15,
    borderRadius: 10,
  },
  galleryButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  flashButton: {
    padding: 15,
    borderRadius: 10,
  },
  closeButton: {
    padding: 15,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  captureButton: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  captureButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  toggleButton: {
    padding: 15,
    backgroundColor: "transparent",
  },
});

export default CameraModal;
