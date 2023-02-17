import { Text, View, Pressable, StyleSheet } from "react-native";

const primaryButton = ({ children }) => {

  const pressHandler = () => {
    console.log("pressed");
  };
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
      <Text>{children}</Text>
    </View>
    </Pressable>
  );
};

export default primaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
});