import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'

export default class Reviews extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>This is Reviews Page</Text>
                <Button title='Go To Home' onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        padding:10,
        marginVertical:10
    }
})