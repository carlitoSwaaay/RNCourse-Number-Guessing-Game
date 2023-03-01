import { Text } from "react-native";


const Title = ({ children }) => {
  return (<Text style={styles.title}>{children}</Text>
  );
};

export default Title;