import React, { useMemo, useRef, useState, useCallback } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, Layout, useTheme } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//screens
import SettingScreen from "./settingScreen";
// components
import AppHeader from "../components/AppHeader";
import SearchInput from "../components/SearchInput";
import UserScroller from "../components/UserScroller";
import OfferCard from "../components/discoverscreen/OfferCard";

const usersData = [
  { id: 1, name: "Susan", image: require("../assets/user.png") },
  { id: 2, name: "Lucy", image: require("../assets/user2.png") },
  { id: 3, name: "Lucy", image: require("../assets/user3.png") },
  { id: 4, name: "Lucy", image: require("../assets/user4.png") },
  { id: 5, name: "Lucy", image: require("../assets/user5.png") },
  { id: 6, name: "Lucy", image: require("../assets/user.png") },
  { id: 7, name: "Lucy", image: require("../assets/user2.png") },
  { id: 8, name: "Lucy", image: require("../assets/user3.png") },
  { id: 9, name: "Lucy", image: require("../assets/user4.png") },
  { id: 10, name: "Lucy", image: require("../assets/user5.png") },
  { id: 11, name: "Lucy", image: require("../assets/user.png") },
  { id: 12, name: "Lucy", image: require("../assets/user2.png") },
];
function DiscoverScreen({ navigation }) {
  const theme = useTheme();
  const snapPoints = useMemo(() => ["90%", "90%"], []);
  const settingSheetRef = useRef(null);

  /* screen modals */
  const settingSheetModal = () => {
    settingSheetRef.current.present();
  };
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={2}
        appearsOnIndex={-1}
        opacity={0.7}
      />
    ),
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>
          <AppHeader
            title="Discover"
            avatarSource={require("../assets/user5.png")}
            onPress={() => settingSheetModal()}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <SearchInput placeholder="Search People or Businesses" />
            <UserScroller users={usersData} />
            <View style={{ marginTop: 40 }}>
              <View style={[styles.rowFlex]}>
                <Text category="h5" style={{ alignItems: "flex-start" }}>
                  Instant Savings
                </Text>
                <MaterialCommunityIcons
                  name="arrow-right-circle"
                  size={24}
                  color={theme["color-primary-500"]}
                  style={{ alignItems: "flex-end", marginLeft: 200 }}
                />
              </View>
              <OfferCard
                iconName="hamburger"
                title="McDonalds"
                description="5% off each order"
              />
              <OfferCard
                iconName="shopping"
                title="Uber"
                description="5% off each order"
              />
              <OfferCard
                iconName="food-fork-drink"
                title="McDonalds"
                description="5% off each order"
              />
              <OfferCard
                iconName="car"
                title="McDonalds"
                description="5% off each order"
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.offerPic}
                source={require("../assets/offer.png")}
              />
              <Image
                style={styles.offerPic}
                source={require("../assets/offer2.png")}
              />

              <Image
                style={styles.offerPic}
                source={require("../assets/offer3.png")}
              />
            </View>
          </ScrollView>
        </Layout>
        <BottomSheetModal
          ref={settingSheetRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          handleStyle={{ backgroundColor: theme["background-basic-color-1"] }}
          handleIndicatorStyle={{
            backgroundColor: theme["color-primary-500"],
            width: 100,
            height: 5,
            marginTop: 10,
          }}
        >
          <View style={[{ flex: 1 }]}>
            <SettingScreen />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
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
  offerPic: {
    width: 390,
    height: 490,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default DiscoverScreen;
