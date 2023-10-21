import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black,
  },
});

export { HomeScreen };
