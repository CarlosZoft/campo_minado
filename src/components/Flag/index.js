import React from "react";
import { View } from "react-native";
import styles from "./Styles";
const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flagpole}></View>
      <View style={styles.flag}></View>
      <View style={styles.base1}></View>
      <View style={styles.base2}></View>
    </View>
  );
};

export default index;
