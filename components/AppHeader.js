import React, { useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  Text,
  Layout,
  Button,
  useTheme,
  Avatar,
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function AppHeader({ title, avatarSource, onPress }) {
  return (
    <TouchableOpacity onPress={ onPress } >
    <View style={[styles.rowFlex, { borderRadius: 20, alignItems: "center", marginTop: 60 }]}>
      <Text category="h3" style={{ alignItems: "flex-start" }}>
        {title}
      </Text>
      <View style={[{ justifyContent: "flex-end", flex: 3 }, styles.rowFlex]}>
        <Avatar size="giant" source={avatarSource} />
      </View>
    </View>
    </TouchableOpacity>
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


export default AppHeader
