import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals!...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    width: '80%',
    marginRight: 8,
  }
});
