import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { useFonts } from 'expo-font';
import { Font } from 'expo';

import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './constants/colors';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)
  // Prevents the splash screen from hiding automatically, call this as early as possible in your app.

export default function Apps() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  //const [appIsReady, setAppIsReady] = useState(false); // This is the state that will be used to determine if the app is ready to be shown.

  const [fontsLoaded] = useFonts({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
  });


  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync(); // Hides the splash screen after the app is ready.
  //     setAppIsReady(true);
  //   }
  // }, [fontsLoaded]);

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [!fontsLoaded]);
      // This is the function that will be called to hide the splash screen.

  if (!fontsLoaded) {
    return null;
  }


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
