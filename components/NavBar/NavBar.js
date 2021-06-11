import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';

function MyProfile() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is my Profile</Text>
</View>
);
}

function Parks() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is Parks!</Text>
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

const Tab = createBottomTabNavigator();

export default function App() {
return (
<NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="My Profile" component={MyProfile} />
    <Tab.Screen name="Parks" component={Parks} />
    <Tab.Screen name="My Routes" component={MyRoutes} />
    </Tab.Navigator>
</NavigationContainer>
);
}



// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         {
//             //hello
//         }
//         <Tab.Screen name={"My Profile"} component={MyProfile}></Tab.Screen>
//         <Tab.Screen name={"Parks"} component={Parks}></Tab.Screen>
//         <Tab.Screen name={"My Routes"} component={MyRoutes}></Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// function MyProfile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>MyProfile</Text>
//     </View>
//   );
// }

// function Parks() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Parks</Text>
//     </View>
//   );
// }function MyRoutes() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>MyRoutes</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:'black',
//     alignItems: 'center',
//     justifyContent:'center',
//   }
// })
