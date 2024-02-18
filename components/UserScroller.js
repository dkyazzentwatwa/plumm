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

//Here's a functional component optimizing the ScrollView for larger amounts of users:
function UserScroller({ users }) {
  const theme = useTheme();
  const renderItem = ({ item }) => (
    <TouchableOpacity>
    <View key={item.id}>
      <Image source={item.image} style={styles.activityPic} />
      <Text category="p2" style={styles.taskText}>
        {item.name}
      </Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <FlatList 
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false} // Unique key for each user
    />
  );
}

const styles = StyleSheet.create({

  activityPic: {
    width: 90,
    height: 90,
    marginTop: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  taskText: {
    fontFamily: "System",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: 'System'
},


});

export default UserScroller



/*
This component takes a single prop:
 * users: An array of objects containing information about each user (e.g., id, image, name).
Here's what's optimized:
 * Functional component: This makes the component easier to test and reuse.
 * renderItem function: This encapsulates the logic for rendering each user item, making the code more modular.
 * data prop: This replaces the hardcoded views with dynamic data from the users prop.
 * keyExtractor: This provides a unique key for each user item, which is important for performance and correct rendering.
 * contentContainerStyle: This adds horizontal padding to better center the content within the ScrollView.
 * Removed unnecessary styles: Removed redundant colFlex and alignContent styles.
Remember to:
 * Replace styles.userItem, styles.activityPic, and styles.taskText with your actual styles.
 * Update the users prop with your data format.
 * Replace item.id with the unique identifier for each user in your data.
By using these optimizations, this component should perform better with a large number of users in the ScrollView.



const usersData = [
  { id: 1, name: "Susan", image: require("../assets/user.png") },
  { id: 2, name: "Lucy", image: require("../assets/user2.png") },
  // ... more users
];

return (
  <View>
    <UserScroller users={usersData} />
  </View>
);

    <ScrollView
      style={{ height: 130, marginTop: 10 }}
      horizontal={true}
      pagingEnabled={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }} // Add padding for better centering
      renderItem={renderItem}
      data={users}
      keyExtractor={(item) => item.id} // Unique key for each user
    />

*/
