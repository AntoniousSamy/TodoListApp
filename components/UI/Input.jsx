
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

class Inputs extends Component {
  state = { isFocused: false };

  onFocusChange = () => {
    this.setState({ isFocused: true });
  };

  render() {
    const { name, pass, onChangeText, icon, color } = this.props;
    const { isFocused } = this.state;

    return (
      <View
        style={[
          styles.container,
          {
            borderColor: isFocused ? '#0779ef' : color,
            backgroundColor: "#fff",
          },
        ]}
      >
        <Input
          placeholder={name}
          onFocus={this.onFocusChange}
          inputContainerStyle={styles.inputContainer}
          inputStyle={[styles.inputText, { color: "#0779ef" }]}
          secureTextEntry={pass}
          onChangeText={onChangeText}
          leftIcon={
            <Icon name={icon} size={22} color={isFocused ? '#0779ef' : "grey"} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 2,
  },
  inputContainer: {
    borderBottomWidth:0 ,
  },
  inputText: {
    fontWeight: "400",
    marginLeft: 5,
  },
});

export default Inputs;


























