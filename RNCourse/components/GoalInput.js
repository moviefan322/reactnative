import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    color: "white",
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 8,
    width: "80%",
    marginRight: 8,
    color: "white",
  },
});

export default GoalInput;
