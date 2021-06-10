// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import ParkContainer from './ParkContainer';
import UserContainer from './UserContainer';
// import NavBar from '../components/NavBar/NavBar'
// import {StaticRouter as Router, Route, Switch} from 'react-router-dom';

// const MainContainer = () => {
    
//     return (
//         <View>
//             <Router>


//                 <ParkContainer/>
//                 <UserContainer/>

//                 <NavBar/>

//             </Router>
            
//         </View>
        
//     );

// }

// export default MainContainer;

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    <Tab.Screen name="My routes" component={MyRoutes} />
    </Tab.Navigator>
</NavigationContainer>
);
}