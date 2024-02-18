import React, { useMemo } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Card,
  Text,
  Layout,
  useTheme,
  Avatar,
  Input,
  Divider,
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";

function TxListItem({ title, description, amount, color }) {
  const theme = useTheme();
  const renderDescription = () => {
    if (transaction.source === "direct deposit") {
      return <Text appearance="hint">{transaction.source}</Text>;
    } else if (transaction.source === "cash card") {
      return <Text appearance="hint">Paid with {transaction.source}</Text>;
    } else {
      return null; // Handle other sources or render nothing
    }
  };
  return (
    <View style={{ alignItems: "flex-start" }}>
      <View style={[styles.rowFlex, { alignItems: "center" }]}>
        <Image
          source={require("../../assets/cashsign.png")}
          style={styles.txPic}
        />
        <View style={styles.colFlex}>
          <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
            {title}
          </Text>
          <Text appearance="hint" style={{ marginLeft: 15, marginTop: 5 }}>
            {description}
          </Text>
        </View>
        <Text style={{color}} category="s1">
          {amount}
        </Text>
      </View>
    </View>
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

export default TxListItem;

