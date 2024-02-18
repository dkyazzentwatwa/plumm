import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Card,
  Text,
  Layout,
  useTheme,
} from "@ui-kitten/components";

/**
 * Renders a card component with the specified icon names, title, description, and onPress event handler.
 *
 * @param {array} iconNames - Array of icon names to be displayed on the card
 * @param {string} title - Title to be displayed on the card
 * @param {string} description - Description to be displayed on the card
 * @param {function} onPress - Event handler for when the card is pressed
 * @return {JSX.Element} A Card component
 */
function DealsCard({ iconNames, title, description, onPress }) {
  const theme = useTheme();
  return (
    <Card onPress={onPress} style={[styles.listCard]}>
      <View style={{ alignItems: "flex-start" }}>
        <View style={[styles.rowFlex, { alignItems: "center" }]}>
          {iconNames.map((iconName) => (
            <MaterialCommunityIcons
              key={iconName}
              name={iconName}
              size={34}
              color={theme["color-primary-500"]}
              style={{ marginRight: 1 }}
            />
          ))}
          <View style={styles.colFlex}>
            <Text category="h6" style={{ marginLeft: 15, marginTop: 5 }}>
              {title}
            </Text>
            <Text appearance="hint" category="p2" style={{ marginLeft: 15, marginTop: 5 }}>
              {description}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={24}
            color={theme["color-primary-500"]}
            style={{ alignItems: "flex-end" }}
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


export default DealsCard

/*
<DealsCard
  iconNames={["food", "car", "umbrella-beach"]}
  title="Explore Deals"
  description="Save instantly."
  onPress={() => navigation.navigate("Deals")}
/>
*/