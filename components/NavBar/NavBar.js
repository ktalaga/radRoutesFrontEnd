import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Link} from 'react-router-dom';
import {ProfileTabNavigator} from 'react-native'



const NavBar = () => {
  

    return (
        <ProfileTabNavigator tabBarOptions={{
            labelStyle: {
                textTransform: "uppercase",
            },
            indicatorStyle: {
                height: null,
                top: '10%',
                bottom: '10%',
                width: '45%',
                left: '2.5%',
                borderRadius: 100,
            },
            style: {
                alignSelf: "center",
                width: '50%',
                borderRadius: 100,
                borderColor: "blue",
                backgroundColor: "white",
                elevation: 5, // shadow on Android
                shadowOpacity: .10, // shadow on iOS,
                shadowRadius: 4, // shadow blur on iOS
            },
            tabStyle: {
                borderRadius: 100,
            },
        }}
        swipeEnabled={true}>
     <ProfileTabNavigator.Screen name="Info" component={ProfileInfoScreen} />
     <ProfileTabNavigator.Screen name="Photos" component={ProfilePhotosScreen} />
   </ProfileTabNavigator>
  );
}

export default NavBar;