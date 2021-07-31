import React from 'react';
import { View, StyleSheet, Text,Button } from 'react-native';
import style from '../assets/style/style';
const Home = ({navigation}) => {
    
    return (
        <View style={{padding:10}}>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Button title="Go To About" onPress={() => navigation.navigate('About')} />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Oswald-VariableFont_wght',
        fontSize:20,
        marginVertical:10
    }
})

export default Home;
