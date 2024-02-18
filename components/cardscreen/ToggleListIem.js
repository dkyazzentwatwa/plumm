import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, useTheme, Toggle } from "@ui-kitten/components";
/**
 * ToggleListItem component renders a card with an icon, title, description, and a toggle button.
 *
 * @param {string} iconName - The name of the icon to be displayed.
 * @param {string} title - The title of the list item.
 * @param {string} description - The description of the list item.
 * @param {boolean} checked - The current state of the toggle button.
 * @param {function} onChange - The function to be called when the toggle button state changes.
 * @return {ReactElement} A Card component with the specified icon, title, description, and toggle button.
 */
function ToggleListItem({ iconName, title, description, checked, onChange }) { 
  const theme = useTheme();
  return (
    <Card style={[styles.listCard]}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          <MaterialCommunityIcons
            name={iconName}
            size={34}
            color={theme["color-primary-500"]}
          />
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {title}
            </Text>
            <Text appearance="hint" style={{ marginLeft: 15, marginTop: 5 }}>
              {description}
            </Text>
          </View>
          <Toggle
            style={{ marginBottom: 15, alignItems: "flex-end" }}
            checked={checked}
            onChange={onChange}
            color={theme["color-primary-500"]}
          />
        </View>
      </View>
    </Card>
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
  lvlText: {
      fontFamily: "System",
      fontWeight: "bold",
      alignSelf: "center",
      justifyContent: "center",
  },
  headerText: {
      marginBottom:10,
  },
  subHeaderText:{
      marginBottom:10,
  },
  dataBox: {
      borderRadius: 30,
      marginBottom: 15,
      marginRight: 10,
      width: 150,
      height: 150,
  },
  scrollBox: {
      marginTop:20,
  },
  taskText: {
      fontFamily: "System",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
      fontFamily: 'System'
  },
  morebutton: {
      borderRadius: 30,
      width: 120,
      height: 50,
      marginBottom: 15,
      marginTop:15
  },
  donatePic: {
      width: 140,
      height: 140,
      borderRadius: 30,
      marginRight: 10,
  },
  donateText: {
      fontFamily: "System",
      marginBottom: 5,
  },
  badgeBox: {
      borderRadius: 20,
      marginBottom: 15,
      width: '100%',
      height: 134,
  },

  badgeText: {
      fontFamily: "System",
      marginBottom: 5,
},
dataBox: {
  borderRadius: 30,
  marginBottom: 10,
  marginRight:10,
  marginTop:20,
  width: 120,
  height: 120,
},
moneyBox: {
  borderRadius: 30,
  marginBottom: 10,
  marginRight:10,
  marginTop:20,
  width: "45%",
  height: 190,
},
moneyText: {
  fontFamily: "System",
  fontWeight: "bold",
  marginBottom: 10,
  fontFamily: 'System'
},
dataText:{
  marginTop:3
},
hintText:{
  marginLeft:5,
  marginTop: 5,
},
listCard: {
  marginTop:15,
},
avatar: {
  height:70,
}

});

export default ToggleListItem

/*
<ActionCard
  iconName="cash-lock"
  title="Lock card"
  description="Freeze all card transactions."
  checked={isCardLocked}
  onChange={(newState) => setIsCardLocked(newState)}
/>
*/
