import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screen/About'

const Stack = createStackNavigator();
const AboutStack = () => {
    return(
        <NavigationContainer independent={true} >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AboutStack;