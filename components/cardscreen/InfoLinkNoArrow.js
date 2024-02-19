import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, useTheme } from "@ui-kitten/components";
function InfoLinkNoArrow({ iconName, title, description }) {
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
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {title}
            </Text>
            <Text appearance="hint" style={{ marginLeft: 15, marginTop: 5 }}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  rowFlex: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  colFlex: {
      flex: 1,
      flexDirection: "column",
    },    
listCard: {
  marginTop:15,
},
});

export default InfoLinkNoArrow
