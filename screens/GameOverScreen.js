import { Text } from "react-native";
import { StyleSheet, Image, View, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

import Colors from "../constants/colors";


const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        The computer took <Text style={styles.highlight}>{roundsNumber} </Text>
        rounds to guess number <Text style={styles.highlight}>{userNumber}</Text>!
      </Text>
      <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24,

  },
  highlight: {
    color: Colors.primary500,
    fontFamily: 'open-sans-bold',
  },

});