import React, { useMemo } from "react";
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  Layout,
  useTheme,
  Avatar,
  Input,
  Divider
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";



function TxList({ tranData }) {
  
  const theme = useTheme();
  const renderDescription = () => {
    if (transaction.source === "direct deposit") {
      return <Text appearance="hint">{transaction.source}</Text>;
    } else if (transaction.source === "cash card") {
      return (
        <Text appearance="hint">Paid with {transaction.source}</Text>
      );
    } else {
      return null; // Handle other sources or render nothing
    }
  };
  const renderItem = ({ item }) => {
    // Your card component with transaction data from item.transaction
    return (
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          <Image source={require("../../assets/cashsign.png")} style={styles.txPic} />
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {item.transaction.title}
            </Text>
            <Text appearance="hint" style={{ marginLeft: 15, marginTop: 5 }}>
              {item.transaction.description}
            </Text>
          </View>
          <Text
            style={{
              color: item.transaction.amount > 0 ? theme["color-success-500"] : theme["color-danger-500"],
              alignItems: "flex-end",
            }}
            category="s1"
          >
            {item.transaction.amount}
          </Text>
        </View>
      </View>
    );
  };
    return (
    <FlatList
      data={tranData}
      renderItem={renderItem}
      keyExtractor={(item) => item.key || item.transaction.id} // Unique key for each item
      // Add performance optimization options (see below)
      horizontal={false}
      showsVerticalScrollIndicator={false} // Unique key for each user
      scrollEnabled={true}
      contentContainerStyle={{
        flexGrow: 1,
        }}

    />
  );
}


const styles = StyleSheet.create({
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  txPic: {
    width: 40,
    height: 40,
    marginTop: 30,
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
  

});

export default TxList

/*
This component takes a single prop:

transaction: An object containing information about the transaction, including:
title: The title of the transaction.
source: The source of the transaction (e.g., "direct deposit", "cash card").
amount: The amount of the transaction (number).
 Key optimizations:

Uses a functional component for better performance and reusability.
Extracts the renderDescription logic to a separate function for clarity and potential customization.
Uses conditional rendering to dynamically set the transaction description based on the source.
Leverages the toFixed method to format the amount with two decimal places.
Removes unnecessary duplicate styles and marginTop for the second view.
 Remember to:

Replace styles.card, styles.txPic, styles.colFlex, styles.rowFlex, and the image source with your actual styles and file path.
Update the renderDescription function to handle other transaction sources as needed.
Use this component by passing each transaction object as the transaction prop:
*/

/*
    <Card>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          <Image source={require("../../assets/cashsign.png")} style={styles.txPic} />
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {transaction.title}
            </Text>
            {renderDescription()}
          </View>
          <Text
            style={{
              color: transaction.amount > 0 ? theme["color-success-500"] : theme["color-danger-500"],
              alignItems: "flex-end",
            }}
            category="s1"
          >
            {transaction.amount.toFixed(2)}
          </Text>
        </View>
      </View>
      <Divider style={{ marginTop: 10 }} />
    </Card>

*/
