import React from "react";
import { View, StyleSheet,} from "react-native";
import { Text } from "@ui-kitten/components";

function MoneyAmount({ amount }) {
  return (
    <View style={[styles.rowFlex, { justifyContent: "center", marginTop: 15 }]}>
      <Text category="s2" style={styles.moneyText}>
        ${amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  moneyText: {
    fontFamily: "System",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "System",
    fontSize: 100,
  },
});

export default MoneyAmount


//<MoneyAmount amount={amount} />