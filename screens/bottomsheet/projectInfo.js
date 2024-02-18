import React, { Component, useState } from 'react';
import { 
    View ,
    StyleSheet,
    ScrollView,
    TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome5, Fontisto, Entypo,MaterialIcons, MaterialCommunityIcons, Foundation, AntDesign, FontAwesome, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { Card, Text, Divider, Button, useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';



function InfoPage() {
    const theme = useTheme();

    return (
    <ScrollView style={{ backgroundColor: theme["background-basic-color-1"] }}>
    <View style={[styles.container, ]} >

      <View style={{alignItems:'center' }} >
        
        <StatusBar style="auto" />
        <FontAwesome name="tree" size={60} color={theme['color-primary-500']} />        
            <Text category='h3' style={{marginTop:15, color: theme["color-success-300"]}}>Recycling 101</Text>
            <Text category='c2' appearance='hint' style={{marginTop:15}}>Learn about the type of projects we support.{"\n"}</Text>
      </View>
                <View >
                    <Text category='h4' style={{marginTop:10, marginBottom:10, color: theme["color-success-300"]}}>The Fundamentals of Recycling. </Text>
                    <Text category='p2'>As an app that is focused on promoting eco-friendly practices and sustainability, we believe that it is important to support eco-projects and 
                    initiatives that are working towards a greener future.</Text>
                </View>

                <View style={{marginTop:25, marginBottom:15}}>
                    <Text category='h5' style={{marginBottom:10, color: theme["color-success-300"]}}>Definition and Importance</Text>
                    <Text category='h6'><FontAwesome name="tree" size={24} color={theme['color-primary-500']} />  Defining recycling and its significance in waste management. {"\n"} </Text>
                    <Text category='p2'>We believe that planting trees is one of the most effective ways to combat climate change. We support various reforestation projects that are 
                        working to plant trees in areas that have been deforested or degraded.{'\n'}</Text>
                    <Text category='h6'><SimpleLineIcons name="energy" size={24} color={theme['color-primary-500']}/> Understanding the environmental and economic benefits of recycling.{"\n"}</Text>
                    <Text category='p2'>We support various renewable energy projects that are working to replace fossil fuels with clean and sustainable energy sources like solar, wind, and hydro power.{'\n'}</Text>
                    <Text category='h6'><FontAwesome5 name="wine-bottle" size={24} color={theme['color-primary-500']}/> Overview of the recycling process from collection to manufacturing.{"\n"}</Text>
                    <Text category='p2'>We support various projects that are working to reduce waste and promote recycling. This includes initiatives that are working to reduce plastic waste in our oceans, as 
                        well as projects that are promoting composting and waste reduction in communities.{'\n'}</Text>
                    <Text category='h6'><FontAwesome5 name="fish" size={24}  color={theme['color-primary-500']} /> The role of sorting, processing, and remanufacturing in recycling. {"\n"}</Text>
                    <Text category='p2'>We believe that protecting wildlife is an essential part of promoting sustainability. We support various wildlife conservation projects that are working to protect endangered species and their habitats.{'\n'}</Text>
                    <Text category='h6'><MaterialCommunityIcons name="corn" size={24}  color={theme['color-primary-500']} /> Identifying materials that can be recycled. {"\n"}</Text>
                    <Text category='p2'>We support various sustainable agriculture projects that are working to promote organic farming practices and reduce the use of pesticides and other harmful chemicals.
                        {'\n'}</Text>
                    <Text category='h6'><FontAwesome name="tree" size={24} color={theme['color-primary-500']} />The importance of sorting materials for efficient recycling.{"\n"}</Text>
                    <Text category='p2'>We support various sustainable agriculture projects that are working to promote organic farming practices and reduce the use of pesticides and other harmful chemicals.
                    {'\n'}</Text>

                </View>


        </View>
    </ScrollView>
    

    );
  }
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      rowFlex:{
        flexDirection: 'row',
    },
    colFlex:{
        flex:1,
        flexDirection: 'column',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    taskBox: {
        borderRadius:30,
        marginBottom:15,
        marginRight:15,
        width:138,
        height:60,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        
    },
    courseBox: {
        borderRadius:30,
        marginBottom:15,
        marginLeft:15,
        marginRight:9,
        width:170,
        height:170,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    courseBox2: {
        borderRadius:30,
        marginBottom:15,
        marginRight:9,
        width:140,
        height:170,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    courseBox3: {
        borderRadius:30,
        marginBottom:15,
        marginRight:9,
        width:140,
        height:170,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    courseText: {
        fontFamily:'System',
        textAlign:'center',
        marginBottom:5,
    },
    taskText: {
        fontFamily:'System',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
    },
    button: {
        justifyContent:'left',
        color:'#000000',
        width:350,
        height:60,
        marginBottom: 15,
    },
    butIcon: {
        flex:1,
        justifyContent:'right',
        alignItems:'flex-end',

    },
    shadowProp: {
        shadowColor: '#d5bdaf',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      lvlBox: {
        borderRadius:5,
        width:110,
        height:50,
        alignContent:'space-between',
        marginBottom:15,
        marginRight: 5,
    },
    lvlText: {
        fontFamily:'System',
        fontWeight:'bold',
        fontSize: 12,
        alignSelf:'center',
        justifyContent:'center'

    },
    submitButton:{
        justifyContent:"center",
        alignItems:"center",
        width:100
      },
    headerText:{
        marginBottom:25,
    }
 
    });
    

export default InfoPage
