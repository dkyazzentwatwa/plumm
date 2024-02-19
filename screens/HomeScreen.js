import React, { useRef, useMemo, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Layout, useTheme } from "@ui-kitten/components";
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
import { GestureHandlerRootView } from "react-native-gesture-handler";

// screens
import SettingScreen from "./settingScreen";

//components
import AppHeader from "../components/AppHeader";
import BalanceCard from "../components/homescreen/BalanceCard";
import MoneyCard from "../components/homescreen/MoneyCard";
import FavoritrCard from "../components/homescreen/FavoriteCard";
import ListCard from "../components/homescreen/ListCard";
import LegalText from "../components/LegalText";

function HomeScreen({ navigation }) {
  const theme = useTheme();
  const snapPoints = useMemo(() => ["90%", "90%"], []);

  /* screen refs */
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
            title="Home"
            avatarSource={require("../assets/user.png")}
            onPress={() => settingSheetModal()}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={[styles.colFlex]}>
              <BalanceCard
                title="Cash Balance"
                amount="3,217"
                onAddCash={() => {}}
                onCashOut={() => {}}
              />
            </View>
            <Text category="h3" style={{ marginTop: 10 }}>
              Money
            </Text>
            <Text appearance="hint" category="s2" style={[styles.hintText]}>
              Your finances at your fingertips.
            </Text>
            <View style={[styles.rowFlex, { justifyContent: "center" }]}>
              <MoneyCard
                title="Savings"
                amount="659.22"
                goalAmount="1497.92"
                icon="piggy-bank"
              />
              <MoneyCard
                title="Crypto"
                amount="7,326.92"
                goalAmount="1497.92"
                icon="bitcoin"
              />
              <MoneyCard
                title="Paychecks"
                amount="2,345.22"
                goalAmount="1497.92"
                icon="cash-multiple"
              />
              <MoneyCard
                title="Stocks"
                amount="9,812.42"
                goalAmount="1497.92"
                icon="chart-line"
              />
              <MoneyCard
                title="Taxes"
                amount="0"
                goalAmount="1497.92"
                icon="hand-coin"
              />
              <MoneyCard
                title="Retirement"
                amount="5,231.78"
                goalAmount="1497.92"
                icon="umbrella-beach"
              />
            </View>
            <Text category="h3" style={{ marginTop: 10 }}>
              Recent Activity
            </Text>
            <ScrollView
              style={{ height: 160, marginTop: 10 }}
              horizontal={true}
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
            >
              <FavoritrCard onPress={() => {}} name="book" text="Books" />
              <FavoritrCard onPress={() => {}} name="cart" text="Shopping" />
              <FavoritrCard
                onPress={() => {}}
                name="food-apple"
                text="Groceries"
              />
              <FavoritrCard onPress={() => {}} name="tools" text="Repairs" />
              <FavoritrCard onPress={() => {}} name="car" text="Car" />
              <FavoritrCard
                onPress={() => {}}
                name="account-group"
                text="Family"
              />
            </ScrollView>
            <Text category="h4" style={{ marginTop: 10 }}>
              More ways to add money
            </Text>
            <Text appearance="hint" category="s2" style={[styles.hintText]}>
              Quickly add cash to your account.
            </Text>
            <ListCard
              name="Direct Deposit"
              description="Get paid up to 3 days faster."
              iconName="cash-plus"
              onPress={() => {}}
            />
            <ListCard
              name="Bank or wire transfer"
              description="Send from another account."
              iconName="bank-transfer"
              onPress={() => {}}
            />
            <ListCard
              name="Physical cash deposit"
              description="Find an ATM nearby."
              iconName="atm"
              onPress={() => {}}
            />
            <ListCard
              name="Create recurring deposits"
              description="Add from your debit card."
              iconName="cash-plus"
              onPress={() => {}}
            />
            <ListCard
              name="Borrow money"
              description="Get a loan in minutes."
              iconName="hand-coin"
              onPress={() => {}}
            />
            <LegalText />
            {/* Bottom SHEET Modals */}
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
  hintText: {
    marginTop: 5,
  },
});

export default HomeScreen;
