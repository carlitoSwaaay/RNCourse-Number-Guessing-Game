import { Text } from "react-native";
import { View } from "react-native";

const primaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default primaryButton;