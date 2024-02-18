import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@ui-kitten/components";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
/**
 * Renders a keypad row with the given rowData and onPress handlers for number, dot, and clear buttons.
 *
 * @param {object} rowData - an array of items to be rendered as buttons
 * @param {function} onPressNumber - handler for when a number button is pressed
 * @param {function} onPressDot - handler for when the dot button is pressed
 * @param {function} onPressClear - handler for when the clear button is pressed
 * @return {JSX.Element} rendered keypad row component
 */

function KeypadRow({ rowData, onPressNumber, onPressDot, onPressClear }) {
  return (
    <View style={[styles.rowFlex, { justifyContent: "space-evenly",  marginTop:50,marginLeft:-30, marginRight:-30 }]}>
      {rowData.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            switch (item) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 0:
                onPressNumber(item);
                break;
              case ".":
                onPressDot();
                break;
              case "CLEAR":
                onPressClear();
                break;
              default:
                break;
            }
          }}
        >
          {item === "clear" ? (
            <MaterialCommunityIcons name="chevron-left" size={40} color="white" />
          ) : item === "." ? (
            <Entypo name="dot-single" size={40} color="white" />
          ) : (
            <MaterialCommunityIcons name={`numeric-${item}`} size={40} color="white" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  rowFlex: {
    flexDirection: "row",
  },
});
export default KeypadRow

/*
const rows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [".", 0, "clear"],
];

return (
    {rows.map((row) => (
      <KeypadRow
        key={row[0]}
        rowData={row}
        onPressNumber={onPressNumber}
        onPressDot={onPressDot}
        onPressClear={onPressClear}
      />
    ))}
);
*/

/*
This component takes the following props:
 * rowData: An array of numbers or special characters representing the buttons in the row (e.g., [1, 2, 3]).
 * onPressNumber: A function to call when a number button is pressed.
 * onPressDot: A function to call when the dot button is pressed.
 * onPressClear: A function to call when the clear button is pressed.

Remember to replace styles.rowFlex and the function calls with your actual styles and logic.
*/
