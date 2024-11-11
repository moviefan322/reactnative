import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => props.onDeleteItem(props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "pink",
    margin: 8,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    color: "black",
    fontSize: 16,
    padding: 10,
  },
});
