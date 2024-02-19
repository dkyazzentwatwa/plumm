import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Avatar,
} from "@ui-kitten/components";

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
  rowFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});


export default AppHeader
