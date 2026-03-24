import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Button = ({ title, onPress }: { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  buttonText: {
    color: 'blue',
    fontSize: 16
  }
});
export default Button;