import { View, Text, TouchableOpacity ,StyleSheet} from "react-native";
import React from "react";

const FlatButton = ({ text , onPress, backgroundColor ,color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button,{backgroundColor}]}>
        <Text style={[styles.buttonText,{color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;

const styles  = StyleSheet.create({
    button:{
        borderRadius :20,
        paddingHorizontal:10,
        paddingVertical:14,
        width:"100%"

    },
    buttonText:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
    }
})
