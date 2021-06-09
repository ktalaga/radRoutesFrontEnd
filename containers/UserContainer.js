import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import DistanceCovered from '../components/userComponents/DistanceCovered';
import RouteList from '../components/userComponents/RouteList';
import Target from '../components/userComponents/Target';

const UserContainer = () => {
    
    return (
        <View>
            <Text>I am an UserContainer</Text>
            <DistanceCovered/>
            <RouteList/>
            <Target/>
        </View>
    );

}

export default UserContainer;