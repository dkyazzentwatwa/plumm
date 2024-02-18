import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Card,
  Text,
  useTheme,
} from "@ui-kitten/components";

function InviteCard({ onPressInvite }) {
  const theme = useTheme();
  return (
    <Card style={[styles.listCard]}>
    <View style={{alignItems:'flex-start'}}>
      <View style={[styles.rowFlex, {alignItems:'center'}  ]}>
      <MaterialCommunityIcons
            name="plus-circle"
            size={44}
            color={theme["color-primary-500"]}
          />
          <View style={styles.colFlex}>
          <Text category="h6" style={{marginLeft:15, marginTop:5}}>Invite friends</Text>
          <Text appearance="hint" category="p2" style={{marginLeft:15, marginTop:5}} >Get $50 for each friend</Text>
          
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
  listCard: {
    marginTop:15,
  },
colFlex: {
  flex: 1,
  flexDirection: "column",
},    
rowFlex: {
  flexDirection: "row",
  flexWrap: "wrap",
},
})

export default InviteCard


