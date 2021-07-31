import React from 'react';
import { View, StyleSheet, Text,Button } from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>This is About Page</Text>
            <Button title='Go To Reviews' onPress={() => navigation.navigate('Reviews')} />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        padding:10,
        marginVertical:10
    }
})

export default About;
