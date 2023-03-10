import { StyleSheet, View } from "react-native";

import Colors from "../../constants/colors";


const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 12,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
});