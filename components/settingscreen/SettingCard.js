import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, useTheme } from "@ui-kitten/components";

function SettingsCard({ iconName, title, onPress }) {
  const theme = useTheme();
  return (
    <Card style={[styles.listCard]}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          <MaterialCommunityIcons
            name={iconName}
            size={34}
            color={theme["color-primary-500"]}
          />
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15 }}>
              {title}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={24}
            color={theme["color-primary-500"]}
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
  listCard: {
    marginTop: 15,
  },
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default SettingsCard;
