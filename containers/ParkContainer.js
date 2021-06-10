import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Park from '../components/parkComponents/Park';
import ParkList from '../components/parkComponents/ParkList';
import Routes from '../components/parkComponents/Routes';
import Map from '../components/parkComponents/Map';


const ParkContainer = () => {
    
    return (
        <View>
            <Text>I am a ParkContainer</Text>
            <ParkList/>
            <Park/>
            <Routes/>
            <Map/>
        </View>
    );

}

export default ParkContainer;