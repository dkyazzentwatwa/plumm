import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, Text, Avatar, Button, useTheme } from "@ui-kitten/components";
function UserProfileCard({ name, username, pictureSource, onEditProfile, onShareQr, onScanQr }) {
  const theme = useTheme();
  return (
    <Card style={styles.cardPic}>
      <View style={[styles.colFlex, { marginTop: 10 }]}>
        <View style={[styles.rowFlex, { width: "100%", justifyContent: "space-between" }]}>
            <MaterialCommunityIcons name="qrcode-scan" size={24} color={theme["color-primary-500"]} />
          <Avatar size="large" source={pictureSource} style={[styles.user]} />
            <MaterialCommunityIcons name="share-variant" size={24} color={theme["color-primary-500"]} />
        </View>
        <View style={styles.colFlex}>
        <View style={[ {justifyContent:'center', marginTop:85}, styles.rowFlex]}>

          <Text category="h4" color="white">
            {name}
          </Text>
        </View>
          <View style={[ {justifyContent:'center', marginTop:35}, styles.rowFlex]}>
          <Text appearance="hint" category="h6" color="white">
            @{username}
          </Text>
          </View>
          <View style={[ {justifyContent:'center', marginTop:35}, styles.rowFlex]}>
          <Button
            status="primary"
            size="large"
            appearance="filled"
            style={styles.editProfileButton}
            onPress={onEditProfile}
          >
            Edit Profile
          </Button>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  user: {
    height:80,
    width:80,
    marginBottom: 10,
  },
  rowFlex: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  colFlex: {
    flex: 1,
    flexDirection: "column",
  },    
  cardPic: {
    width: '100',
    height: 250,
    marginTop: 30,
    marginBottom: 10,
    borderRadius:30,
  },

  detailsContainer: {
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  editProfileButton: {
    marginTop: 10,
  },
  editProfileButton: {
    width: "100%",
    height: 20,
    borderRadius: 20,
  }

});

export default UserProfileCard


/*
Usage
<UserProfileCard
  name="Jane Cook"
  username="jcook"
  pictureSource={require("../assets/user.png")}
  onEditProfile={() => handleEditProfile()}
  onShareQr={() => handleShareQr()}
  onScanQr={() => handleScanQr()}
/>
*/
