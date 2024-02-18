import { Button } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

function PayButton({ onPress, title }) {
  return (
    <Button size="large"  style={styles.payButton} onPress={onPress}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  payButton: {
    borderRadius: 30,
    width: 120,
    height: 50,
  },

});

export default PayButton

// <RequestButton onPress={() => handleRequestPress()} title="Request"/>