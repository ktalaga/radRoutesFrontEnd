import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NavigationBar from 'react-native-navigation-bar';
    
 const NavBar = () => {
     return (
          <View>
            <NavigationBar 
              title='Main title'
              height={50}
              leftButtonTitle='back'
              rightButtonTitle='forward'
            />
            <Text>ABC</Text>
          </View>
        );
      } 

      export default NavBar;
