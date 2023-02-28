import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* +
        - */}
      </View>
      <View>{/*LOG ROUNDS*/}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 10,

  },
});