import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme.json";
import { StyleSheet } from "react-native";
import { ApplicationProvider, useTheme } from "@ui-kitten/components";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//MAIN SCREENS
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/settingScreen";
import CardScreen from "./screens/CardScreen";
import ActivityScreen from "./screens/ActivityScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import PayScreen from "./screens/PayScreen";

//Lesson Swipe Screens

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme["background-basic-color-2"],
          borderTopWidth: 0,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Card") {
            iconName = focused ? "card-bulleted" : "card-bulleted-outline";
          } else if (route.name === "Pay") {
            iconName = focused ? "account-cash" : "account-cash-outline";
          } else if (route.name === "Activity") {
            iconName = focused ? "clock-time-two" : "account-clock-outline";
          } else if (route.name === "Discover") {
            iconName = focused ? "clock-time-two" : "clock-time-two-outline";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={theme["color-primary-500"]}
            />
          );
        },
        tabBarActiveTintColor: theme["color-danger-300"],
        tabBarInactiveTintColor: theme["color-primary-500"],
        headerShown: false,
        headerStyle: {
          backgroundColor: theme["background-alternative-color-4"],
          shadowColor: "black",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="Card" component={CardScreen} options={{}} />
      <Tab.Screen name="Pay" component={PayScreen} options={{}} />
      <Tab.Screen name="Discover" component={DiscoverScreen} options={{}} />
      <Tab.Screen name="Activity" component={ActivityScreen} options={{}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerMode: "screen",
              headerStyle: { backgroundColor: "#D4D4D4", shadowColor: "black" },
              headerTintColor: theme["background-basic-color-1"],
            }}
          >
            <Stack.Screen name="Homee" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
