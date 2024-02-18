import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  Button,
  useTheme,
  Layout,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//components
import AppHeader from "../components/settingscreen/AppHeader";
import UserProfileCard from "../components/settingscreen/UserProfileCard";
import InviteCard from "../components/settingscreen/InviteCard";
import SettingsCard from "../components/settingscreen/SettingCard";
function SettingScreen({ navigation }) {
  const theme = useTheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>
          <AppHeader title="Your Account" />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <UserProfileCard
              name="Jane Cook"
              username="jcook"
              pictureSource={require("../assets/user.png")}
            />
            <InviteCard />
            <Text category="h6" appearance="hint" style={{ marginTop: 30 }}>
              Account & Settings
            </Text>
            <SettingsCard iconName="account" title="Personal" />
            <SettingsCard iconName="vector-link" title="Link Banks" />
            <SettingsCard iconName="security" title="Security & Privacy" />
            <SettingsCard iconName="heart" title="Favorites" />
            <SettingsCard iconName="account-group" title="Family" />
            <SettingsCard iconName="arrow-collapse-up" title="Limits" />
            <SettingsCard iconName="alert" title="Notifications" />
            <SettingsCard iconName="file-document-multiple" title="Documents" />
            <SettingsCard iconName="help-circle" title="Support" />
            <Button
              status="danger"
              size="large"
              appearance="outline"
              style={styles.button}
            >
              Logout
            </Button>
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
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  button: {
    width: "100%",
    height: 60,
    marginTop: 30,
  },
});

export default SettingScreen;
