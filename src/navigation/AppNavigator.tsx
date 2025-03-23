import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import JobFinderScreen from "../screens/JobFinderScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="ResuMe" component={JobFinderScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;