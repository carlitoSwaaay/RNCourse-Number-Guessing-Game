import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";





const GuessLogItem = ({ roundNumber, guess }) => {
  return <View style={styles.listItem}>
    <Text style={styles.itemText}>Round {roundNumber}      </Text>
    <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
  </View>
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 2,
    borderRadius: 30,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 