import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../screen/Home';
import About from '../screen/About'
import Reviews from './../screen/Reviews';

const Stack = createStackNavigator()

const screens = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Reviews" component={Reviews}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default screens;
