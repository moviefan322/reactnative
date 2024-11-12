import { View, ActivityIndicator, StyleSheet } from "react-native";

import Colors from "../../constants/colors";
import Card from "./Card";
import InstructionText from "./InstructionText";

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <Card>
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color={Colors.accent500}
        />
        <InstructionText>Loading...</InstructionText>
      </Card>
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    padding: 20,
  },
});
