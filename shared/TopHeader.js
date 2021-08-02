import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TopHeader = () => {
    return (
        <View style={styles.header}>
            {/* icon */}
            <View>
                <Text style={styles.text}>Home Page</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#fff'
    }
})

export default TopHeader;
