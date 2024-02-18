import React, { useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  Layout,
  Button,
  useTheme,
} from "@ui-kitten/components";

function MoneyCard({ title, amount, goalAmount, icon }) {
  const theme = useTheme();
  return (
  
    <Card style={[styles.moneyBox]}>
      <Text category="h6" style={[styles.moneyText, { marginTop: 5 }]}>
        {title}
      </Text>
      <MaterialCommunityIcons
        name={icon}
        size={44}
        color={theme["color-primary-500"]}
        style={[{ marginTop: 5 }]}
      />
      <Text category="h4" style={{ marginTop: 20 }}>
        ${amount}
      </Text>
      <Text appearance="hint" category="c1" style={{ marginTop: 5 }}>
        ${goalAmount} for goal.
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

export default MoneyCard


// <SavingsCard title="Savings" amount={659.22} goalAmount={1497.92} />


