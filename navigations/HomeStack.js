import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Ex1 from '../screens/week2/Ex1';
import Ex2 from '../screens/week2/Ex2';
import Home from '../screens/week6/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" , headerShown : false }}
            />
            <Stack.Screen
                name="Ex1"
                component={Ex1}
                options={{ title: "Exercise 1" }}
            />
            <Stack.Screen
                name="Ex2"
                component={Ex2}
                options={{ title: "Exercise 2" }}
            />
        </Stack.Navigator>
    );

}
