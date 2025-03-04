import React from "react";
import { View, StyleSheet } from "react-native";
import SmallSplashIcon from "../../assets/Logo.svg"; 

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <SmallSplashIcon width={100} height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default SplashScreen;
