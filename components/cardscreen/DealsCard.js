import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Card,
  Text,
  useTheme,
} from "@ui-kitten/components";

function DealsCard({ iconNames, title, description, onPress }) {
  const theme = useTheme();
  return (
    <Card onPress={onPress} style={[styles.listCard]}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          {iconNames.map((iconName) => (
            <MaterialCommunityIcons
              key={iconName}
              name={iconName}
              size={34}
              color={theme["color-primary-500"]}
              style={{ marginRight: 1 }}
            />
          ))}
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {title}
            </Text>
            <Text appearance="hint" category="p2" style={{ marginLeft: 15, marginTop: 5 }}>
              {description}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={24}
            color={theme["color-primary-500"]}
            style={{ alignItems: "flex-end" }}
          />
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


export default DealsCard
