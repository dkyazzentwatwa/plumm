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
  container: {
    flex: 1,
    padding: 15,
  },
  topBox: {
    borderRadius: 30,
    marginBottom: 10,
    width: "100%",
    height: 110,
  },
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rowFlex2: {
    flexDirection: "row",
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
  lvlText: {
    fontFamily: "System",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  headerText: {
    marginBottom: 10,
  },
  subHeaderText: {
    marginBottom: 10,
  },
  dataBox: {
    borderRadius: 30,
    marginBottom: 15,
    marginRight: 10,
    width: 150,
    height: 150,
  },
  scrollBox: {
    marginTop: 20,
  },
  taskText: {
    fontFamily: "System",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "System",
  },
  currencyButton: {
    borderRadius: 30,
    width: 90,
    height: 30,
    marginBottom: 15,
    marginTop: 15,
  },
  donatePic: {
    width: 140,
    height: 140,
    borderRadius: 30,
    marginRight: 10,
  },
  donateText: {
    fontFamily: "System",
    marginBottom: 5,
  },
  badgeBox: {
    borderRadius: 20,
    marginBottom: 15,
    width: "100%",
    height: 134,
  },

  badgeText: {
    fontFamily: "System",
    marginBottom: 5,
  },
  dataBox: {
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 20,
    width: 90,
    height: 90,
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
  dataText: {
    marginTop: 3,
  },
  hintText: {
    marginLeft: 5,
    marginTop: 5,
  },
  deviceWidget: {
    borderRadius: 30,
    marginBottom: 5,
    marginRight: 10,
    marginTop: 20,
    width: 300,
    height: 110,
  },
  balanceBox: {
    width: "100%",
    height: 190,
    borderRadius: 20,
    marginTop: 20,
  },
  listCard: {
    marginTop: 15,
  },
  activityPic: {
    width: 90,
    height: 90,
    marginTop: 30,
  },
  avatar: {
    height: 70,
  },
  input: {
    marginTop: 15,
    borderRadius: 30,
  },
  txPic: {
    width: 40,
    height: 40,
    marginTop: 30,
  },
  offerPic: {
    width: 390,
    height: 490,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 20,
  },
  moneyText: {
    fontSize: 100,
  },
  payButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
  },

});

export default MoneyAmount


//<MoneyAmount amount={amount} />