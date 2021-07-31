import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    
    return (
        <View>
            <Text>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Oswald-VariableFont_wght',
        fontSize:20,
    }
})

export default Home;
