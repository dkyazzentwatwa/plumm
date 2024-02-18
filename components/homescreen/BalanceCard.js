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

function BalanceCard({ title, amount, onAddCash, onCashOut }) {
  const theme = useTheme();
  return (
    <Card style={[styles.balanceBox]}>
      <View style={[styles.rowFlex, { alignItems: "center" }]}>
        <Text category="h6">{title}</Text>
        <Text appearance="hint" category="s2" style={{ alignItems: "flex-end", marginLeft: 100 }}>
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

export default BalanceCard;


/*
<BalanceCard
  title="Checking Account"
  amount={3217}
  onAddCash={() => {
    // Handle add cash logic here
  }}
  onCashOut={() => {
    // Handle cash out logic here
  }}
/>
*/
