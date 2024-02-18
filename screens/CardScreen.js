import React, { useMemo, useRef, useCallback } from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
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
//components
import AppHeader from "../components/AppHeader";
import DealsCard from "../components/cardscreen/DealsCard";
import ToggleListItem from "../components/cardscreen/ToggleListIem";
import InfoLinkItem from "../components/cardscreen/InfoLinkItem";
import InfoLinkNoArrow from "../components/cardscreen/InfoLinkNoArrow";
import LegalText from "../components/LegalText";

function CardScreen({ navigation }) {
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
            title="Plumm Card"
            avatarSource={require("../assets/user.png")}
            onPress={() => settingSheetModal()}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Image
              style={styles.cardPic}
              source={require("../assets/plummcard.png")}
            />
            <DealsCard
              iconNames={["food", "car", "umbrella-beach"]}
              title="Explore Deals"
              description="Save instantly."
            />
            <Text category="h5" style={{ marginTop: 30 }}>
              Card Settings
            </Text>
            <Text appearance="hint" category="p2" style={[styles.hintText]}>
              Take full control of your card.
            </Text>
            <ToggleListItem
              iconName="lock"
              title="Lock Card"
              description="Freeze all card transactions."
              checked={checked}
              onChange={onCheckedChange}
            />
            <InfoLinkNoArrow
              iconName="arrow-u-up-right-bold"
              title="Round up savings"
              description="Round up card spending & add to savings."
            />
            <InfoLinkItem
              iconName="atm"
              title="Physical cash deposit"
              description="Find an ATM nearby."
            />
            <InfoLinkItem
              iconName="check-decagram"
              title="Free overdraft coverage"
              description="Safe from emergencies."
            />
            <InfoLinkItem
              iconName="dots-grid"
              title="Change card PIN"
              description="Create a new secure pin."
            />
            <InfoLinkItem
              iconName="help-circle"
              title="Plumm card support"
              description="24/7 support for your card."
            />
            <InfoLinkItem
              iconName="card-bulleted"
              title="Design a new card"
              description="Add new style to your card."
            />
            <LegalText />
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
  hintText: {
    marginLeft: 5,
    marginTop: 5,
  },
  cardPic: {
    width: "100",
    height: 220,
    marginTop: 30,
    marginBottom: 10,
  },
});

export default CardScreen;
