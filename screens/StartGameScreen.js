import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Card from '../components/ui/Card';


import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';


const StartGameScreen = ({ onPickNumber }) => {

  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!',
        'Number has to be between 1 and 99.',
        [{
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler
        }]
      );

      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 2,
    padding: 5,
    alignItems: 'center',

  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 22,
    fontWeight: 'bold',
  },

});