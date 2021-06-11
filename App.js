// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MainContainer from './containers/MainContainer';
// import NavBar from './components/NavBar/NavBar'
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';


// export default function App() {
//   return (
//     <NavigationContainer>

//       <StatusBar style="auto" />
//       <MainContainer />

//     </NavigationContainer>



//   );
// }

import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './components/parkComponents/Map'
import Map2 from './components/parkComponents/Map2'
import UserContainer from './containers/UserContainer';
import ParkContainer from './containers/ParkContainer';

function MyProfile() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <UserContainer/>
</View>
);
}

function Parks() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ParkContainer/>
</View>
);
}

function MyRoutes() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is My Routes</Text>
    </View>
    );
    }

function Settings() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Settings</Text>
    </View>
    );
    }

const Tab = createBottomTabNavigator();

export default function App() {
return (
<NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="My Profile" component={MyProfile} />
    <Tab.Screen name="Parks" component={Parks} />
    <Tab.Screen name="My Routes" component={MyRoutes} />
    <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
