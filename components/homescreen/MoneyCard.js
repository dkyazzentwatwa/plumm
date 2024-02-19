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
  
    <Card  style={[styles.moneyBox]}>
      <Text category="h6" style={[styles.moneyText, { marginTop: 5 }]}>
        {title}
      </Text>
      <MaterialCommunityIcons
        name={icon}
        size={44}
        color={theme["color-primary-500"]}
        style={[{ marginTop: 5 }]}
      />
      <Text category="h5" style={{ marginTop: 15 }}>
        ${amount}
      </Text>
      <Text appearance="hint" category="c1" style={{ marginTop: 10 }}>
        ${goalAmount} for goal.
      </Text>
    </Card>
  );
}
const styles = StyleSheet.create({
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

});

export default MoneyCard


// <SavingsCard title="Savings" amount={659.22} goalAmount={1497.92} />


