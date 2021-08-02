import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screen/Home";
import Reviews from "./../screen/Reviews";
import headerStyle from "../assets/style/headerStyle";
import TopHeader from "../shared/TopHeader";
const Stack = createStackNavigator();

const screens = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor:'red'
        }
      }}>
        <Stack.Screen
          options={{
            headerTitle: () => <TopHeader />
          }}
          name="Home"
          component={Home}
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
