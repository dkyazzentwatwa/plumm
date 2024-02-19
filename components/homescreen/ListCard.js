import React from "react";
import {
  View,
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

function ListCard({ name, description, iconName, onPress }) {
  const theme = useTheme();
  return (
    <Card onPress={onPress} style={[styles.listCard]}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          <MaterialCommunityIcons name={iconName} size={34} color={theme["color-primary-500"]} />
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {name}
            </Text>
            <Text appearance="hint" style={{ marginLeft: 15, marginTop: 5 }}>
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
    marginTop: 15,
  },
});

export default ListCard

/*
<ListCard
  name="Direct deposit"
  description="Get paid up to 3 days faster."
  iconName="cash-plus"
  onPress={() => {} }
/>
*/
