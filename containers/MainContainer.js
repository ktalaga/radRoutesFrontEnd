import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ParkContainer from './ParkContainer';
import UserContainer from './UserContainer';
import NavBar from '../components/NavBar/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const MainContainer = () => {
    
    return (
        <View>
            <Router>
                <NavBar/>
                <Text>I am the MainContainer</Text>
                <ParkContainer/>
                <UserContainer/>
            </Router>
        </View>
        
    );

}

export default MainContainer;