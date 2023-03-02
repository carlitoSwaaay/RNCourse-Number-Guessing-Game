import { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView
}
  from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function Apps() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  };


  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/RNCourse2_background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
