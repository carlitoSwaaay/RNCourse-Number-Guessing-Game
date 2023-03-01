import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Colors from "../../constants/colors";


const NumberContainer = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});