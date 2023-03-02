import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";


const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game Over</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.accent500,
  },

});