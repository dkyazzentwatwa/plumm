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
  Input
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function OfferCard({ iconName, title, description }) {
  const theme = useTheme();
  return (
    <Card style={[styles.listCard]}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          <MaterialCommunityIcons
            name={iconName}
            size={34}
            color={theme["color-primary-500"]}
          />
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {title}
            </Text>
            <Text appearance="hint" style={{ marginLeft: 15, marginTop: 5 }}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  listCard: {
    marginTop:15,
  },
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
})
export default OfferCard

/*
<InfoCard
  iconName="hamburger"
  title="McDonalds"
  description="5% off each order"
/>
*/
