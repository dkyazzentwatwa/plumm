import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, useTheme } from "@ui-kitten/components";

/**
 * Renders an info link item with the specified icon, title, and description.
 *
 * @param {string} iconName - The name of the icon to display
 * @param {string} title - The title of the info link item
 * @param {string} description - The description of the info link item
 * @return {JSX.Element} A Card component containing the info link item
 */
function InfoLinkItem({ iconName, title, description }) {
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
  topBox: {
      borderRadius: 30,
      marginBottom: 10,
      width: "100%",
      height: 110,
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
deviceWidget: {
  borderRadius: 30,
  marginBottom: 5,
  marginRight:10,
  marginTop:20,
  width: 300,
  height: 110,
},
balanceBox:{
  width:'100%',
  height: 190,
  borderRadius:20,
  marginTop: 20,
},
cashButton: {
  borderRadius: 30,
  width: 120,
  height: 50,
  marginBottom: 15,
  marginRight: 10,
  marginLeft:10
},
listCard: {
  marginTop:15,
},
cardPic: {
  width: '100',
  height: 220,
  marginTop: 30,
  marginBottom: 10
},
avatar: {
  height:70,
}

});

export default InfoLinkItem

/*
<InfoCard
  iconName="atm"
  title="Physical cash deposit"
  description="Find an ATM nearby."
/>
*/