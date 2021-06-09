import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ParkContainer from './ParkContainer';
import UserContainer from './UserContainer';

const MainContainer = () => {
    
    return (
        <View>
            <Text>I am the MainContainer</Text>
            <ParkContainer/>
            <UserContainer/>
        </View>
    );

}

export default MainContainer;