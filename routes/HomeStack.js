import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screen/Home";
import About from "../screen/About";
import Reviews from "./../screen/Reviews";
import headerStyle from "../assets/style/headerStyle";
const Stack = createStackNavigator();

const screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        options={{
            title:'My Home',
            headerStyle:{
                backgroundColor:'coral'
            }
        }}
        name="Home" 
        component={Home} 
        />
        <Stack.Screen
          name="About"
          component={About} 
          options={{
            title:'About Page',
            headerStyle:{
                backgroundColor:'#2b2b2b',
            },
            headerTitleStyle:{
                color:'#fff',
                marginLeft:-19,
            },
            headerTintColor:'#fff'
          }}
          />
        <Stack.Screen 
        name="Reviews" 
        component={Reviews}
        options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default screens;
