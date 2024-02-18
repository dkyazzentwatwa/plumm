import React, { useRef, useMemo, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Text,
  Layout,
  Button,
  useTheme,
  Avatar,
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
import { GestureHandlerRootView } from "react-native-gesture-handler";

//screens
import SettingScreen from "./settingScreen";
//components
import AppHeader from "../components/AppHeader";
import MoneyAmount from "../components/payscreen/MoneyAmount";
import PayButton from "../components/payscreen/PayButton";
import KeypadRow from "../components/payscreen/KeypadRow";

function PayScreen({ navigation }) {
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


  const [amount, setAmount] = useState(0);
  const handleNumberPress = (value) => {
    const currentAmountString = amount.toString();
    const newValueString = value

    // Concatenate with decimal point and length consideration
    let updatedAmountString;

    if (currentAmountString.includes('.')) {
      // Check length before decimal point only
      const digitsBeforeDecimal = currentAmountString.substring(0, currentAmountString.indexOf('.'));
      if (digitsBeforeDecimal.length < 5) {
        updatedAmountString = currentAmountString.substring(0, currentAmountString.indexOf('.') + 1) + newValueString;
      }
    } else {
      // Allow only 5 digits before decimal
      if (currentAmountString.length < 5) {
        updatedAmountString = currentAmountString + newValueString;
      }
    }
    if (updatedAmountString) {
      setAmount(parseFloat(updatedAmountString)); 
    }
  };
  const handleClearPress = (value) => {
    let currentAmountString = amount.toString();
// Handle backspace or clear functionality (if applicable)
    if (value === 'BACKSPACE' || value === 'CLEAR') {
      if (currentAmountString.length > 1) {
        currentAmountString = currentAmountString.slice(0, -1); // Remove the last digit
      } else {
        currentAmountString = '0'; // Set to zero if only one digit remains
      }
    }

// Update the state with the modified string
setAmount(parseFloat(currentAmountString));
};

  const rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [".", 0, "clear"],
  ];


  /* callbacks */


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Layout style={[styles.container]}>

          <AppHeader title="Pay" avatarSource={require("../assets/user.png")} onPress={() => settingSheetModal()} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View>
              <MoneyAmount amount={amount} />
              <View style={[styles.rowFlex, {justifyContent:'center', marginTop:20}]}>
                <PayButton title="USD" />
              </View>
              <KeypadRow rowData={rows[0]} onPressNumber={handleNumberPress} onPressDot={handleNumberPress} onPressClear={handleClearPress} />
              <KeypadRow rowData={rows[1]} onPressNumber={handleNumberPress} onPressDot={handleNumberPress} onPressClear={handleClearPress} />
              <KeypadRow rowData={rows[2]} onPressNumber={handleNumberPress} onPressDot={handleNumberPress} onPressClear={handleClearPress} />
              <KeypadRow rowData={rows[3]} onPressNumber={handleNumberPress} onPressDot={handleNumberPress} onPressClear={handleClearPress} />
              <View style={[styles.rowFlex, { justifyContent: 'space-evenly', marginTop:35,}]}>
                <Button size="large" style={styles.payButton}>Request</Button>
                <Button size="large"style={styles.payButton}>Pay</Button>
              </View>


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
  rowFlex2: {
    flexDirection: "row",
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },
  payButton: {
    borderRadius: 30,
    width: 180,
    height: 50,
  },

});

export default PayScreen;

/*
              <View style={[styles.rowFlex, { justifyContent: 'space-between', padding: 10, marginTop:50,marginLeft:20, marginRight:20}]}>
                <TouchableOpacity onPress={() => handleNumberPress(1)}>
                <MaterialCommunityIcons name="numeric-1" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNumberPress(2)}>
                <MaterialCommunityIcons name="numeric-2" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNumberPress(3)}>
                <MaterialCommunityIcons name="numeric-3" size={40} color="white" />
                </TouchableOpacity>
              </View>
              <View style={[styles.rowFlex, { justifyContent: 'space-between', padding: 10, marginTop:35,marginLeft:20, marginRight:20}]}>
                <TouchableOpacity onPress={() => handleNumberPress(4)}>
                <MaterialCommunityIcons name="numeric-4" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNumberPress(5)}>
                <MaterialCommunityIcons name="numeric-5" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNumberPress(6)}>
                <MaterialCommunityIcons name="numeric-6" size={40} color="white" />
                </TouchableOpacity>
              </View>
              <View style={[styles.rowFlex, { justifyContent: 'space-between', padding: 10, marginTop:35,marginLeft:20, marginRight:20}]}>
                <TouchableOpacity onPress={() => handleNumberPress(7)}>
                <MaterialCommunityIcons name="numeric-7" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNumberPress(8)}>
                <MaterialCommunityIcons name="numeric-8" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNumberPress(9)}>
                <MaterialCommunityIcons name="numeric-9" size={40} color="white" />
                </TouchableOpacity>
              </View>
              <View style={[styles.rowFlex, { justifyContent: 'space-between', padding: 10, marginTop:35,marginLeft:20, marginRight:20}]}>
                <TouchableOpacity>
                <Entypo name="dot-single" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons onPress={() => handleNumberPress(0)} name="numeric-0" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleClearPress("CLEAR")}>
                <MaterialCommunityIcons name="chevron-left" size={40} color="white" />
                </TouchableOpacity>
              </View>

*/