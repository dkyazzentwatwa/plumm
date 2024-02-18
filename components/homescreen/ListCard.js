import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  useTheme,
} from "@ui-kitten/components";

function ListCard({ name, title, description, iconName, onPress }) {
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
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "System",
  },

  dataBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 20,
    width: 120,
    height: 120,
  },
  moneyBox: {
    borderRadius: 30,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 20,
    width: "45%",
    height: 190,
  },
  moneyText: {
    fontFamily: "System",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "System",
  },

  hintText: {
    marginLeft: 5,
    marginTop: 5,
  },
  balanceBox: {
    width: "100%",
    height: 190,
    borderRadius: 20,
    marginTop: 30,
  },
  cashButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  listCard: {
    marginTop: 15,
  },
  avatar: {
    height: 70,
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
