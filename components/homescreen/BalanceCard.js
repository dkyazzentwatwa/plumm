import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import {
  Card,
  Text,
  Button,
} from "@ui-kitten/components";

function BalanceCard({ title, amount, onAddCash, onCashOut }) {
  return (
    <Card style={[styles.balanceBox]}>
      <View style={[styles.rowFlex, { alignItems: "center", justifyContent: "space-between" }]}>
        <Text category="h6">{title}</Text>
        <Text appearance="hint" category="s2" style={{ alignItems: "flex-end"}}>
          Account & Routing
        </Text>
      </View>
      <Text style={{ marginTop: 10 }} category="h1">
        ${amount}
      </Text>
      <View style={[styles.rowFlex, { justifyContent: "center", margin: 20 }]}>
        <Button style={[styles.cashButton]} onPress={onAddCash}>
          Add Cash
        </Button>
        <Button style={[styles.cashButton]} onPress={onCashOut}>
          Cash Out
        </Button>
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
  balanceBox: {
    width: "100%",
    height: 190,
    borderRadius: 20,
    marginTop: 30,
  },
  cashButton: {
    borderRadius: 30,
    width: 110,
    height: 50,
    marginBottom: 15,
    marginRight: 10,
  },
});

export default BalanceCard;
