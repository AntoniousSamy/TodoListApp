import { View, Text, TouchableOpacity } from 'react-native';
import CategoriesStyle from "./CategoriesStyle";

const Categories = ({ name, onPress, isSelected ,colorText}) => {
  return (
    <TouchableOpacity
      style={[
        CategoriesStyle.border,
        {
          backgroundColor: isSelected ? '#B0DFF0' : '#E6EBEE',
          borderColor: isSelected ? '#B0DFF0' : '#E6EBEE',
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          CategoriesStyle.textStyle,
          { color: colorText ? '#1595E5' : '#8A939B' },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Categories;
