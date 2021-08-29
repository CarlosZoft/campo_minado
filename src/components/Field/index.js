import React from "react";
import { View, Text } from "react-native";
import Mine from "../Mine";
import styles from "./Styles";

export default (props) => {
  const { mined, opened, nearMines, exploded } = props;

  const styleField = [styles.field];

  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (styleField.length === 1) styleField.push(styles.regular);

  let color = null;

  if (nearMines > 0) {
    if (nearMines == 1) color = "#2A28D7";
    if (nearMines == 2) color = "#2B520F";
    if (nearMines > 2 && nearMines < 6) color = "#F9060A";
    else color = "#F221A9";
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
      )}
      {mined && opened && (
        <Text>
          <Mine />
        </Text>
      )}
    </View>
  );
};
