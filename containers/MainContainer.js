import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ParkContainer from './ParkContainer';
import UserContainer from './UserContainer';
import NavBar from '../components/NavBar/NavBar'
import {StaticRouter as Router, Route, Switch} from 'react-router-dom';

const MainContainer = () => {
    
    return (
        <View>
            <Router>               
                <UserContainer/>
                <ParkContainer/>       
                <NavBar/>
            </Router>
        </View>
        
    );
}
export default MainContainer;