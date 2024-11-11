import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={() => props.onDeleteItem(props.id)}>
      <View style={styles.goal}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "pink",
    padding: 10,
    margin: 8,
    borderRadius: 6,
  },
});
