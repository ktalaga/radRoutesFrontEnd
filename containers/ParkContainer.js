import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Park from '../components/parkComponents/Park';
import ParkList from '../components/parkComponents/ParkList';
import Routes from '../components/parkComponents/Routes';

const ParkContainer = () => {
    
    return (
        <View>
            <Text>I am a ParkContainer</Text>
            <ParkList/>
            <Park/>
            <Routes/>
        </View>
    );

}

export default ParkContainer;