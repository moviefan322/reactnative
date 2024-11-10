import { StyleSheet } from "react-native";

const GoalItem = () => {
  return (
    <View style={styles.goal}>
      <Text>{itemData.item.text}</Text>
    </View>
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
