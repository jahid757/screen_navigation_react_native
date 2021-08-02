import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Post from '../screen/Post'

const Stack = createStackNavigator();

const PostStack = () => {
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Post" component={Post} options={{
                    headerTitle:'Post Page'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default PostStack;
