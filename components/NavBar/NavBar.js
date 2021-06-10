import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyProfile() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is my My Profile screen!!</Text>
</View>
);
}

function Parks() {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>This is my Parks screen!!</Text>
</View>
);
}

function MyRoutes() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is my Routes screen!</Text>
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
