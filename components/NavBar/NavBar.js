import React from 'react';
import {StyleSheet, View, Text, FlatList, } from 'react-native';
import {Link} from 'react-router-dom';


const NavBar = () => {
  

    return(
        <View>
            <FlatList
                data={[
                <Link to = "/">Home</Link>,
                <Link to = "/parks">Parks</Link>,
                <Link to = "/myprofile">My Profile</Link>
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
      </View>
    )
}

export default NavBar;