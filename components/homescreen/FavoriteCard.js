import React from "react";
import {
  StyleSheet,
} from "react-native";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  useTheme,
} from "@ui-kitten/components";

function FavoriteCard({ onPress, name, text }) {
  const theme = useTheme();
  return (
    <Card onPress={onPress} style={[styles.dataBox, { justifyContent: "center", alignItems: "center" }]}>
      <MaterialCommunityIcons name={name} size={50} color={theme["color-primary-500"]} style={[{ textAlign: "center" }]} />
      <Text category="label" style={[styles.taskText, { marginTop: 10 }]}>
        {text}
      </Text>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
  taskText: {
    fontFamily: "System",
    textAlign: "center",
  },

  dataBox: {
    borderRadius: 30,
    marginRight: 15,
    marginTop: 20,
    width: 120,
    height: 120,
  },
});

export default FavoriteCard

//<FavoriteCard onPress={() => {}} name="book" text="Books" />

