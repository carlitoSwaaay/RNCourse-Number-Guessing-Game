
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';

export default function Apps() {

  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
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
