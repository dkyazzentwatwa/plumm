import React, { useMemo, useRef, useState, useCallback } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, Layout, useTheme } from "@ui-kitten/components";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//screens
import SettingScreen from "./settingScreen";
//components
import AppHeader from "../components/AppHeader";
import SearchInput from "../components/SearchInput";
import UserScroller from "../components/UserScroller";
import TxList from "../components/activityscreen/TxCard";
import TxListItem from "../components/activityscreen/TxListItem";

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
const tranData = [
  {
    transaction: {
      id: 1,
      title: "Transaction 1",
      description: "Direct Deposit",
      amount: 100,
    },
  },
  {
    transaction: {
      id: 2,
      title: "Transaction 2",
      description: "Gas",
      amount: -50,
    },
  },
  {
    transaction: {
      id: 3,
      title: "Transaction 3",
      description: "Food",
      amount: -30,
    },
  },
  {
    transaction: {
      id: 4,
      title: "Transaction 4",
      description: "Groceries",
      amount: -60,
    },
  },
  {
    transaction: {
      id: 5,
      title: "Transaction 5",
      description: "Entertainment",
      amount: -20,
    },
  },
  {
    transaction: {
      id: 6,
      title: "Transaction 6",
      description: "Shopping",
      amount: -80,
    },
  },
  {
    transaction: {
      id: 7,
      title: "Transaction 7",
      description: "Utilities",
      amount: -40,
    },
  },
  {
    transaction: {
      id: 8,
      title: "Transaction 8",
      description: "Travel",
      amount: -70,
    },
  },
  {
    transaction: {
      id: 9,
      title: "Transaction 9",
      description: "Groceries",
      amount: -60,
    },
  },
  {
    transaction: {
      id: 10,
      title: "Transaction 10",
      description: "Food",
      amount: -30,
    },
  },
  {
    transaction: {
      id: 11,
      title: "Transaction 11",
      description: "Gas",
      amount: -50,
    },
  },
  {
    transaction: {
      id: 12,
      title: "Transaction 12",
      description: "Direct Deposit",
      amount: 100,
    },
  },
  {
    transaction: {
      id: 13,
      title: "Transaction 13",
      description: "Direct Deposit",
      amount: 100,
    },
  },
  {
    transaction: {
      id: 14,
      title: "Transaction 14",
      description: "Direct Deposit",
      amount: 100,
    },
  },
  {
    transaction: {
      id: 15,
      title: "Transaction 15",
      description: "Direct Deposit",
      amount: 100,
    },
  },
  // ... more transactions
];

function ActivityScreen({ navigation }) {
  const theme = useTheme();
  const red = theme["color-danger-600"];
  const green = theme["color-success-600"];
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

  const [status, setStatus] = React.useState("Off");
  const [checked, setChecked] = React.useState(false);
  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    if (isChecked == true) {
      setStatus("On");
    } else {
      setStatus("Off");
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>
          <AppHeader
            title="Activity"
            avatarSource={require("../assets/user5.png")}
            onPress={() => settingSheetModal()}
          />
          <SearchInput placeholder="Search Transactions" />

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            <View style={styles.colFlex}>
              <UserScroller users={usersData} />
            </View>
            <Card appearance="filled" style={{ marginTop: 30 }}>
              <TxListItem
                title={tranData[0].transaction.title}
                description={tranData[0].transaction.description}
                amount={tranData[0].transaction.amount}
                color={green}
              />
              <TxListItem
                title={tranData[1].transaction.title}
                description={tranData[1].transaction.description}
                amount={tranData[1].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[2].transaction.title}
                description={tranData[2].transaction.description}
                amount={tranData[2].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[3].transaction.title}
                description={tranData[3].transaction.description}
                amount={tranData[3].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[12].transaction.title}
                description={tranData[12].transaction.description}
                amount={tranData[12].transaction.amount}
                color={green}
              />
              <TxListItem
                title={tranData[5].transaction.title}
                description={tranData[5].transaction.description}
                amount={tranData[5].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[6].transaction.title}
                description={tranData[6].transaction.description}
                amount={tranData[6].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[7].transaction.title}
                description={tranData[7].transaction.description}
                amount={tranData[7].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[8].transaction.title}
                description={tranData[8].transaction.description}
                amount={tranData[8].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[9].transaction.title}
                description={tranData[9].transaction.description}
                amount={tranData[9].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[10].transaction.title}
                description={tranData[10].transaction.description}
                amount={tranData[10].transaction.amount}
                color={red}
              />
              <TxListItem
                title={tranData[11].transaction.title}
                description={tranData[11].transaction.description}
                amount={tranData[11].transaction.amount}
                color={green}
              />
              <TxListItem
                title={tranData[13].transaction.title}
                description={tranData[13].transaction.description}
                amount={tranData[13].transaction.amount}
                color={green}
              />
              <TxListItem
                title={tranData[14].transaction.title}
                description={tranData[14].transaction.description}
                amount={tranData[14].transaction.amount}
                color={green}
              />
            </Card>
            <Text
              category="s2"
              appearance="hint"
              style={{ textAlign: "center", marginTop: 50 }}
            >
              Banking services provided by Plumm's bank partner(s). Debit cards
              issued by Hogwarts Bank. Brokerage services by Plumm Investing
              LLC, member FINRA, subsidiary of Plumm, Inc. Bitcoin services by
              Plumm, Inc.
            </Text>
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
});

export default ActivityScreen;
