import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import TopHeader from '../shared/TopHeader';

const DrawerContainer = createDrawerNavigator();
const Drawer = () => {
    return(
        <NavigationContainer independent={true} >
            <DrawerContainer.Navigator initialRouteName='HomeStack' >
                <DrawerContainer.Screen name='HomeStack' component={HomeStack}
                options={{
                    drawerLabel:'Home'
                }}
                />
                <DrawerContainer.Screen name="AboutStack" component={AboutStack} 
                    options={{
                        drawerLabel:'About'
                    }}
                />
            </DrawerContainer.Navigator>
        </NavigationContainer>
    )
}

export default Drawer;