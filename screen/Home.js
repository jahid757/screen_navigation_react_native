import React from 'react';
import { ScrollView, StyleSheet, Text,Button, TouchableOpacity } from 'react-native';
import style from '../assets/style/style';
const Home = ({navigation}) => {
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{padding:10}}>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={style.red}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <Text style={styles.text}>Almost before we knew it, we had left the ground. (home Screen)</Text>
            <TouchableOpacity style={{marginBottom:30}}>
                <Button title="Go To Review" onPress={() => navigation.navigate('Reviews')} />
            </TouchableOpacity>
        </ScrollView>
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
