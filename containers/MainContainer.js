import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import ParkContainer from './ParkContainer';
import UserContainer from './UserContainer';
import NavBar from '../components/NavBar/NavBar'
import {StaticRouter as Router, Route, Switch} from 'react-router-dom';








const MainContainer = () => {

const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;

    const window = useWindowDimensions();
    return (

        <Router>

            <Text>I am a Main Container</Text>
            <NavBar/>
            <Text>I am a Main Container</Text>
            <Text>I am a Main Container</Text>
        </Router>
        
 
    );
    }
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
    });
    
    export default MainContainer;