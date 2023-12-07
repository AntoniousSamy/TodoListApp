import { View, Image, Animated, LogBox } from "react-native";
import Lightbox from "react-native-lightbox";
import React from "react";

// Ignore specific warnings
LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified.',
  'Animated.event now requires a second argument for options',
]);

const ImageLightbox = ({ image }) => {
  const animatedValueY = new Animated.Value(0);

  return (
    <View>
      <Lightbox
        springConfig={{ tension: 15, friction: 7 }}
        swipeToDismiss={false}
        renderContent={() => (
          <Image
            source={{ uri: image }}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          />
        )}
      >
        <Animated.View
          style={{
            transform: [{ translateY: animatedValueY }],
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
        </Animated.View>
      </Lightbox>
    </View>
  );
};

export default ImageLightbox;
