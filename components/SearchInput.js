import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { useTheme, Input } from "@ui-kitten/components";

function SearchInput({ placeholder, onPressSearch, value }) {
  const theme = useTheme();
  const renderIcon = (props) => (
    <MaterialCommunityIcons name="magnify" size={24} {...props} />
  );

  return (
    <Input
      style={styles.input}
      status="primary"
      placeholder={placeholder}
      size="large"
      value={value}
      //Brings up error:
      //ERROR  Warning: Failed prop type: Invalid props.style key `tintColor` supplied to `Text`.
      //accessoryLeft={
      //renderIcon()
      //}

      // Add onPress handler if needed
      // onPress={() => onPressSearch(value)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    borderRadius: 30,
  },
});

export default SearchInput;
