import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

const TopHeader = ({navigation}) => {
    return (
        <View style={styles.header}>
            <Icon style={styles.icon} onPress={() => navigation.openDrawer()} name="menu" size={30} color="#fff" />
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
        color:'#fff',
        fontSize:20,
        fontWeight:'700'
    },
    icon:{
        position:'absolute',
        left:10
    }
})

export default TopHeader;
