import React from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Campo!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      <Field opened></Field>
      <Field opened nearMines={1}></Field>
      <Field opened nearMines={2}></Field>
      <Field opened nearMines={3}></Field>
      <Field opened nearMines={6}></Field>
      <Field mined></Field>
      <Field mined opened></Field>
      <Field mined opened exploded></Field>
      <Field flagged></Field>
      <Field flagged opened></Field>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
