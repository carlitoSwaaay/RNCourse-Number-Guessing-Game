import { StyleSheet } from "react-native";
import { Text } from "react-native";

const instructionText = (children) => {
  return <Text style={styles.instructionText}>{content}</Text>
};

export default instructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 22,
    fontWeight: 'bold',
  },
});